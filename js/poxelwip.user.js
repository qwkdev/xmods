// ==UserScript==
// @name		BaldyBot
// @namespace	xmods
// @version		1.0
// @description	POXEL.IO Cheats
// @match		*://*.poxel.io/*
// @run-at		document-end
// @grant		none
// ==/UserScript==

const cfg = {
	vertexCount: 192,
	depthCut: 0,
};

const WebGL = WebGL2RenderingContext.prototype;

HTMLCanvasElement.prototype.getContext = new Proxy(
	HTMLCanvasElement.prototype.getContext,
	{
		apply(target, thisArg, args) {
			if (args[1]) {
				args[1].preserveDrawingBuffer = true;
				args[1].antialias = false;
				args[1].powerPreference = 'high-performance';
			}
			return Reflect.apply(...arguments);
		},
	},
);

WebGL.shaderSource = new Proxy(WebGL.shaderSource, {
	apply(target, thisArg, args) {
		let [shader, source] = args;

		if (source.indexOf('gl_Position') > -1) {
			if (source.indexOf('unity_ObjectToWorld') > -1)
				shader.isPlayerShader = true;

			source = source.replace(
				'void main',
				`out float vDepth;
				out vec3 vWorldPos;
				uniform bool uESP;
				uniform float uDepthCut;
				void main`,
			).replace(
				/return;/,
				`vDepth = gl_Position.z;
				vWorldPos = gl_Position.xyz;
				if (uESP && vDepth > uDepthCut) { gl_Position.z = 1.0; }
				`,
			);
		} // else if (source.indexOf('SV_Target0') > -1) {
		// 	source = source.replace(
		// 		'void main',
		// 		`in float vDepth;
		// 		in vec3 vWorldPos;

		// 		uniform bool uESP;
		// 		uniform float uDepthCut;
		// 		void main`,
		// 	).replace(
		// 		/return;/,
		// 		`if (uESP && vDepth > uDepthCut) {
		// 			SV_Target0 = vec4(1.0, 1.0, 1.0, 0.2);
		// 		}`,
		// 	);
		// }
		args[1] = source;
		return Reflect.apply(...arguments);
	},
});

WebGL.attachShader = new Proxy(WebGL.attachShader, {
	apply(target, thisArg, [program, shader]) {
		if (shader.isPlayerShader)
			program.isPlayerProgram = true;
		return Reflect.apply(...arguments);
	},
});

WebGL.getUniformLocation = new Proxy(WebGL.getUniformLocation, {
	apply(target, thisArg, [program, name]) {
		const loc = Reflect.apply(...arguments);
		if (loc) {
			loc.name = name;
			loc.program = program;
		}
		return loc;
	},
});

let curVPMatrix;
WebGL.uniform4fv = new Proxy(WebGL.uniform4fv, {
	apply(target, thisArg, [loc, value]) {
		if (loc && value && (loc?.name.endsWith('unity_ObjectToWorld') || loc?.name.endsWith('unity_ObjectToWorld[0]'))) {
			loc.program.isUIProgram = true;

			const prog = loc.program;
			prog._objectToWorld = new Float32Array(value);
			prog._position = {
				x: value[12],
				y: value[13],
				z: value[14],
			}
		}

		if (loc?.name.endsWith('unity_MatrixVP') || loc?.name.endsWith('unity_MatrixVP[0]')) {
            currentVPMatrix = new Float32Array(value);
        }

		return Reflect.apply(...arguments);
	},
});

let playerPos = {};

const drawHandler = {
	apply(target, thisArg, args) {
		const prog = thisArg.getParameter(thisArg.CURRENT_PROGRAM);
		if (!prog._u)
			prog._u = {
				esp: thisArg.getUniformLocation(prog, 'uESP'),
				depth: thisArg.getUniformLocation(prog, 'uDepthCut'),
			};
		const isPlayer = prog.isPlayerProgram && args[1] === cfg.vertexCount;
		if (prog._u.esp) thisArg.uniform1i(prog._u.esp, isPlayer);
		if (prog._u.depth) thisArg.uniform1f(prog._u.depth, cfg.depthCut);
		if (isPlayer) {
			gl = thisArg;

			if (prog._position) {
				playerPos[prog.name] = { ...prog._position, t: performance.now() };
				// console.log('[PROG]', prog.name, prog);
			}
		}
		const result = Reflect.apply(...arguments);
		return result;
	},
};

WebGL.drawElements = new Proxy(WebGL.drawElements, drawHandler);
WebGL.drawElementsInstanced = new Proxy(
	WebGL.drawElementsInstanced,
	drawHandler,
);

function worldToScreen(pos, vp, width, height) {

    const x = pos.x;
    const y = pos.y;
    const z = pos.z;

    const clipX = vp[0]*x + vp[4]*y + vp[8]*z + vp[12];
    const clipY = vp[1]*x + vp[5]*y + vp[9]*z + vp[13];
    const clipZ = vp[2]*x + vp[6]*y + vp[10]*z + vp[14];
    const clipW = vp[3]*x + vp[7]*y + vp[11]*z + vp[15];

    if (clipW <= 0)
        return null;

    const ndcX = clipX / clipW;
    const ndcY = clipY / clipW;

    return {
        x: (ndcX * 0.5 + 0.5) * width,
        y: (-ndcY * 0.5 + 0.5) * height,
        depth: clipZ / clipW
    };
}

const debugEle = document.createElement('p');
debugEle.style.cssText = `font-size: 15px; font-family: monospace; text-align: left; position: fixed; top: 0; left: 0; background: #0009; color: #fff;`
document.body.appendChild(debugEle);

window.requestAnimationFrame = new Proxy(window.requestAnimationFrame, {
    apply(target, thisArg, args) {
        args[0] = new Proxy(args[0], {
            apply() {
				// debugEle.innerHTML = `<pre>${Object.entries(playerPos)
				// 	.map(e => [...([e[1].x, e[1].y, e[1].z].map(Math.round)), e[0]])
				// 	.map(JSON.stringify)
				// 	.join('<br>')}</pre>`;
				// playerPos = [];
				// console.log(playerPos);
                return Reflect.apply(...arguments);
            }
        });
        return Reflect.apply(...arguments);
    }
});

function showData(data) {
	if (data instanceof ArrayBuffer) bytes = new Uint8Array(data);
    else if (data instanceof Uint8Array) bytes = data;

	if (
		!bytes ||
		(bytes[0] === 13 && (bytes[1] === 40 || bytes[1] === 80)) ||
		(bytes[0] === 15 && bytes[1] === 255)
	) return null;

	debugEle.innerHTML = `${Array.from(bytes).map(n => {
		const s = String(n);
		return s.padStart(3, '0');
	}).join(' ')}`;

	return bytes;
}

const OrigWS = window.WebSocket;
window.WebSocket = function(...args) {
    const ws = new OrigWS(...args);
    ws.addEventListener('open', () => {
        gameSocket = ws;
        console.log('%cHooked', 'font-size: 30px; color: red;');
    });
    const origSend = ws.send.bind(ws);
    ws.send = function(data) {
		const r = showData(data);
		if (r !== null) console.log('[ws OUT]', r);
        // if (data instanceof ArrayBuffer || data instanceof Uint8Array) {
        //     const modified = processOutgoing(data);
        //     if (modified === null) return;
        //     return origSend(modified);
        // }
        return origSend(data);
    };

	window.wssend = d => {
		const n = new Uint8Array(d.length);
        n.set(d);
		ws.send(n.buffer);
	};

    ws.addEventListener('message', e => {
		const r = showData(e.data);
		if (r !== null) console.log('[ws IN]', r);
	});
    return ws;
};
window.WebSocket.prototype = OrigWS.prototype;
Object.assign(window.WebSocket, { CONNECTING: 0, OPEN: 1, CLOSING: 2, CLOSED: 3 });



// glock to player
// window.wssend([
//    13,  59, 137, 161, 116, 203,  64, 129,  29, 156,   6, 204,
//     0,   0, 168, 116,  97, 114, 103, 101, 116,  73, 100, 169,
//    98, 106,  97, 107, 122, 106,  76,  50,  56, 166,  97, 109,
//   111, 117, 110, 116,  30, 165, 103, 117, 110,  73,  68,  13,
//   164, 104, 105, 116,  88, 202,  65,  40, 152, 237, 164, 104,
//   105, 116,  89, 202, 193, 166, 217, 238, 164, 104, 105, 116,
//    90, 202, 194,  55, 241, 205, 167, 104, 105, 116,  78,  97,
//   109, 101,   4, 162, 105, 100, 210, 133, 139, 177, 129
// ]);


