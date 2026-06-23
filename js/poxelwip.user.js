// ==UserScript==
// @name		BaldyBot
// @namespace	xmods
// @version		1.0
// @description	POXEL.IO Cheats
// @match		*://*.poxel.io/*
// @run-at		document-end
// @grant		none
// ==/UserScript==

async function wait(t) {
    return new Promise(r => setTimeout(r, t));
}

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

window.players = {};
function parseData(data) {
    if (data instanceof ArrayBuffer) b = new Uint8Array(data);
    else b = data;
	// if (data instanceof Uint8Array)

	// console.log('[ws]', b);

	if (!b) return

	if (compareByIndex(b,
		[0, 1, 2, 3], [14, 143, 0, 128]
	)) {
		console.log('%cHooking current players...', 'font-size: 20px; color: red;');
		const parts = split8bit(b, [129,169])
			.slice(1)
			.map(p => split8bit(p, [130]).slice(0, 2))
			.map(([p, u]) => [
				p, String.fromCharCode(...split8bit(u.slice(1), [60])[0])
			]);

		window.players = {};
		for (const part of parts) {
			const pnum = split8bit(b, [169, ...part[0]])[0].at(-1);
			window.players[pnum] = part;
			console.log(`%cHooked ${pnum} ${part[1]}`, 'font-size: 15px; color: green;');
		}
	}

	if (compareByIndex(b,
		[0, 1, 2, 3, 5],
		[15, 255, 1, 128, 169]
	)) {
		console.log('%cHooking new player...', 'font-size: 20px; color: red;');
		const pid = b.slice(6, 15);
		const parts = split8bit(b, pid);
		const username = split8bit(parts[2].slice(2), [60], true)[0]
		window.players[b[4]] = [pid, username];
		console.log(`%cHooked ${username}`, 'font-size: 15px; color: green;');
	} else if (compareByIndex(b,
		[0, 1, 2, 3],
		[15, 255, 1, 64]
	)) {
		console.log('%cUnhooking player...', 'font-size: 20px; color: red;');
		delete window.players[b[4]];
	}
}

function rws(n) {
	return Array.from({ length: n }, () => Math.floor(Math.random() * 256));
}

function sendKill(pid) {
	window.wssend([
		13, 59, 137, 161, 116, 203, 64,
		...rws(5),
		0, 0, 168, 116, 97, 114, 103, 101, 116, 73, 100, 169,
		...pid,
		166, 97, 109, 111, 117, 110, 116, 209, 0,
		...rws(1),
		165, 103, 117, 110, 73, 68, 3, 164, 104, 105, 116, 88, 202, 192,
		...rws(3),
		164, 104, 105, 116, 89, 202, 63,
		...rws(3),
		164, 104, 105, 116, 90, 202, 65,
		...rws(3),
		167, 104, 105, 116, 78, 97, 109, 101, 4, 162, 105, 100, 210,
		...rws(4),
	]);
}

window.sendKill = pid => sendKill(pid);
window.killPlayer = p => sendKill(window.players[p][0]);

async function killAll() {
	for (const p of Object.keys(window.players)) {
		sendKill(window.players[p][0]);
		wait(100);
	}
}

let killAllInterval;
window.killAll = () => {
	if (killAllInterval) { clearInterval(killAllInterval); return false }
	else { killAllInterval = setInterval(killAll, 100); return true }
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