// ==UserScript==
// @name		BaldyBot
// @namespace	xmods
// @version		1.0
// @description	POXEL.IO Cheats
// @match		*://*.poxel.io/*
// @run-at		document-start
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
				console.log('[SOURCE]', target, thisArg, args);
				
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
		} else if (source.indexOf('SV_Target0') > -1) {
			source = source.replace(
				'void main',
				`in float vDepth;
				in vec3 vWorldPos;

				uniform bool uESP;
				uniform float uDepthCut;
				void main`,
			).replace(
				/return;/,
				`if (uESP && vDepth > uDepthCut) {
					SV_Target0 = vec4(1.0, 1.0, 1.0, 0.2);
				}`,
			);
			// args[0] = thisArg.LINES;
			// SV_Target0 = vec4(1.0, 0.3, 0.5, 1.0);
		}
		args[1] = source;
		return Reflect.apply(...arguments);
	},
});

WebGL.attachShader = new Proxy(WebGL.attachShader, {
	apply(target, thisArg, [program, shader]) {
		if (shader.isPlayerShader) {
			console.log('[SHADER]', shader);
			program.isPlayerProgram = true;
		}
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

WebGL.uniform4fv = new Proxy(WebGL.uniform4fv, {
	apply(target, thisArg, [loc]) {
		const n = loc?.name;
		if (n === 'unity_ObjectToWorld' || n === 'unity_ObjectToWorld[0]')
			loc.program.isUIProgram = true;
		return Reflect.apply(...arguments);
	},
});

let names = [];

const drawHandler = {
	apply(target, thisArg, args) {
		const prog = thisArg.getParameter(thisArg.CURRENT_PROGRAM);
		if (!prog._u) {
			prog._u = {
				esp: thisArg.getUniformLocation(prog, 'uESP'),
				depth: thisArg.getUniformLocation(prog, 'uDepthCut'),
			};
		}
		const vc = args[1];
		const isPlayer = prog.isPlayerProgram && vc === cfg.vertexCount;

		if (isPlayer && !names.includes(prog.name)) {
            console.log("[DRAW]", {
                program: prog,
                isPlayerProgram: prog.isPlayerProgram,
                vertexCount: vc,
            });

            names.push(prog.name);
        }


		if (prog._u.esp) thisArg.uniform1i(prog._u.esp, isPlayer);
		if (prog._u.depth) thisArg.uniform1f(prog._u.depth, cfg.depthCut);
		if (isPlayer) gl = thisArg;
		const result = Reflect.apply(...arguments);
		return result;
	},
};

WebGL.drawElements = new Proxy(WebGL.drawElements, drawHandler);
WebGL.drawElementsInstanced = new Proxy(
	WebGL.drawElementsInstanced,
	drawHandler,
);
