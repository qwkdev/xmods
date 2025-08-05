(() => {

const VERSION = "05.08.25";

// if (document.getElementById("xmods-gui")) throw new Error("GUI already exists!");

console.log("%c[XMODS] Injecting...", "color: #00ff00; font-size: 10px;");
var wfcall = window.fetch.call;
window.fetch.call = function() {
	if (!arguments[1].includes("s.blooket.com/rc"))
		return wfcall.apply(this, arguments);
	console.log("%c Blooket Anti-Cheat Report Blocked!", "color: #ff0000; font-weight: bold; font-size: 16px;");
}

// background: rgba(245, 245, 255, 0.112);
// backdrop-filter: blur(20px);
// border: 0.1vw solid rgba(255, 255, 255, 0.164);

const css = document.createElement("style");
css.id = "xmods-css";
css.textContent = `
:root {
	--gui-width: 50vw;
}
// @font-face {
// 	font-family: __Nunito_a897b5,__Nunito_Fallback_a897b5;
// 	src: url('https://ac.blooket.com/play-frontend/7201455f0ac6125ab86bc14b705e1ccfb3cbb44d/_next/static/media/40d40f0f334d7ad1-s.p.woff2') format('woff2');
// 	font-weight: normal;
// 	font-style: normal;
// }

.xmods-underlined {
	color: #fff;
	font-family: __Nunito_a897b5,__Nunito_Fallback_a897b5;
	font-weight: 500;
	position: relative;
	transition: .2s;
	z-index: 2;
	text-decoration: none;
}
.xmods-underline {
	--widen: 0%;
	--fix: 0%;
	width: calc(100% + var(--widen));
	transform: translateX(calc(-100% + var(--fix)));
	height: 1px;
	background: #fff;
	position: absolute;
	bottom: 0;
	transition: .2s;
	z-index: -1;
	border-radius: 10%;
}
.xmods-underlined:hover {
	color: #000;
}
.xmods-underlined:hover .xmods-underline {
	height: 100%;
}
.xmods-underlined::selection {
	background: #ffffff55;
}

#xmods-gui {
	position: absolute;
	top: calc(50vh - var(--gui-width) * 0.75);
	left: calc(50vw - var(--gui-width) * 0.5);
	width: var(--gui-width);
	height: calc(var(--gui-width) * 1.5);

	background: #00000a66;
	backdrop-filter: blur(calc(var(--gui-width) * 0.02));
	border: calc(var(--gui-width) * 0.01) solid #00000a1a;
	border-radius: calc(var(--gui-width) * 0.06);
}
.xmods-gui-drag {
	position: absolute;
	left: 0;
	width: 100%;

	background: #00000a1a;
	border-radius: calc(var(--gui-width) * 0.05);

	cursor: move;

	h1 {
		font-family: __Nunito_a897b5,__Nunito_Fallback_a897b5;
		width: 100%;
		position: absolute;
		top: 47%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: calc(var(--gui-width) * 0.06);
		color: #ffffff;
		text-align: center;
		margin: 0;

		span {
			margin-left: calc(var(--gui-width) * 0.02);
			font-size: calc(var(--gui-width) * 0.03);
		}
	}
	p {
		font-family: __Nunito_a897b5,__Nunito_Fallback_a897b5;
		width: 100%;
		position: absolute;
		top: 55%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: calc(var(--gui-width) * 0.04);
		color: #ffffff;
		text-align: center;
		margin: 0;
		font-weight: 500;
	}
}
#xmods-gui-drag-top {
	top: 0;
	height: calc(var(--gui-width) * 0.12);
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
}
#xmods-gui-drag-bottom {
	bottom: 0;
	height: calc(var(--gui-width) * 0.07);
	border-top-left-radius: 0;
	border-top-right-radius: 0;
}

#xmods-gui-main {
	position: absolute;
	width: 100%;
	height: calc(100% - (var(--gui-width) * 0.19));
	top: calc(var(--gui-width) * 0.12);
	left: 0;

	overflow-x: hidden;
	overflow-y: scroll;

	// display: grid;
	// grid-template-columns: 100%;
	// gap: calc(var(--gui-width) * 0.02);

	h1 {
		width: 100%;
		height: calc(var(--gui-width) * 0.12);
		line-height: calc(var(--gui-width) * 0.12);
		font-size: calc(var(--gui-width) * 0.07);

		font-family: __Nunito_a897b5,__Nunito_Fallback_a897b5;
		color: #ffffff;
		text-align: center;
		margin: 0;

		transition: .2s;

		&:hover {
			transform: scale(1.05);
		}
	}
	section {
		width: 100%;
		height: max-content;

		padding: 0 calc(var(--gui-width) * 0.07);
		display: grid;

		grid-template-columns: 1fr 1fr;
		gap: calc(var(--gui-width) * 0.02);

		button {
			width: 100%;
			height: calc(var(--gui-width) * 0.1);

			font-size: calc(var(--gui-width) * 0.04);
			color: #fff;
			background: #ffffff1a;
			border: calc(var(--gui-width) * 0.007) solid #ffffff2a;
			border-radius: calc(var(--gui-width) * 0.02);

			transition: .2s;

			&:hover {
				background: #ffffff2a;
				border-color: #ffffff3a;
			}
		}
		.xmods-wide {
			grid-column: 1 / -1;
		}
	}
}
`;
document.head.appendChild(css);

// })();
// (() => {

const gui = document.createElement("div");
gui.id = "xmods-gui";
gui.innerHTML = `
	<div id="xmods-gui-drag-top" class="xmods-gui-drag">
		<h1>Example Words<span>v${VERSION}</span></h1>
	</div>
	<div id="xmods-gui-main">
		<h1>Global</h1>
		<section id="xmods-gui-global">
			<button>Example Action</button>
			<button class="xmods-toggle">Example Toggle</button>
			<button class="xmods-wide">Example Wide Action</button>
			<div class="xmods-input">
				<input type="text" placeholder="Example Input">
				<button>GO</button>
			</div>
			<div class="xmods-select">
				<div class="xmods-option" value="1">Option 1</option>
				<div class="xmods-option" value="2">Option 2</option>
				<div class="xmods-option" value="3">Option 3</option>
			</div> <!-- TODO: Custom JS select with images and stuff -->
		</section>
	</div>
	<div id="xmods-gui-drag-bottom" class="xmods-gui-drag">
		<p>Made By <span><a class="xmods-underlined" href="https://qwkdev.github.io/" target="_blank" aria-label="label">qwk<span class="xmods-underline" style="--widen: 10%; --fix: 5.5%;"></span></a></span></p>
	</div>
`;
document.body.appendChild(gui);

// only here for demo; will be generated
gui.querySelector("#xmods-gui-main h1").onclick = e => guiCollapse(e.currentTarget, "global");

// gui.addEventListener("mousemove", e => {
// 	if (e.target.id === gui.id && e.buttons !== 0) {
// 		const rect = gui.getBoundingClientRect();
// 		gui.style.top = `${e.clientY - rect.top}px`;
// 		gui.style.left = `${e.clientX - rect.left}px`;
// 	}
// });

let guiDragging = false;
let guiOffsetX = 0;
let guiOffsetY = 0;

const startGuiDrag = e => {
	if (e.button === 0) {
		guiDragging = true;
		guiOffsetX = e.layerX;
		guiOffsetY = e.layerY;
	}
};
gui.querySelector('#xmods-gui-drag-top').addEventListener("mousedown", startGuiDrag);
gui.querySelector('#xmods-gui-drag-bottom').addEventListener("mousedown", startGuiDrag);
document.addEventListener("mouseup", () => { guiDragging = false; });
document.addEventListener("mousemove", e => {
	if (guiDragging) {
		gui.style.left = `${e.clientX - guiOffsetX}px`;
		gui.style.top = `${e.clientY - guiOffsetY}px`;
	}
});

window.guiCollapse = (label, id) => {
	const section = document.getElementById(`xmods-gui-${id}`);
	label.style.color = section.style.display === "none" ? "#fff" : "#bff";
	section.style.display = section.style.display === "none" ? "grid" : "none";
}

console.log("%c[XMODS] Injected successfully!", "color: #00ff00; font-weight: bold; font-size: 10px;");

// console.clear();
// console.log("%c Blooket Hacks ", "background: linear-gradient(to right, #f00, #000, #f00); border: 3px solid #f00; color: #ffffff; font-weight: bold; font-size: 30px;");
// console.log("%cFrom: %c xmods.vip ", "", "background: linear-gradient(to right, #70f, #0af); color: #ffffff; border-radius: 20px; font-weight: bold; font-size: 20px;");

})();