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

let playerPos = [];

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
				playerPos.push(prog._position);
				// console.log(prog._position);
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

const gameCanvas = document.getElementById('unity-canvas');
const overlay = document.createElement('canvas');
overlay.style.position = 'fixed';
overlay.style.left = '0';
overlay.style.top = '0';
overlay.style.width = '100vw';
overlay.style.height = '100vh';
overlay.style.pointerEvents = 'none';
overlay.style.zIndex = '999999';
document.body.appendChild(overlay);
const overlayCtx = overlay.getContext('2d');

overlayCtx.fillStyle = '#ff00ff';
overlayCtx.beginPath();
overlayCtx.arc(parseInt(500/100), parseInt(300/100), 10, 0, Math.PI * 2);
overlayCtx.fill();
overlayCtx.beginPath();
overlayCtx.arc(parseInt(300), parseInt(300), 10, 0, Math.PI * 2);
overlayCtx.fill();

// ctx.fillStyle = 'red';
// ctx.fillRect(0, 0, overlay.width, overlay.height);

window.requestAnimationFrame = new Proxy(window.requestAnimationFrame, {
    apply(target, thisArg, args) {
        args[0] = new Proxy(args[0], {
            apply() {
				console.log('[.] starting');
				// ctx.clearRect(0, 0, overlay.width, overlay.height);

				for (const player of playerPos) {
					const p = worldToScreen(
						player,
						currentVPMatrix,
						gameCanvas.width,
						gameCanvas.height
					);

					console.log('[.] ok...');

					if (!p) continue;

					console.log('[.] ok2...', p);

					overlayCtx.fillStyle = '#ff00ff';
					overlayCtx.beginPath();
					overlayCtx.arc(p.x/10, p.y/10, 5, 0, Math.PI * 2);
					overlayCtx.fill();

					console.log('[.] yay');
				}


				// console.log(playerPos);
                playerPos = [];
                return Reflect.apply(...arguments);
            }
        });
        return Reflect.apply(...arguments);
    }
});
