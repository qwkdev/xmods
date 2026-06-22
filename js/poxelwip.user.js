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
	depthCut: 0
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

window.requestAnimationFrame = new Proxy(window.requestAnimationFrame, {
    apply(target, thisArg, args) {
        args[0] = new Proxy(args[0], {
            apply() {
                return Reflect.apply(...arguments);
            }
        });
        return Reflect.apply(...arguments);
    }
});

function compareByIndex(a1, indices, a2) {
	for (let i = 0; i < indices.length; i++) {
		let j = indices[i];
		if (a1[j] === undefined || a2[i] === undefined || a1[j] !== a2[i]) {
			return false;
		}
	}

	return true;
}

function split8bit(data, delimiter, keepAsStr=false) {
	const resp = String.fromCharCode(...data)
		.split(String.fromCharCode(...delimiter));
		
	if (keepAsStr) return resp;
	return resp.map(s => [...s].map(c => c.charCodeAt(0)));
}

// document.createElement();

let players = {};
function parseData(data) {
    if (data instanceof ArrayBuffer) b = new Uint8Array(data);
    else if (data instanceof Uint8Array) b = data;

	// console.log('[ws]', b);

    // if (!bytes || !(
    //     bytes[0] === 13 &&
    //     bytes[1] === 59 &&
    //     bytes[2] === 137 &&
    //     bytes[3] === 161 &&
    //     bytes[4] === 116 &&
    //     bytes[5] === 203 &&
    //     bytes[6] === 64
    // )) return;

    // players.push(bytes.slice(24, 33));

	if (!b) return

	// if (compareByIndex(b,
	// 	[0, 1, 2, 3], [14, 143, 0, 128]
	// ))

	if (compareByIndex(b,
		[0, 1, 2, 3, 5],
		[15, 255, 1, 128, 169]
	)) {
		// console.log('[ws] found somethjigngng....');
		// console.log('[ws]', b);

		const pid = b.slice(6, 15);
		const parts = split8bit(b, pid);
		const username = split8bit(parts[2].slice(2), [60], true)[0]
		players[b[4]] = [pid, username];
	} else if (compareByIndex(b,
		[0, 1, 2, 3],
		[15, 255, 1, 64]
	)) {
		// console.log('[ws] logout????...');
		delete players[b[4]];
	}
}

function sendKill(pid) {
	window.wssend([
		13, 59, 137, 161, 116, 203, 64,
		123, 123, 123, 123, 123, //?
		0, 0, 168, 116, 97, 114, 103, 101, 116, 73, 100, 169,
		...pid,
		166, 97, 109, 111, 117, 110, 116, 209, 0,
		123, //?
		165, 103, 117, 110, 73, 68, 3, 164, 104, 105, 116, 88, 202, 192,
		123, 123, 123, //?
		164, 104, 105, 116, 89, 202, 63,
		123, 123, 123, //?
		164, 104, 105, 116, 90, 202, 65,
		123, 123, 123, //?
		167, 104, 105, 116, 78, 97, 109, 101, 4, 162, 105, 100, 210,
		123, 123, 123, 123 //?
	]);
}

window.sendKill = pid => sendKill(pid);
window.killPlayer = p => sendKill(players[p][0]);
window.getPlayers = () => players;

function killAll() {
	Object.keys(players).forEach(p => sendKill(players[p][0]));
}

let killAllInterval;
window.killAll = () => {
	if (killAllInterval) { clearInterval(killAllInterval); return false }
	else { setInterval(killAll, 100); return true }
}

const _WebSocket = window.WebSocket;
window.WebSocket = function(...args) {
    const ws = new _WebSocket(...args);
    ws.addEventListener('open', () => {
        gameSocket = ws;
        console.log('%cHooked', 'font-size: 30px; color: red;');
    });
    const _WSSend = ws.send.bind(ws);
    ws.send = d => {
		parseData(d);
        return _WSSend(d);
    };

	window.wssend = d => {
		const n = new Uint8Array(d.length);
        n.set(d);
		ws.send(n.buffer);
	};

    ws.addEventListener('message', e => parseData(e.data));
    return ws;
};
window.WebSocket.prototype = _WebSocket.prototype;
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