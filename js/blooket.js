(() => {

const VERSION = "10.08.25";

if (document.getElementById("xmods-gui")) {
	document.getElementById('xmods-gui').remove();
	document.getElementById('xmods-css').remove();
}

console.log("%c[XMODS] Injecting...", "color: #00ff00; font-size: 10px;");
var wfcall = window.fetch.call;
window.fetch.call = function() {
	if (!arguments[1].includes("s.blooket.com/rc"))
		return wfcall.apply(this, arguments);
	console.log("%c Blooket Anti-Cheat Report Blocked!", "color: #ff0000; font-weight: bold; font-size: 16px;");
}

function fixAP() {
	const tempIframe = document.createElement("iframe");
	document.body.append(tempIframe);
	window.prompt = tempIframe.contentWindow.prompt.bind(window);
	window.alert = tempIframe.contentWindow.alert.bind(window);
	tempIframe.remove();
}

const css = document.createElement("style");
css.id = "xmods-css";
css.textContent = `
:root {
	--gui-width: 50vw;
}
.xmods-underlined {
	color: #fff;
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
	background: #ffffff44;
}
#xmods-gui {
	position: absolute;
	top: calc(50vh - var(--gui-width) * 0.75);
	left: calc(50vw - var(--gui-width) * 0.5);
	width: var(--gui-width);
	height: calc(var(--gui-width) * 1.5);
	background: #00000a66;
	backdrop-filter: blur(calc(var(--gui-width) * 0.04));
	border: calc(var(--gui-width) * 0.01) solid #00000a1a;
	border-radius: calc(var(--gui-width) * 0.06);
}
#xmods-gui.xmods-hidden {
	height: calc(var(--gui-width) * 0.135);
}
#xmods-gui.xmods-hidden #xmods-gui-drag-top {
	border-radius: calc(var(--gui-width) * 0.05);
}
#xmods-gui.xmods-hidden #xmods-gui-main, #xmods-gui.xmods-hidden #xmods-gui-drag-bottom {
	display: none;
}
#xmods-gui, #xmods-gui * {
	font-family: inherit;
	box-sizing: border-box;
}
.xmods-gui-drag {
	position: absolute;
	left: 0;
	width: 100%;
	background: #00000a1a;
	border-radius: calc(var(--gui-width) * 0.05);
	cursor: move;
}
.xmods-gui-drag h1 {
	width: 100%;
	position: absolute;
	top: 47%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: calc(var(--gui-width) * 0.06);
	color: #ffffff;
	text-align: center;
	margin: 0;
}
.xmods-gui-drag h1 span {
	margin-left: calc(var(--gui-width) * 0.02);
	font-size: calc(var(--gui-width) * 0.03);
}
.xmods-gui-drag h1 span::selection {
	background: #ffffff44;
}
.xmods-gui-drag h1::selection {
	background: #ffffff44;
}
.xmods-gui-drag p {
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
.xmods-gui-drag p::selection {
	background: #ffffff44;
}
#xmods-gui-drag-top {
	top: 0;
	height: calc(var(--gui-width) * 0.12);
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
}
#xmods-gui-drag-top button {
	position: absolute;
	top: 0;
	width: calc(var(--gui-width) * 0.11);
	height: calc(var(--gui-width) * 0.11);
	background: none;
	border: none;
	cursor: pointer;
	z-index: 3;
}
#xmods-gui-drag-top button svg {
	position: absolute;
	top: calc(var(--gui-width) * 0.015);
	left: calc(var(--gui-width) * 0.015);
	width: calc(var(--gui-width) * 0.08);
	height: calc(var(--gui-width) * 0.08);
}
#xmods-gui-drag-top button svg path {
	stroke: #fff;
}
#xmods-gui-drag-top #xmods-gui-hide {
	left: 0;
}
#xmods-gui-drag-top #xmods-gui-hide svg {
	left: calc(var(--gui-width) * 0.02);
}
#xmods-gui-drag-top #xmods-gui-close {
	right: 0;
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
}
#xmods-gui-main h1 {
	width: 100%;
	height: calc(var(--gui-width) * 0.12);
	line-height: calc(var(--gui-width) * 0.12);
	font-size: calc(var(--gui-width) * 0.07);
	color: #ffffff;
	text-align: center;
	margin: 0;
	transition: .2s;
}
#xmods-gui-main h1:hover {
	transform: scale(1.05);
}
#xmods-gui-main h1::selection {
	background: #ffffff44;
}
#xmods-gui-main section {
	width: 100%;
	height: max-content;
	padding: 0 calc(var(--gui-width) * 0.07);
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: calc(var(--gui-width) * 0.02);
}
#xmods-gui-main section button, #xmods-gui-main section input[type="text"], #xmods-gui-main section input[type="number"] {
	width: 100%;
	height: calc(var(--gui-width) * 0.1);
	font-size: calc(var(--gui-width) * 0.04);
	color: #fff;
	background: #ffffff1a;
	border: calc(var(--gui-width) * 0.007) solid #ffffff2a;
	border-radius: calc(var(--gui-width) * 0.02);
	white-space: nowrap;
	transition: .2s;
}
#xmods-gui-main section button:not(.xmods-choice):hover, #xmods-gui-main section input[type="text"]:hover, #xmods-gui-main section input[type="number"]:hover {
	background: #ffffff2a;
	border-color: #ffffff3a;
}
#xmods-gui-main section .xmods-toggle[data-state="0"] {
	background: #ff000066 !important;
}
#xmods-gui-main section .xmods-toggle[data-state="1"] {
	background: #00ff0033 !important;
}
#xmods-gui-main section .xmods-wide {
	grid-column: 1 / -1;
}
#xmods-gui-main section .xmods-input {
	display: grid;
	grid-template-columns: 4fr 1fr;
	width: 100%;
	height: calc(var(--gui-width) * 0.1);
}
#xmods-gui-main section .xmods-just-input {
	width: 100%;
	height: calc(var(--gui-width) * 0.1);
}
#xmods-gui-main section .xmods-just-input input {
	padding-left: calc(var(--gui-width) * 0.02);
}
#xmods-gui-main section .xmods-input input {
	padding-left: calc(var(--gui-width) * 0.02);
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
}
#xmods-gui-main section .xmods-input input:focus, #xmods-gui-main section .xmods-just-input input:focus {
	outline: none;
	border: calc(var(--gui-width) * 0.007) solid #ffffff55;
}
#xmods-gui-main section .xmods-input input::selection, #xmods-gui-main section .xmods-just-input input::selection {
	background: #ffffff44;
}
#xmods-gui-main section .xmods-input button {
	position: relative;
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	border-left: none;
}
#xmods-gui-main section .xmods-input button svg {
	position: absolute;
	top: 8%;
	left: 10%;
	width: 80%;
	height: 80%;
}
#xmods-gui-main section .xmods-input button svg path {
	stroke: #fff;
}
#xmods-gui-main section .xmods-input.xmods-toggle[data-state="0"] {
	background: none !important;
}
#xmods-gui-main section .xmods-input.xmods-toggle[data-state="0"] input, #xmods-gui-main section .xmods-input.xmods-toggle[data-state="0"] button {
	background: #ff000066;
}
#xmods-gui-main section .xmods-input.xmods-toggle[data-state="1"] {
	background: none !important;
}
#xmods-gui-main section .xmods-input.xmods-toggle[data-state="1"] input, #xmods-gui-main section .xmods-input.xmods-toggle[data-state="1"] button {
	background: #00ff0033;
}
#xmods-gui-main section .xmods-input.xmods-wide {
	grid-template-columns: 8fr 1fr;
}
#xmods-gui-main section .xmods-select {
	display: grid;
	grid-template-rows: 1fr 3fr;
	height: calc(var(--gui-width) * 0.1);
}
#xmods-gui-main section .xmods-select .xmods-choice {
	position: relative;
	width: 100%;
	height: calc(var(--gui-width) * 0.1);
	background-color: #ffffff1a;
	border: none;
	border-radius: calc(var(--gui-width) * 0.02);
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	transition: .2s;
	font-size: calc(var(--gui-width) * 0.04);
	color: #fff;
	text-align: left;
	padding-left: calc(var(--gui-width) * 0.02);
}
#xmods-gui-main section .xmods-select .xmods-blook-choice {
	background-size: contain;
	background-position: calc(100% - (var(--gui-width) * 0.09)) calc(var(--gui-width) * -0.005);
	background-repeat: no-repeat;
}
#xmods-gui-main section .xmods-select .xmods-choice p {
	width: 0;
	white-space: nowrap;
	margin-block-start: 0 !important;
	margin-block-end: 0 !important;
}
#xmods-gui-main section .xmods-select .xmods-choice svg {
	position: absolute;
	top: calc(var(--gui-width) * 0.009);
	right: calc(var(--gui-width) * 0.009);
	width: calc(var(--gui-width) * 0.08);
	height: calc(var(--gui-width) * 0.08);
}
#xmods-gui-main section .xmods-select .xmods-choice svg path {
	stroke: #fff;
}
#xmods-gui-main section .xmods-select .xmods-choice-no-img, #xmods-gui-main section .xmods-select .xmods-blook-choice {
	border: calc(var(--gui-width) * 0.007) solid #ffffff2a;
}
#xmods-gui-main section .xmods-select .xmods-choice-no-img svg, #xmods-gui-main section .xmods-select .xmods-blook-choice svg {
	top: calc(var(--gui-width) * 0.005);
	right: calc(var(--gui-width) * 0.005);
}
#xmods-gui-main section .xmods-select .xmods-choice-no-img:hover, #xmods-gui-main section .xmods-select .xmods-blook-choice:hover {
	background-color: #ffffff2a;
	border-color: #ffffff3a;
}
#xmods-gui-main section .xmods-select .xmods-options {
	position: relative;
	z-index: 2;
	width: 100%;
	height: calc(var(--gui-width) * 0.3);
	overflow-x: hidden;
	overflow-y: scroll;
	border-radius: calc(var(--gui-width) * 0.02);
	background: #00001055;
	backdrop-filter: blur(calc(var(--gui-width) * 0.01));
}
#xmods-gui-main section .xmods-select .xmods-blook-options {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(calc(var(--gui-width) * 0.08), 1fr));
}
#xmods-gui-main section .xmods-select .xmods-options .xmods-option {
	position: relative;
	width: 100%;
	height: calc(var(--gui-width) * 0.1);
	background: none;
	border: none;
	border-radius: 0;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	transition: .2s;
	font-size: calc(var(--gui-width) * 0.04);
	color: #fff;
	text-align: left;
	padding-left: calc(var(--gui-width) * 0.02);
	white-space: nowrap;
}
#xmods-gui-main section .xmods-select .xmods-options .xmods-option-no-img:hover {
	background: #ffffff11;
}
#xmods-gui-main section .xmods-slider {
	width: 100%;
	height: calc(var(--gui-width) * 0.1);
	background: #ffffff1a;
	border: calc(var(--gui-width) * 0.007) solid #ffffff2a;
	border-radius: calc(var(--gui-width) * 0.02);
	transition: .2s;
	position: relative;
}
#xmods-gui-main section .xmods-slider p {
	position: absolute;
	top: calc(var(--gui-width) * 0.002);
	left: 0;
	width: 100%;
	margin: 0;
	text-align: center;
	font-size: calc(var(--gui-width) * 0.035);
	color: #fff;
}
#xmods-gui-main section .xmods-slider .xmods-range {
	appearance: none;
	-webkit-appearance: none;
	background: transparent;
	cursor: pointer;
	width: 90%;
	position: relative;
	top: 70%;
	left: 50%;
	transform: translate(-50%, -50%);
	--fill: 0%;
}
#xmods-gui-main section .xmods-slider .xmods-range::-webkit-slider-runnable-track {
	background: linear-gradient(to right, #ffffff88 var(--fill), #ffffff22 var(--fill)) !important;
	border-radius: calc(var(--gui-width) * 0.02);
	height: calc(var(--gui-width) * 0.02);
}
#xmods-gui-main section .xmods-slider .xmods-range::-moz-range-track {
	background: linear-gradient(to right, #ffffff88 var(--fill), #ffffff22 var(--fill)) !important;
	border-radius: calc(var(--gui-width) * 0.02);
	height: calc(var(--gui-width) * 0.02);
}
#xmods-gui-main section .xmods-slider .xmods-range::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	background-color: #fff;
	border: none;
	border-radius: 50%;
	width: calc(var(--gui-width) * 0.03);
	height: calc(var(--gui-width) * 0.03);
}
#xmods-gui-main section .xmods-slider .xmods-range::-moz-range-thumb {
	border: none;
	border-radius: 50%;
	background-color: #fff;
	width: calc(var(--gui-width) * 0.03);
	height: calc(var(--gui-width) * 0.03);
}
#xmods-gui-main section .xmods-slider:hover {
	background: #ffffff2a;
	border-color: #ffffff3a;
}
`;
document.head.appendChild(css);

const gui = document.createElement("div");
gui.id = "xmods-gui";
gui.innerHTML = `
	<div id="xmods-gui-drag-top" class="xmods-gui-drag">
		<button id="xmods-gui-hide"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M6 12L18 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg></button>
		<h1>Blooket Hacks<span>v${VERSION}</span></h1>
		<button id="xmods-gui-close"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M6 6L18 18M18 6L6 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg></button>
	</div>
	<div id="xmods-gui-main">
	</div>
	<div id="xmods-gui-drag-bottom" class="xmods-gui-drag">
		<p>Made By <span><a class="xmods-underlined" href="https://qwkdev.github.io/" target="_blank" aria-label="label">qwk<span class="xmods-underline" style="--widen: 10%; --fix: 5.5%;"></span></a></span></p>
	</div>
`;
document.body.appendChild(gui);

gui.querySelector('#xmods-gui-hide').onclick = () => {
	gui.classList.toggle('xmods-hidden');
};
gui.querySelector('#xmods-gui-close').onclick = () => {
	document.getElementById('xmods-gui').remove();
	document.getElementById('xmods-css').remove();
};

let guiDragging = false;
let guiOffsetX = 0;
let guiOffsetY = 0;

const startGuiDrag = e => {
	if (e.button === 0) {
		guiDragging = true;

		const guiRect = gui.getBoundingClientRect();
		guiOffsetX = e.clientX - guiRect.left;
		guiOffsetY = e.clientY - guiRect.top;
	}
};
gui.querySelector('#xmods-gui-drag-top').addEventListener("mousedown", e => startGuiDrag(e));
gui.querySelector('#xmods-gui-drag-bottom').addEventListener("mousedown", e => startGuiDrag(e));
document.addEventListener("mouseup", () => { guiDragging = false; });
document.addEventListener("mousemove", e => {
	if (guiDragging) {
		gui.style.left = `${e.clientX - guiOffsetX}px`;
		gui.style.top = `${e.clientY - guiOffsetY}px`;
	}
});

window.uiCollapse = (label, id) => {
	const section = document.getElementById(`xmods-gui-${id}`);
	label.style.color = section.style.display === "none" ? "" : "#bff";
	section.style.display = section.style.display === "none" ? "grid" : "none";
}

function randomString(len) {
	const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	let result = '';
	for (let i = 0; i < len; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return result;
}
function randomNumbers(len) {
	const characters = '0123456789';
	let result = '';
	for (let i = 0; i < len; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return result;
}

const COSMETIC_OPTIONS = {
	blooks: {
		"Chick":              ["Chick",                "https://ac.blooket.com/marketassets/blooks/chick.svg"],
		"Chicken":            ["Chicken",              "https://ac.blooket.com/marketassets/blooks/chicken.svg"],
		"Cow":                ["Cow",                  "https://ac.blooket.com/marketassets/blooks/cow.svg"],
		"Goat":               ["Goat",                 "https://ac.blooket.com/marketassets/blooks/goat.svg"],
		"Horse":              ["Horse",                "https://ac.blooket.com/marketassets/blooks/horse.svg"],
		"Pig":                ["Pig",                  "https://ac.blooket.com/marketassets/blooks/pig.svg"],
		"Sheep":              ["Sheep",                "https://ac.blooket.com/marketassets/blooks/sheep.svg"],
		"Duck":               ["Duck",                 "https://ac.blooket.com/marketassets/blooks/duck.svg"],
		"Alpaca":             ["Alpaca",               "https://ac.blooket.com/marketassets/blooks/alpaca.svg"],
		"Dog":                ["Dog",                  "https://ac.blooket.com/marketassets/blooks/dog.svg"],
		"Cat":                ["Cat",                  "https://ac.blooket.com/marketassets/blooks/cat.svg"],
		"Rabbit":             ["Rabbit",               "https://ac.blooket.com/marketassets/blooks/rabbit.svg"],
		"Goldfish":           ["Goldfish",             "https://ac.blooket.com/marketassets/blooks/goldfish.svg"],
		"Hamster":            ["Hamster",              "https://ac.blooket.com/marketassets/blooks/hamster.svg"],
		"Turtle":             ["Turtle",               "https://ac.blooket.com/marketassets/blooks/turtle.svg"],
		"Kitten":             ["Kitten",               "https://ac.blooket.com/marketassets/blooks/kitten.svg"],
		"Puppy":              ["Puppy",                "https://ac.blooket.com/marketassets/blooks/puppy.svg"],
		"Bear":               ["Bear",                 "https://ac.blooket.com/marketassets/blooks/bear.svg"],
		"Moose":              ["Moose",                "https://ac.blooket.com/marketassets/blooks/moose.svg"],
		"Fox":                ["Fox",                  "https://ac.blooket.com/marketassets/blooks/fox.svg"],
		"Raccoon":            ["Raccoon",              "https://ac.blooket.com/marketassets/blooks/raccoon.svg"],
		"Squirrel":           ["Squirrel",             "https://ac.blooket.com/marketassets/blooks/squirrel.svg"],
		"Owl":                ["Owl",                  "https://ac.blooket.com/marketassets/blooks/owl.svg"],
		"Hedgehog":           ["Hedgehog",             "https://ac.blooket.com/marketassets/blooks/hedgehog.svg"],
		"Deer":               ["Deer",                 "https://ac.blooket.com/marketassets/blooks/deer.svg"],
		"Wolf":               ["Wolf",                 "https://ac.blooket.com/marketassets/blooks/wolf.svg"],
		"Beaver":             ["Beaver",               "https://ac.blooket.com/marketassets/blooks/beaver.svg"],
		"Tiger":              ["Tiger",                "https://ac.blooket.com/marketassets/blooks/tiger.svg"],
		"Orangutan":          ["Orangutan",            "https://ac.blooket.com/marketassets/blooks/orangutan.svg"],
		"Cockatoo":           ["Cockatoo",             "https://ac.blooket.com/marketassets/blooks/cockatoo.svg"],
		"Parrot":             ["Parrot",               "https://ac.blooket.com/marketassets/blooks/parrot.svg"],
		"Anaconda":           ["Anaconda",             "https://ac.blooket.com/marketassets/blooks/anaconda.svg"],
		"Jaguar":             ["Jaguar",               "https://ac.blooket.com/marketassets/blooks/jaguar.svg"],
		"Macaw":              ["Macaw",                "https://ac.blooket.com/marketassets/blooks/macaw.svg"],
		"Toucan":             ["Toucan",               "https://ac.blooket.com/marketassets/blooks/toucan.svg"],
		"Panther":            ["Panther",              "https://ac.blooket.com/marketassets/blooks/panther.svg"],
		"Capuchin":           ["Capuchin",             "https://ac.blooket.com/marketassets/blooks/capuchinmonkey.svg"],
		"Gorilla":            ["Gorilla",              "https://ac.blooket.com/marketassets/blooks/gorilla.svg"],
		"Hippo":              ["Hippo",                "https://ac.blooket.com/marketassets/blooks/hippo.svg"],
		"Rhino":              ["Rhino",                "https://ac.blooket.com/marketassets/blooks/rhino.svg"],
		"Giraffe":            ["Giraffe",              "https://ac.blooket.com/marketassets/blooks/giraffe.svg"],
		"Snowy Owl":          ["Snowy Owl",            "https://ac.blooket.com/marketassets/blooks/snowyowl.svg"],
		"Polar Bear":         ["Polar Bear",           "https://ac.blooket.com/marketassets/blooks/polarbear.svg"],
		"Arctic Fox":         ["Arctic Fox",           "https://ac.blooket.com/marketassets/blooks/arcticfox.svg"],
		"Baby Penguin":       ["Baby Penguin",         "https://ac.blooket.com/marketassets/blooks/babypenguin.svg"],
		"Penguin":            ["Penguin",              "https://ac.blooket.com/marketassets/blooks/penguin.svg"],
		"Arctic Hare":        ["Arctic Hare",          "https://ac.blooket.com/marketassets/blooks/arctichare.svg"],
		"Seal":               ["Seal",                 "https://ac.blooket.com/marketassets/blooks/seal.svg"],
		"Walrus":             ["Walrus",               "https://ac.blooket.com/marketassets/blooks/walrus.svg"],
		"Witch":              ["Witch",                "https://ac.blooket.com/marketassets/blooks/witch.svg"],
		"Wizard":             ["Wizard",               "https://ac.blooket.com/marketassets/blooks/wizard.svg"],
		"Elf":                ["Elf",                  "https://ac.blooket.com/marketassets/blooks/elf.svg"],
		"Fairy":              ["Fairy",                "https://ac.blooket.com/marketassets/blooks/fairy.svg"],
		"Slime Monster":      ["Slime Monster",        "https://ac.blooket.com/marketassets/blooks/slimemonster.svg"],
		"Jester":             ["Jester",               "https://ac.blooket.com/marketassets/blooks/jester.svg"],
		"Dragon":             ["Dragon",               "https://ac.blooket.com/marketassets/blooks/dragon.svg"],
		"Queen":              ["Queen",                "https://ac.blooket.com/marketassets/blooks/queen.svg"],
		"Unicorn":            ["Unicorn",              "https://ac.blooket.com/marketassets/blooks/unicorn.svg"],
		"King":               ["King",                 "https://ac.blooket.com/marketassets/blooks/king.svg"],
		"Two of Spades":      ["Two of Spades",        "https://ac.blooket.com/marketassets/blooks/twoofspades.svg"],
		"Eat Me":             ["Eat Me",               "https://ac.blooket.com/marketassets/blooks/eat.svg"],
		"Drink Me":           ["Drink Me",             "https://ac.blooket.com/marketassets/blooks/drink.svg"],
		"Alice":              ["Alice",                "https://ac.blooket.com/marketassets/blooks/alice.svg"],
		"Queen of Hearts":    ["Queen of Hearts",      "https://ac.blooket.com/marketassets/blooks/queenofhearts.svg"],
		"Dormouse":           ["Dormouse",             "https://ac.blooket.com/marketassets/blooks/dormouse.svg"],
		"White Rabbit":       ["White Rabbit",         "https://ac.blooket.com/marketassets/blooks/whiterabbit.svg"],
		"Cheshire Cat":       ["Cheshire Cat",         "https://ac.blooket.com/marketassets/blooks/cheshirecat.svg"],
		"Caterpillar":        ["Caterpillar",          "https://ac.blooket.com/marketassets/blooks/caterpillar.svg"],
		"Mad Hatter":         ["Mad Hatter",           "https://ac.blooket.com/marketassets/blooks/madhatter.svg"],
		"King of Hearts":     ["King of Hearts",       "https://ac.blooket.com/marketassets/blooks/kingofhearts.svg"],
		"Toast":              ["Toast",                "https://ac.blooket.com/marketassets/blooks/toast.svg"],
		"Cereal":             ["Cereal",               "https://ac.blooket.com/marketassets/blooks/cereal.svg"],
		"Yogurt":             ["Yogurt",               "https://ac.blooket.com/marketassets/blooks/yogurt.svg"],
		"Breakfast Combo":    ["Breakfast Combo",      "https://ac.blooket.com/marketassets/blooks/breakfastcombo.svg"],
		"Orange Juice":       ["Orange Juice",         "https://ac.blooket.com/marketassets/blooks/orangejuice.svg"],
		"Milk":               ["Milk",                 "https://ac.blooket.com/marketassets/blooks/milk.svg"],
		"Waffle":             ["Waffle",               "https://ac.blooket.com/marketassets/blooks/waffle.svg"],
		"Pancakes":           ["Pancakes",             "https://ac.blooket.com/marketassets/blooks/pancakes.svg"],
		"French Toast":       ["French Toast",         "https://ac.blooket.com/marketassets/blooks/frenchtoast.svg"],
		"Pizza":              ["Pizza",                "https://ac.blooket.com/marketassets/blooks/pizza.svg"],
		"Earth":              ["Earth",                "https://ac.blooket.com/marketassets/blooks/earth.svg"],
		"Meteor":             ["Meteor",               "https://ac.blooket.com/marketassets/blooks/meteor.svg"],
		"Stars":              ["Stars",                "https://ac.blooket.com/marketassets/blooks/stars.svg"],
		"Alien":              ["Alien",                "https://ac.blooket.com/marketassets/blooks/alien.svg"],
		"Planet":             ["Planet",               "https://ac.blooket.com/marketassets/blooks/planet.svg"],
		"UFO":                ["UFO",                  "https://ac.blooket.com/marketassets/blooks/ufo.svg"],
		"Spaceship":          ["Spaceship",            "https://ac.blooket.com/marketassets/blooks/spaceship.svg"],
		"Astronaut":          ["Astronaut",            "https://ac.blooket.com/marketassets/blooks/astronaut.svg"],
		"Lil Bot":            ["Lil Bot",              "https://ac.blooket.com/marketassets/blooks/lilbot.svg"],
		"Lovely Bot":         ["Lovely Bot",           "https://ac.blooket.com/marketassets/blooks/lovelybot.svg"],
		"Angry Bot":          ["Angry Bot",            "https://ac.blooket.com/marketassets/blooks/angrybot.svg"],
		"Happy Bot":          ["Happy Bot",            "https://ac.blooket.com/marketassets/blooks/happybot.svg"],
		"Watson":             ["Watson",               "https://ac.blooket.com/marketassets/blooks/watson.svg"],
		"Buddy Bot":          ["Buddy Bot",            "https://ac.blooket.com/marketassets/blooks/buddybot.svg"],
		"Brainy Bot":         ["Brainy Bot",           "https://ac.blooket.com/marketassets/blooks/brainybot.svg"],
		"Mega Bot":           ["Mega Bot",             "https://ac.blooket.com/marketassets/blooks/megabot.svg"],
		"Old Boot":           ["Old Boot",             "https://ac.blooket.com/marketassets/blooks/oldboot.svg"],
		"Jellyfish":          ["Jellyfish",            "https://ac.blooket.com/marketassets/blooks/jellyfish.svg"],
		"Clownfish":          ["Clownfish",            "https://ac.blooket.com/marketassets/blooks/clownfish.svg"],
		"Frog":               ["Frog",                 "https://ac.blooket.com/marketassets/blooks/frog.svg"],
		"Crab":               ["Crab",                 "https://ac.blooket.com/marketassets/blooks/crab.svg"],
		"Pufferfish":         ["Pufferfish",           "https://ac.blooket.com/marketassets/blooks/pufferfish.svg"],
		"Blobfish":           ["Blobfish",             "https://ac.blooket.com/marketassets/blooks/blobfish.svg"],
		"Octopus":            ["Octopus",              "https://ac.blooket.com/marketassets/blooks/octopus.svg"],
		"Narwhal":            ["Narwhal",              "https://ac.blooket.com/marketassets/blooks/narwhal.svg"],
		"Dolphin":            ["Dolphin",              "https://ac.blooket.com/marketassets/blooks/dolphin.svg"],
		"Baby Shark":         ["Baby Shark",           "https://ac.blooket.com/marketassets/blooks/babyshark.svg"],
		"Megalodon":          ["Megalodon",            "https://ac.blooket.com/marketassets/blooks/megalodon.svg"],
		"Panda":              ["Panda",                "https://ac.blooket.com/marketassets/blooks/panda.svg"],
		"Sloth":              ["Sloth",                "https://ac.blooket.com/marketassets/blooks/sloth.svg"],
		"Tenrec":             ["Tenrec",               "https://ac.blooket.com/marketassets/blooks/tenrec.svg"],
		"Flamingo":           ["Flamingo",             "https://ac.blooket.com/marketassets/blooks/flamingo.svg"],
		"Zebra":              ["Zebra",                "https://ac.blooket.com/marketassets/blooks/zebra.svg"],
		"Elephant":           ["Elephant",             "https://ac.blooket.com/marketassets/blooks/elephant.svg"],
		"Lemur":              ["Lemur",                "https://ac.blooket.com/marketassets/blooks/lemur.svg"],
		"Peacock":            ["Peacock",              "https://ac.blooket.com/marketassets/blooks/peacock.svg"],
		"Chameleon":          ["Chameleon",            "https://ac.blooket.com/marketassets/blooks/chameleon.svg"],
		"Lion":               ["Lion",                 "https://ac.blooket.com/marketassets/blooks/lion.svg"],
		"Amber":              ["Amber",                "https://ac.blooket.com/marketassets/blooks/amber.svg"],
		"Dino Egg":           ["Dino Egg",             "https://ac.blooket.com/marketassets/blooks/dinoegg.svg"],
		"Dino Fossil":        ["Dino Fossil",          "https://ac.blooket.com/marketassets/blooks/dinofossil.svg"],
		"Stegosaurus":        ["Stegosaurus",          "https://ac.blooket.com/marketassets/blooks/stegosaurus.svg"],
		"Velociraptor":       ["Velociraptor",         "https://ac.blooket.com/marketassets/blooks/velociraptor.svg"],
		"Brontosaurus":       ["Brontosaurus",         "https://ac.blooket.com/marketassets/blooks/brontosaurus.svg"],
		"Triceratops":        ["Triceratops",          "https://ac.blooket.com/marketassets/blooks/triceratops.svg"],
		"Tyrannosaurus Rex":  ["Tyrannosaurus Rex",    "https://ac.blooket.com/marketassets/blooks/tyrannosaurusrex.svg"],
		"Ice Bat":            ["Ice Bat",              "https://ac.blooket.com/marketassets/blooks/icebat.svg"],
		"Ice Bug":            ["Ice Bug",              "https://ac.blooket.com/marketassets/blooks/icebug.svg"],
		"Ice Elemental":      ["Ice Elemental",        "https://ac.blooket.com/marketassets/blooks/iceelemental.svg"],
		"Rock Monster":       ["Rock Monster",         "https://ac.blooket.com/marketassets/blooks/rockmonster.svg"],
		"Dink":               ["Dink",                 "https://ac.blooket.com/marketassets/blooks/dink.svg"],
		"Donk":               ["Donk",                 "https://ac.blooket.com/marketassets/blooks/donk.svg"],
		"Bush Monster":       ["Bush Monster",         "https://ac.blooket.com/marketassets/blooks/bushmonster.svg"],
		"Yeti":               ["Yeti",                 "https://ac.blooket.com/marketassets/blooks/yeti.svg"],
		"Dingo":              ["Dingo",                "https://ac.blooket.com/marketassets/blooks/dingo.svg"],
		"Echidna":            ["Echidna",              "https://ac.blooket.com/marketassets/blooks/echidna.svg"],
		"Koala":              ["Koala",                "https://ac.blooket.com/marketassets/blooks/koala.svg"],
		"Kookaburra":         ["Kookaburra",           "https://ac.blooket.com/marketassets/blooks/kookaburra.svg"],
		"Platypus":           ["Platypus",             "https://ac.blooket.com/marketassets/blooks/platypus.svg"],
		"Joey":               ["Joey",                 "https://ac.blooket.com/marketassets/blooks/joey.svg"],
		"Kangaroo":           ["Kangaroo",             "https://ac.blooket.com/marketassets/blooks/kangaroo.svg"],
		"Crocodile":          ["Crocodile",            "https://ac.blooket.com/marketassets/blooks/crocodile.svg"],
		"Sugar Glider":       ["Sugar Glider",         "https://ac.blooket.com/marketassets/blooks/sugarglider.svg"],
		"Deckhand":           ["Deckhand",             "https://ac.blooket.com/marketassets/blooks/deckhand.svg"],
		"Buccaneer":          ["Buccaneer",            "https://ac.blooket.com/marketassets/blooks/buccaneer.svg"],
		"Swashbuckler":       ["Swashbuckler",         "https://ac.blooket.com/marketassets/blooks/swashbuckler.svg"],
		"Treasure Map":       ["Treasure Map",         "https://ac.blooket.com/marketassets/blooks/treasuremap.svg"],
		"Seagull":            ["Seagull",              "https://ac.blooket.com/marketassets/blooks/seagull.svg"],
		"Jolly Pirate":       ["Jolly Pirate",         "https://ac.blooket.com/marketassets/blooks/jollypirate.svg"],
		"Pirate Ship":        ["Pirate Ship",          "https://ac.blooket.com/marketassets/blooks/pirateship.svg"],
		"Kraken":             ["Kraken",               "https://ac.blooket.com/marketassets/blooks/kraken.svg"],
		"Captain Blackbeard": ["Captain Blackbeard",   "https://ac.blooket.com/marketassets/blooks/captainblackbeard.svg"],
		"Ant":                ["Ant",                  "https://ac.blooket.com/marketassets/blooks/ant.svg"],
		"Rhino Beetle":       ["Rhino Beetle",         "https://ac.blooket.com/marketassets/blooks/rhinobeetle.svg"],
		"Ladybug":            ["Ladybug",              "https://ac.blooket.com/marketassets/blooks/ladybug.svg"],
		"Fly":                ["Fly",                  "https://ac.blooket.com/marketassets/blooks/fly.svg"],
		"Worm":               ["Worm",                 "https://ac.blooket.com/marketassets/blooks/worm.svg"],
		"Bee":                ["Bee",                  "https://ac.blooket.com/marketassets/blooks/bee.svg"],
		"Mantis":             ["Mantis",               "https://ac.blooket.com/marketassets/blooks/mantis.svg"],
		"Butterfly":          ["Butterfly",            "https://ac.blooket.com/marketassets/blooks/butterfly.svg"],
		"Pumpkin":            ["Pumpkin",              "https://ac.blooket.com/marketassets/blooks/pumpkin.svg"],
		"Swamp Monster":      ["Swamp Monster",        "https://ac.blooket.com/marketassets/blooks/swampmonster.svg"],
		"Frankenstein":       ["Frankenstein",         "https://ac.blooket.com/marketassets/blooks/frankenstein.svg"],
		"Vampire":            ["Vampire",              "https://ac.blooket.com/marketassets/blooks/vampire.svg"],
		"Zombie":             ["Zombie",               "https://ac.blooket.com/marketassets/blooks/zombie.svg"],
		"Mummy":              ["Mummy",                "https://ac.blooket.com/marketassets/blooks/mummy.svg"],
		"Caramel Apple":      ["Caramel Apple",        "https://ac.blooket.com/marketassets/blooks/caramelapple2.svg"],
		"Candy Corn":         ["Candy Corn",           "https://ac.blooket.com/marketassets/blooks/candycorn.svg"],
		"Crow":               ["Crow",                 "https://ac.blooket.com/marketassets/blooks/crow.svg"],
		"Werewolf":           ["Werewolf",             "https://ac.blooket.com/marketassets/blooks/werewolf.svg"],
		"Ghost":              ["Ghost",                "https://ac.blooket.com/marketassets/blooks/ghost.svg"],
		"Black Bear":         ["Black Bear",           "https://ac.blooket.com/marketassets/blooks/blackbear.svg"],
		"Pumpkin Pie":        ["Pumpkin Pie",          "https://ac.blooket.com/marketassets/blooks/pumpkinpie.svg"],
		"Chipmunk":           ["Chipmunk",             "https://ac.blooket.com/marketassets/blooks/chipmunk.svg"],
		"Cornucopia":         ["Cornucopia",           "https://ac.blooket.com/marketassets/blooks/cornucopia.svg"],
		"Autumn Cat":         ["Autumn Cat",           "https://ac.blooket.com/marketassets/blooks/autumncat.svg"],
		"Pumpkin Puppy":      ["Pumpkin Puppy",        "https://ac.blooket.com/marketassets/blooks/pumpkinpuppy.svg"],
		"Autumn Crow":        ["Autumn Crow",          "https://ac.blooket.com/marketassets/blooks/autumncrow.svg"],
		"Turkey":             ["Turkey",               "https://ac.blooket.com/marketassets/blooks/turkey.svg"],
		"Snow Globe":         ["Snow Globe",           "https://ac.blooket.com/marketassets/blooks/snowglobe.svg"],
		"Holiday Gift":       ["Holiday Gift",         "https://ac.blooket.com/marketassets/blooks/holidaygift.svg"],
		"Hot Chocolate":      ["Hot Chocolate",        "https://ac.blooket.com/marketassets/blooks/hotchocolate.svg"],
		"Holiday Wreath":     ["Holiday Wreath",       "https://ac.blooket.com/marketassets/blooks/holidaywreath.svg"],
		"Stocking":           ["Stocking",             "https://ac.blooket.com/marketassets/blooks/stocking.svg"],
		"Gingerbread Man":    ["Gingerbread Man",      "https://ac.blooket.com/marketassets/blooks/gingerbreadman.svg"],
		"Gingerbread House":  ["Gingerbread House",    "https://ac.blooket.com/marketassets/blooks/gingerbreadhouse.svg"],
		"Reindeer":           ["Reindeer",             "https://ac.blooket.com/marketassets/blooks/reindeer.svg"],
		"Snowman":            ["Snowman",              "https://ac.blooket.com/marketassets/blooks/snowman.svg"],
		"Santa Claus":        ["Santa Claus",          "https://ac.blooket.com/marketassets/blooks/santaclaus.svg"],
		"Rainbow Jellyfish":  ["Rainbow Jellyfish",    "https://ac.blooket.com/marketassets/blooks/rainbowjellyfish.svg"],
		"Blizzard Clownfish": ["Blizzard Clownfish",   "https://ac.blooket.com/marketassets/blooks/blizzardclownfish.svg"],
		"Lovely Frog":        ["Lovely Frog",          "https://ac.blooket.com/marketassets/blooks/lovelyfrog.svg"],
		"Lucky Frog":         ["Lucky Frog",           "https://ac.blooket.com/marketassets/blooks/luckyfrog.svg"],
		"Spring Frog":        ["Spring Frog",          "https://ac.blooket.com/marketassets/blooks/springfrog.svg"],
		"Poison Dart Frog":   ["Poison Dart Frog",     "https://ac.blooket.com/marketassets/blooks/poisondartfrog.svg"],
		"Lucky Hamster":      ["Lucky Hamster",        "https://ac.blooket.com/marketassets/blooks/luckyhamster.svg"],
		"Lucky Bee":          ["Lucky Bee",            "https://ac.blooket.com/marketassets/blooks/luckybee.svg"],
		"Chocolate Rabbit":   ["Chocolate Rabbit",     "https://ac.blooket.com/marketassets/blooks/chocolaterabbit.svg"],
		"Spring Rabbit":      ["Spring Rabbit",        "https://ac.blooket.com/marketassets/blooks/springrabbit.svg"],
		"Spring Deer":        ["Spring Deer",          "https://ac.blooket.com/marketassets/blooks/springdeer.svg"],
		"Lemon Crab":         ["Lemon Crab",           "https://ac.blooket.com/marketassets/blooks/lemoncrab.svg"],
		"Pirate Pufferfish":  ["Pirate Pufferfish",    "https://ac.blooket.com/marketassets/blooks/piratepufferfish.svg"],
		"Donut Blobfish":     ["Donut Blobfish",       "https://ac.blooket.com/marketassets/blooks/donutblobfish.svg"],
		"Crimson Octopus":    ["Crimson Octopus",      "https://ac.blooket.com/marketassets/blooks/crimsonoctopus.svg"],
		"Rainbow Narwhal":    ["Rainbow Narwhal",      "https://ac.blooket.com/marketassets/blooks/rainbownarwhal.svg"],
		"Frost Wreath":       ["Frost Wreath",         "https://ac.blooket.com/marketassets/blooks/frostwreath.svg"],
		"Tropical Globe":     ["Tropical Globe",       "https://ac.blooket.com/marketassets/blooks/tropicalglobe.svg"],
		"New York Snow Globe":  ["New York Snow Globe",  "https://ac.blooket.com/marketassets/blooks/newyorksnowglobe.svg"],
		"London Snow Globe":    ["London Snow Globe",    "https://ac.blooket.com/marketassets/blooks/londonsnowglobe.svg"],
		"Japan Snow Globe":     ["Japan Snow Globe",     "https://ac.blooket.com/marketassets/blooks/japansnowglobe.svg"],
		"Egypt Snow Globe":     ["Egypt Snow Globe",     "https://ac.blooket.com/marketassets/blooks/egyptsnowglobe.svg"],
		"Paris Snow Globe":     ["Paris Snow Globe",     "https://ac.blooket.com/marketassets/blooks/parissnowglobe.svg"],
		"Red Sweater Snowman":  ["Red Sweater Snowman",  "https://ac.blooket.com/marketassets/blooks/redsweatersnowman.svg"],
		"Blue Sweater Snowman": ["Blue Sweater Snowman", "https://ac.blooket.com/marketassets/blooks/bluesweatersnowman.svg"],
		"Elf Sweater Snowman":  ["Elf Sweater Snowman",  "https://ac.blooket.com/marketassets/blooks/elfsweatersnowman.svg"],
		"Holiday Elf":          ["Holiday Elf",          "https://ac.blooket.com/marketassets/blooks/holidayelf.svg"],
		"Cozy Baby Penguin":    ["Cozy Baby Penguin",    "https://ac.blooket.com/marketassets/blooks/cozybabypenguin.svg"],
		"Santa Claws":          ["Santa Claws",          "https://ac.blooket.com/marketassets/blooks/santaclaws.svg"],
		"Cookies Combo":        ["Cookies Combo",        "https://ac.blooket.com/marketassets/blooks/cookiescombo.svg"],
		"Chilly Flamingo":      ["Chilly Flamingo",      "https://ac.blooket.com/marketassets/blooks/chillyflamingo.svg"],
		"Snowy Bush Monster":   ["Snowy Bush Monster",   "https://ac.blooket.com/marketassets/blooks/snowybushmonster.svg"],
		"Nutcracker Koala":     ["Nutcracker Koala",     "https://ac.blooket.com/marketassets/blooks/nutcrackerkoala.svg"],
		"Sandwich":             ["Sandwich",             "https://ac.blooket.com/marketassets/blooks/sandwich.svg"],
		"Ice Slime":            ["Ice Slime",            "https://ac.blooket.com/marketassets/blooks/iceslime.svg"],
		"Frozen Fossil":       ["Frozen Fossil",        "https://ac.blooket.com/marketassets/blooks/frozenfossil.svg"],
		"Ice Crab":            ["Ice Crab",             "https://ac.blooket.com/marketassets/blooks/icecrab.svg"],
		"Rainbow Panda":       ["Rainbow Panda",        "https://ac.blooket.com/marketassets/blooks/rainbowpanda.svg"],
		"White Peacock":       ["White Peacock",        "https://ac.blooket.com/marketassets/blooks/whitepeacock.svg"],
		"Tiger Zebra":         ["Tiger Zebra",          "https://ac.blooket.com/marketassets/blooks/tigerzebra.svg"],
		"Teal Platypus":       ["Teal Platypus",        "https://ac.blooket.com/marketassets/blooks/tealplatypus.svg"],
		"Golden Pumpkin Pie":  ["Golden Pumpkin Pie",   "https://ac.blooket.com/marketassets/blooks/goldenpumpkinpie.svg"],
		"Blue Butterfly":      ["Blue Butterfly",       "https://ac.blooket.com/marketassets/blooks/bluebutterfly.svg"],
		"Red Astronaut":       ["Red Astronaut",        "https://ac.blooket.com/marketassets/blooks/redastronaut.svg"],
		"Orange Astronaut":    ["Orange Astronaut",     "https://ac.blooket.com/marketassets/blooks/orangeastronaut.svg"],
		"Yellow Astronaut":    ["Yellow Astronaut",     "https://ac.blooket.com/marketassets/blooks/yellowastronaut.svg"],
		"Lime Astronaut":      ["Lime Astronaut",       "https://ac.blooket.com/marketassets/blooks/limeastronaut.svg"],
		"Green Astronaut":     ["Green Astronaut",      "https://ac.blooket.com/marketassets/blooks/greenastronaut.svg"],
		"Cyan Astronaut":      ["Cyan Astronaut",       "https://ac.blooket.com/marketassets/blooks/cyanastronaut.svg"],
		"Blue Astronaut":      ["Blue Astronaut",       "https://ac.blooket.com/marketassets/blooks/blueastronaut.svg"],
		"Pink Astronaut":      ["Pink Astronaut",       "https://ac.blooket.com/marketassets/blooks/pinkastronaut.svg"],
		"Purple Astronaut":    ["Purple Astronaut",     "https://ac.blooket.com/marketassets/blooks/purpleastronaut.svg"],
		"Brown Astronaut":     ["Brown Astronaut",      "https://ac.blooket.com/marketassets/blooks/brownastronaut.svg"],
		"Black Astronaut":     ["Black Astronaut",      "https://ac.blooket.com/marketassets/blooks/blackastronaut.svg"],
		"Lovely Planet":       ["Lovely Planet",        "https://ac.blooket.com/marketassets/blooks/lovelyplanet.svg"],
		"Lovely Peacock":      ["Lovely Peacock",       "https://ac.blooket.com/marketassets/blooks/lovelypeacock.svg"],
		"Lovely Fox":          ["Lovely Fox",           "https://ac.blooket.com/marketassets/blooks/lovelyfox.svg"],
		"Lovely Rabbit":       ["Lovely Rabbit",        "https://ac.blooket.com/marketassets/blooks/lovelyrabbit.svg"],
		"Haunted Pumpkin":     ["Haunted Pumpkin",      "https://ac.blooket.com/marketassets/blooks/hauntedpumpkin.svg"],
		"Pumpkin Cookie":      ["Pumpkin Cookie",       "https://ac.blooket.com/marketassets/blooks/pumpkincookie.svg"],
		"Ghost Cookie":        ["Ghost Cookie",         "https://ac.blooket.com/marketassets/blooks/ghostcookie.svg"],
		"Red Gummy Bear":      ["Red Gummy Bear",       "https://ac.blooket.com/marketassets/blooks/redgummybear.svg"],
		"Blue Gummy Bear":     ["Blue Gummy Bear",      "https://ac.blooket.com/marketassets/blooks/bluegummybear.svg"],
		"Green Gummy Bear":    ["Green Gummy Bear",     "https://ac.blooket.com/marketassets/blooks/greengummybear.svg"],
		"Chick Chicken":       ["Chick Chicken",        "https://ac.blooket.com/marketassets/blooks/chickchicken.svg"],
		"Chicken Chick":       ["Chicken Chick",        "https://ac.blooket.com/marketassets/blooks/chickenchick.svg"],
		"Raccoon Bandit":      ["Raccoon Bandit",       "https://ac.blooket.com/marketassets/blooks/raccoonbandit.svg"],
		"Owl Sheriff":         ["Owl Sheriff",          "https://ac.blooket.com/marketassets/blooks/owlsheriff.svg"],
		"Vampire Frog":        ["Vampire Frog",         "https://ac.blooket.com/marketassets/blooks/vampirefrog.svg"],
		"Pumpkin King":        ["Pumpkin King",         "https://ac.blooket.com/marketassets/blooks/pumpkinking.svg"],
		"Leprechaun":          ["Leprechaun",           "https://ac.blooket.com/marketassets/blooks/leprechaun.svg"],
		"Anaconda Wizard":     ["Anaconda Wizard",      "https://ac.blooket.com/marketassets/blooks/anacondawizard.svg"],
		"Spooky Pumpkin":      ["Spooky Pumpkin",       "https://ac.blooket.com/marketassets/blooks/spookypumpkin.svg"],
		"Spooky Mummy":        ["Spooky Mummy",         "https://ac.blooket.com/marketassets/blooks/spookymummy.svg"],
		"Agent Owl":           ["Agent Owl",            "https://ac.blooket.com/marketassets/blooks/agentowl.svg"],
		"Master Elf":          ["Master Elf",           "https://ac.blooket.com/marketassets/blooks/masterelf.svg"],
		"Party Pig":           ["Party Pig",            "https://ac.blooket.com/marketassets/blooks/partypig.svg"],
		"Wise Owl":            ["Wise Owl",             "https://ac.blooket.com/marketassets/blooks/wiseowl.svg"],
		"Wise Caterpillar":    ["Wise Caterpillar",     "https://ac.blooket.com/marketassets/blooks/wisecaterpillar.svg"],
		"Spooky Ghost":        ["Spooky Ghost",         "https://ac.blooket.com/marketassets/blooks/spookyghost.svg"],
		"Phantom King":        ["Phantom King",         "https://ac.blooket.com/marketassets/blooks/phantomking.svg"],
		"Tim the Alien":       ["Tim the Alien",        "https://ac.blooket.com/marketassets/blooks/timthealien.svg"],
		"Rainbow Astronaut":   ["Rainbow Astronaut",    "https://ac.blooket.com/marketassets/blooks/rainbowastronaut.svg"],
		"Hamsta Claus":        ["Hamsta Claus",         "https://ac.blooket.com/marketassets/blooks/hamstaclaus.svg"],
		"Light Blue":          ["Light Blue",           "https://ac.blooket.com/marketassets/blooks/lightblue.svg"],
		"Black":               ["Black",                "https://ac.blooket.com/marketassets/blooks/black.svg"],
		"Red":                 ["Red",                  "https://ac.blooket.com/marketassets/blooks/red.svg"],
		"Purple":              ["Purple",               "https://ac.blooket.com/marketassets/blooks/purple.svg"],
		"Pink":                ["Pink",                 "https://ac.blooket.com/marketassets/blooks/pink.svg"],
		"Orange":              ["Orange",               "https://ac.blooket.com/marketassets/blooks/orange.svg"],
		"Lime":                ["Lime",                 "https://ac.blooket.com/marketassets/blooks/lime.svg"],
		"Green":               ["Green",                "https://ac.blooket.com/marketassets/blooks/green.svg"],
		"Teal":                ["Teal",                 "https://ac.blooket.com/marketassets/blooks/teal.svg"],
		"Tan":                 ["Tan",                  "https://ac.blooket.com/marketassets/blooks/tan.svg"],
		"Maroon":              ["Maroon",               "https://ac.blooket.com/marketassets/blooks/maroon.svg"],
		"Gray":                ["Gray",                 "https://ac.blooket.com/marketassets/blooks/gray.svg"],
		"Mint":                ["Mint",                 "https://ac.blooket.com/marketassets/blooks/mint.svg"],
		"Salmon":              ["Salmon",               "https://ac.blooket.com/marketassets/blooks/salmon.svg"],
		"Burgandy":            ["Burgandy",             "https://ac.blooket.com/marketassets/blooks/burgandy.svg"],
		"Baby Blue":           ["Baby Blue",            "https://ac.blooket.com/marketassets/blooks/babyblue.svg"],
		"Dust":                ["Dust",                 "https://ac.blooket.com/marketassets/blooks/dust.svg"],
		"Brown":               ["Brown",                "https://ac.blooket.com/marketassets/blooks/brown.svg"],
		"Dull Blue":           ["Dull Blue",            "https://ac.blooket.com/marketassets/blooks/dull.svg"],
		"Yellow":              ["Yellow",               "https://ac.blooket.com/marketassets/blooks/yellow.svg"],
		"Blue":                ["Blue",                 "https://ac.blooket.com/marketassets/blooks/blue.svg"]
	},
	banners: {
		"":                  "Default Banner",
		"alphabetSoup":     ["Alphabet Soup",      "https://media.blooket.com/image/upload/v1674539714/Banners/alphabetSoup.svg"],
		"artClass":         ["Art Class",          "https://media.blooket.com/image/upload/v1674539714/Banners/artClass.svg"],
		"baguette":         ["Baguette",           "https://media.blooket.com/image/upload/v1674539714/Banners/baguette.svg"],
		"bakery":           ["Bakery",             "https://media.blooket.com/image/upload/v1674539714/Banners/bakery.svg"],
		"ballPit":          ["Ball Pit",           "https://media.blooket.com/image/upload/v1674539714/Banners/ballPit.svg"],
		"balloons":         ["Balloons",           "https://media.blooket.com/image/upload/v1674539714/Banners/balloons.svg"],
		"baseball":         ["Baseball",           "https://media.blooket.com/image/upload/v1674539714/Banners/baseball.svg"],
		"basketballCourt":  ["Basketball Court",   "https://media.blooket.com/image/upload/v1674539714/Banners/basketballCourt.svg"],
		"bookshelf":        ["Bookshelf",          "https://media.blooket.com/image/upload/v1674539714/Banners/bookshelf.svg"],
		"carrot":           ["Carrot",             "https://media.blooket.com/image/upload/v1674539714/Banners/carrot.svg"],
		"chalkboard":       ["Chalkboard",         "https://media.blooket.com/image/upload/v1674539714/Banners/chalkboard.svg"],
		"chiliPepper":      ["Chili Pepper",       "https://media.blooket.com/image/upload/v1674539714/Banners/chiliPepper.svg"],
		"chocolate":        ["Chocolate",          "https://media.blooket.com/image/upload/v1674539714/Banners/chocolate.svg"],
		"christmasTree":    ["Christmas Tree",     "https://media.blooket.com/image/upload/v1674539714/Banners/christmasTree.svg"],
		"clockwork":        ["Clockwork",          "https://media.blooket.com/image/upload/v1674539714/Banners/clockwork.svg"],
		"coffin":           ["Coffin",             "https://media.blooket.com/image/upload/v1674539714/Banners/coffin.svg"],
		"comic":            ["Comic",              "https://media.blooket.com/image/upload/v1674539714/Banners/comic.svg"],
		"cookout":          ["Cookout",            "https://media.blooket.com/image/upload/v1674539714/Banners/cookout.svg"],
		"cornDog":          ["Corn Dog",           "https://media.blooket.com/image/upload/v1674539714/Banners/cornDog.svg"],
		"crayon":           ["Crayon",             "https://media.blooket.com/image/upload/v1674539714/Banners/crayon.svg"],
		"easterField":      ["Easter Field",       "https://media.blooket.com/image/upload/v1674539714/Banners/easterField.svg"],
		"easterField":      ["Easter Field",       "https://media.blooket.com/image/upload/v1674539714/Banners/easterField.svg"],
		"easterPattern":    ["Easter Pattern",     "https://media.blooket.com/image/upload/v1674539714/Banners/easterPattern.svg"],
		"endRainbow":       ["End Of The Rainbow", "https://media.blooket.com/image/upload/v1674539714/Banners/endRainbow.svg"],
		"fallPicnic":       ["Fall Picnic",        "https://media.blooket.com/image/upload/v1674539714/Banners/fallPicnic.svg"],
		"fallingBlocks":    ["Falling Blocks",     "https://media.blooket.com/image/upload/v1674539714/Banners/fallingBlocks.svg"],
		"farm":             ["Farm",               "https://media.blooket.com/image/upload/v1674539714/Banners/farm.svg"],
		"fire":             ["Fire",               "https://media.blooket.com/image/upload/v1674539714/Banners/fire.svg"],
		"fishTank":         ["Fish Tank",          "https://media.blooket.com/image/upload/v1674539714/Banners/fishTank.svg"],
		"flyingKite":       ["Flying Kite",        "https://media.blooket.com/image/upload/v1674539714/Banners/flyingKite.svg"],
		"footballField":    ["Football Field",     "https://media.blooket.com/image/upload/v1674539714/Banners/footballField.svg"],
		"frankenstein":     ["Frankenstein",       "https://media.blooket.com/image/upload/v1674539714/Banners/frankenstein.svg"],
		"garden":           ["Garden",             "https://media.blooket.com/image/upload/v1674539714/Banners/garden.svg"],
		"ghosts":           ["Ghosts",             "https://media.blooket.com/image/upload/v1674539714/Banners/ghosts.svg"],
		"gifts":            ["Gifts",              "https://media.blooket.com/image/upload/v1674539714/Banners/gifts.svg"],
		"gummyWorm":        ["Gummy Worm",         "https://media.blooket.com/image/upload/v1674539714/Banners/gummyWorm.svg"],
		"harvest":          ["Harvest",            "https://media.blooket.com/image/upload/v1674539714/Banners/harvest.svg"],
		"hockeyRink":       ["Hockey Rink",        "https://media.blooket.com/image/upload/v1674539714/Banners/hockeyRink.svg"],
		"holidayGiftWrap":  ["Holiday Gift Wrap",  "https://media.blooket.com/image/upload/v1674539714/Banners/holidayGiftWrap.svg"],
		"holidayLights":    ["Holiday Lights",     "https://media.blooket.com/image/upload/v1674539714/Banners/holidayLights.svg"],
		"holidayOrnaments": ["Holiday Ornaments",  "https://media.blooket.com/image/upload/v1674539714/Banners/holidayOrnaments.svg"],
		"hotDog":           ["Hot Dog",            "https://media.blooket.com/image/upload/v1674539714/Banners/hotDog.svg"],
		"ice":              ["Ice",                "https://media.blooket.com/image/upload/v1674539714/Banners/ice.svg"],
		"iceCreamSandwich": ["Ice Cream Sandwich", "https://media.blooket.com/image/upload/v1674539714/Banners/iceCreamSandwich.svg"],
		"iceCreamTruck":    ["Ice Cream Truck",    "https://media.blooket.com/image/upload/v1674539714/Banners/iceCreamTruck.svg"],
		"japaneseGarden":   ["Japanese Garden",    "https://media.blooket.com/image/upload/v1674539714/Banners/japaneseGarden.svg"],
		"leaf":             ["Leaf",               "https://media.blooket.com/image/upload/v1674539714/Banners/leaf.svg"],
		"leaf":             ["Leaf",               "https://media.blooket.com/image/upload/v1674539714/Banners/leaf.svg"],
		"leaves":           ["Leaves",             "https://media.blooket.com/image/upload/v1674539714/Banners/leaves.svg"],
		"lightning":        ["Lightning",          "https://media.blooket.com/image/upload/v1674539714/Banners/lightning.svg"],
		"loveLetter":       ["Love Letter",        "https://media.blooket.com/image/upload/v1674539714/Banners/loveLetter.svg"],
		"marker":           ["Marker",             "https://media.blooket.com/image/upload/v1674539714/Banners/marker.svg"],
		"mummy":            ["Mummy",              "https://media.blooket.com/image/upload/v1674539714/Banners/mummy.svg"],
		"musicClass":       ["Music Class",        "https://media.blooket.com/image/upload/v1674539714/Banners/musicClass.svg"],
		"orangeIcePop":     ["Orange Ice Pop",     "https://media.blooket.com/image/upload/v1674539714/Banners/orangeIcePop.svg"],
		"outerSpace":       ["Outer Space",        "https://media.blooket.com/image/upload/v1674539714/Banners/outerSpace.svg"],
		"pencil":           ["Pencil",             "https://media.blooket.com/image/upload/v1674539714/Banners/pencil.svg"],
		"pirateMap":        ["Pirate Map",         "https://media.blooket.com/image/upload/v1674539714/Banners/pirateMap.svg"],
		"pizza":            ["Pizza",              "https://media.blooket.com/image/upload/v1674539714/Banners/pizza.svg"],
		"pumpkins":         ["Pumpkins",           "https://media.blooket.com/image/upload/v1674539714/Banners/pumpkins.svg"],
		"racetrack":        ["Racetrack",          "https://media.blooket.com/image/upload/v1674539714/Banners/raceway.svg"],
		"roadSign":         ["Road Sign",          "https://media.blooket.com/image/upload/v1674539714/Banners/roadSign.svg"],
		"rollerblades":     ["Rollerblades",       "https://media.blooket.com/image/upload/v1674539714/Banners/rollerblades.svg"],
		"ruler":            ["Ruler",              "https://media.blooket.com/image/upload/v1674539714/Banners/ruler.svg"],
		"sandwich":         ["Sandwich",           "https://media.blooket.com/image/upload/v1674539714/Banners/sandwich.svg"],
		"scienceClass":     ["Science Class",      "https://media.blooket.com/image/upload/v1674539714/Banners/scienceClass.svg"],
		"shamrockCoins":    ["Shamrock Coins",     "https://media.blooket.com/image/upload/v1674539714/Banners/shamrockCoins.svg"],
		"shamrocks":        ["Shamrocks",          "https://media.blooket.com/image/upload/v1674539714/Banners/shamrocks.svg"],
		"skateboard":       ["Skateboard",         "https://media.blooket.com/image/upload/v1674539714/Banners/skateboard.svg"],
		"slime":            ["Slime",              "https://media.blooket.com/image/upload/v1674539714/Banners/slime.svg"],
		"soccerField":      ["Soccer Field",       "https://media.blooket.com/image/upload/v1674539714/Banners/soccerField.svg"],
		"spiders":          ["Spiders",            "https://media.blooket.com/image/upload/v1674539714/Banners/spiders.svg"],
		"spooky":           ["Spooky",             "https://media.blooket.com/image/upload/v1674539714/Banners/spooky.svg"],
		"spookyCat":        ["Spooky Cat",         "https://media.blooket.com/image/upload/v1674539714/Banners/spookyCat.svg"],
		"spookyWindow":     ["Spooky Window",      "https://media.blooket.com/image/upload/v1674539714/Banners/spookyWindow.svg"],
		"starter":          ["Starter",            "https://media.blooket.com/image/upload/v1674539714/Banners/starter.svg"],
		"sunset":           ["Sunset",             "https://media.blooket.com/image/upload/v1674539714/Banners/sunset.svg"],
		"surfboard":        ["Surfboard",          "https://media.blooket.com/image/upload/v1674539714/Banners/surfboard.svg"],
		"sushi":            ["Sushi",              "https://media.blooket.com/image/upload/v1674539714/Banners/sushi.svg"],
		"techChip":         ["Tech Chip",          "https://media.blooket.com/image/upload/v1674539714/Banners/techChip.svg"],
		"theater":          ["Theater",            "https://media.blooket.com/image/upload/v1674539714/Banners/theater.svg"],
		"tiger":            ["Tiger",              "https://media.blooket.com/image/upload/v1674539714/Banners/tiger.svg"],
		"toasterPastry":    ["Toaster Pastry",     "https://media.blooket.com/image/upload/v1674539714/Banners/toasterPastry.svg"],
		"watermelon":       ["Watermelon",         "https://media.blooket.com/image/upload/v1674539714/Banners/watermelon.svg"],
		"winterDrive":      ["Winter Drive",       "https://media.blooket.com/image/upload/v1674539714/Banners/winterDrive.svg"],
		"winterLandscape":  ["Winter Landscape",   "https://media.blooket.com/image/upload/v1674539714/Banners/winterLandscape.svg"],
		"winterSweater":    ["Winter Sweater",     "https://media.blooket.com/image/upload/v1674539714/Banners/winterSweater.svg"],
		"winterTrain":      ["Winter Train",       "https://media.blooket.com/image/upload/v1674539714/Banners/winterTrain.svg"],
		"workbench":        ["Workbench",          "https://media.blooket.com/image/upload/v1674539714/Banners/workbench.svg"],
		"xylophone":        ["Xylophone",          "https://media.blooket.com/image/upload/v1674539714/Banners/xylophone.svg"]
	}
}

//! TODO: Bot flood amount input cuts off 10 into 1, parseInt then clamp else clamp string
const CHEATS = {
	example: [
		{
			type: "button",
			text: "Example Action",
			state: 0,
			run: function() {
				console.log('Clicked button:', this.type, this.text, this.state);
				this.state = this.state === 0 ? 1 : 0; // JUST AN EXAMPLE, USE A TOGGLE FOR TS
			}
		}, {
			type: "toggle",
			text: "Example Toggle",
			state: 0,
			run: function() {
				console.log('Example Toggle', this.state);
			}
		}, {
			type: "input",
			wide: true,
			text: "Wide Input",
			run: function() {
				console.log('Wide input', this.value);
			}
		}, {
			type: "toggleinput",
			text: "Example Input Toggle",
			state: 0,
			run: function() {
				console.log('Example Toggle Input', this.state, this.value);
			}
		}, {
			type: "select",
			options: {
				'starter': 'Default',
				'fire': 'Fire',
				'outerSpace': ['Outer Space', 'https://media.blooket.com/image/upload/v1674539714/Banners/outerSpace.svg'],
				'ice': ['Ice', 'https://media.blooket.com/image/upload/v1674539714/Banners/ice.svg']
			},
			run: function() {
				console.log('Select', this.value);
			}
		}, {
			type: "slider",
			wide: true,
			text: "Example Slider",
			min: 20,
			max: 60,
			value: 50,
			run: function() {
				console.log('Wide slider', this.value);
				gui.style.setProperty('--gui-width', `${this.value}vw`);
			}
		}
	],
	global: [
		{
			type: "slider",
			// wide: true,
			text: "GUI Size",
			min: 30,
			max: 60,
			value: 50,
			run: function() {
				gui.style.setProperty('--gui-width', `${this.value}vw`);
			}
		}, {
			type: "select",
			options: COSMETIC_OPTIONS.banners,
			run: function() {
				const react = Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner;
				react.stateNode.props.liveGameController.setVal({
					path: "c/" + react.stateNode.props.client.name + "/bg",
					val: this.value
				})
			}
		}, {
			type: "toggle",
			text: "Auto Answer",
			state: 0,
			loop: null,
			run: function() {
				if (this.state === 0) {
					clearInterval(this.loop);
					this.loop = null;
				} else {
					this.loop = setInterval(() => {
						const react = Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode;
						const { question: questionState, stage, feedback } = react.state;
						const { question: questionProps } = react.props.client;
						const question = questionState || questionProps;
						if (question.qType === "typing") {
							Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(question.answers[0]);
						} else {
							let correct = null;
							if ((stage === "feedback") || feedback) {
								correct = document.querySelector('[class*="feedback"]')?.firstChild;
							} else {
								correct = document.querySelectorAll('[class*="answerContainer"]')[question.answers.findIndex(answer => question.correctAnswers.includes(answer))];
							}
							correct?.click?.();
						}
					}, 50);
				}
			}
		}, {
			type: "toggle",
			text: "Highlight Answers",
			state: 0,
			loop: null,
			run: function() {
				if (this.state === 0) {
					clearInterval(this.loop);
					this.loop = null;
				} else {
					this.loop = setInterval(() => {
						let findReact = document.querySelector("body>div");
						while (!Object.values(findReact)[1]?.children?.[0]?._owner?.stateNode) {
							findReact = findReact.querySelector(":scope>div");
							if (!findReact) break;
						}

						let { state, props } = Object.values(findReact)[1].children[0]._owner.stateNode;
						const question = state.question || props.client.question;

						document.querySelectorAll('[class*="answerContainer"]').forEach((answer, index) => {
							answer.style.backgroundColor = question.correctAnswers.includes(question.answers[index]) ? "#0c7" : "#b12";
						});
					}, 50);
				}
			}
		}, {
			type: "toggle",
			text: "Freeze Leaderboard",
			state: 0,
			loop: null,
			run: function() {
				let findReact = document.querySelector("#app");
				while (!Object.values(findReact)[1]?.children?.[0]?._owner?.stateNode) {
					findReact = findReact.querySelector(":scope>div");
					if (!findReact) break;
				}
				let react = Object.values(findReact)[1].children[0]._owner.stateNode;
				
				if (this.state === 0) {
					clearInterval(this.loop);
					this.loop = null;
					react.props.liveGameController.removeVal(`c/${react.props.client.name}/tat`);
				} else {
					this.loop = setInterval(() => {
						react.props.liveGameController.setVal({
							path: `c/${react.props.client.name}/tat/Freeze`,
							val: "freeze"
						});
					}, 25);
				}
			}
		}, {
			type: "button",
			text: "Force Custom Name",
			state: 0,
			run: function() {
				Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({
					isRandom: false,
					client: { name: "" }
				});
				document.querySelector('[class*="nameInput"]')?.focus?.();
			}
		}
	],
	bot_flooder: [
		{
			type: "justinput",
			text: "Name",
			run: function() {
				this.value = this.value.replace(/[^A-Za-z0-9_\-\s]/g, '').slice(0, 11);
				this.input.value = this.value;
			}
		}, {
			type: "toggle",
			text: "Random Names",
			state: 0,
			run: function() {}
		}, {
			type: "blookselect",
			options: COSMETIC_OPTIONS.blooks,
			run: function() {}
		}, {
			type: "select",
			options: COSMETIC_OPTIONS.banners,
			run: function() {}
		}, {
			type: "justinput",
			text: "Amount",
			run: function() {
				this.value = this.value.replace(/[^0-9]/g, '').slice(0, 1);
				this.input.value = this.value;
			}
		}, {
			type: "button",
			text: "Send",
			run: async function() {
				const blook = CHEATS.bot_flooder[2].value;
				const banner = CHEATS.bot_flooder[3].value;
				const amount = parseInt(CHEATS.bot_flooder[4].value) || 1;

				const react = Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode;
				if (!react.props.liveGameController._liveApp) {
					fixAP();
					alert("Can't find current game");
					return;
				}

				for (var n = 0; n < amount; n++) {
					const name = CHEATS.bot_flooder[1].state ? randomString(15) : ((CHEATS.bot_flooder[0].value || 'bot') + randomNumbers(4));
					console.log('trying', name, blook, banner, amount);
					await sendBot(react.props.liveGameController._liveApp.firebase, react.props.client.hostId, name, blook, banner);
				}
			}
		}, {
			type: "button",
			text: "Warning: Bans possible if you spam",
			wide: true,
			run: function() {}
		}
	],
	gold_quest: [
		{
			type: "toggle",
			text: "Auto Open",
			state: 0,
			loop: null,
			run: function() {
				if (this.state === 0) {
					clearInterval(this.loop);
					this.loop = null;
				} else {
					this.loop = setInterval(() => {
						let findReact = document.querySelector("body>div");
						while (!Object.values(findReact)[1]?.children?.[0]?._owner?.stateNode) {
							findReact = findReact.querySelector(":scope>div");
							if (!findReact) break;
						}
						const react = Object.values(findReact)[1].children[0]._owner.stateNode;
						if (react.state.stage == 'prize') {
							react.props.liveGameController.getDatabaseVal('c', players => {
								if (players == null) return;
								const playerList = Object.entries(players);
								let richest = 0, currentBest = 0, chestIndex = -1;
								for (let i = 0; i < playerList.length; i++) {
									if (playerList[i][0] != react.props.client.name && playerList[i][1] > richest) {
										richest = playerList[i][1];
									}
								}
								for (let i = 0; i < react.state.choices.length; i++) {
									const choice = react.state.choices[i];
									let value = react.state.gold;
									if (choice.type == "gold") {
										value = react.state.gold + (choice.val || 0);
									} else if (choice.type == "multiply" || choice.type == "divide") {
										value = Math.round(react.state.gold * choice.val) || react.state.gold;
									} else if (choice.type == "swap") {
										value = richest || react.state.gold;
									} else if (choice.type == "take") {
										value = react.state.gold + (richest * choice.val || 0);
									}
									if ((value || 0) <= currentBest)
										continue;
									currentBest = value;
									chestIndex = i + 1;
								}
								document.querySelector("div[class*='choice" + chestIndex + "']")?.click();
							})
						}
					}, 50);
				}
			}
		}, {
			type: "toggle",
			text: "Chest ESP",
			state: 0,
			loop: null,
			run: function() {
				if (this.state === 0) {
					clearInterval(this.loop);
					this.loop = null;
				} else {
					this.loop = setInterval(() => {
						let findReact = document.querySelector("body>div");
						while (!Object.values(findReact)[1]?.children?.[0]?._owner?.stateNode) {
							findReact = findReact.querySelector(":scope>div");
							if (!findReact) break;
						}
						let react = Object.values(findReact)[1].children[0]._owner.stateNode;
						react.state.choices.forEach(({ text }, index) => {
							let chest = document.querySelector(`div[class*='choice${index + 1}']`);
							if (!chest || chest.querySelector('div'))
								return;
							let choice = document.createElement('div')
							choice.style.color = "white";
							choice.style.fontFamily = "Eczar";
							choice.style.fontSize = "2em";
							choice.style.display = "flex";
							choice.style.justifyContent = "center";
							choice.style.transform = "translateY(200px)";
							choice.innerText = text;
							chest.append(choice)
						});
					}, 50);
				}
			}
		}, {
			type: "toggle",
			text: "Always Quintuple",
			state: 0,
			loop: null,
			run: function() {
				if (this.state === 0) {
					clearInterval(this.loop);
					this.loop = null;
				} else {
					this.loop = setInterval(() => {
						
					}, 50);
				}
			}
		}, {
			type: "toggle",
			text: "No Lose 25%/50%",
			state: 0,
			loop: null,
			run: function() {
				if (this.state === 0) {
					clearInterval(this.loop);
					this.loop = null;
				} else {
					this.loop = setInterval(() => {
						
					}, 50);
				}
			}
		}, {
			type: "input",
			text: "Set Gold",
			reset: true,
			run: function() {

			}
		}, {
			type: "button",
			text: "Max Gold",
			run: function() {

			}
		}, {
			type: "input",
			text: "Flood Host Text",
			reset: true,
			run: function() {

			}
		}, {
			type: "button",
			text: "Crash Host",
			run: function() {

			}
		}, {
			type: "select",
			text: "Select Player",
			wide: true,
			run: function() {

			}
		}, {
			type: "input",
			text: "Set Their Gold",
			reset: true,
			run: function() {

			}
		}, {
			type: "input",
			text: "Send Text",
			reset: true,
			run: function() {

			}
		}
	],
	fishing_frenzy: [],
	crypto: [],
	pirates_voyage: [],
	tower_defense_2: [],
	monster_brawl: [],
	deceptive_dinos: [],
	battle_royale: [],
	tower_defense: [],
	cafe: [],
	factory: [],
	racing: [],
	blook_rush: [],
	classic: []
};

async function sendBot(firebase, game, name, blook, banner) {
	console.log(game, name, blook, banner);
	let joinReq = await fetch("https://fb.blooket.com/c/firebase/join", {
		body: JSON.stringify({ id: game, name: name }),
		credentials: "include",
		method: "PUT"
	}).then(e => e.json());
	if (joinReq.success) {
		let wsc = firebase.initializeApp({
			apiKey: "AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU",
			authDomain: "blooket-2020.firebaseapp.com",
			projectId: "blooket-2020",
			storageBucket: "blooket-2020.appspot.com",
			messagingSenderId: "741533559105",
			appId: "1:741533559105:web:b8cbb10e6123f2913519c0",
			measurementId: "G-S3H5NGN10Z",
			databaseURL: joinReq.fbShardURL
		}, name);
		await wsc.auth().signInWithCustomToken(joinReq.fbToken);
		await wsc.database().ref(`${game}/c/${name}`).set({ b: blook, bg: banner });
	} else {
		alert("Connection error:", joinReq.msg);
	}
}

async function injectConnection() {
	try {
		var react = Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode;
		let liveApp = (await react.props.liveGameController.getDatabaseRef())?.database?.app;
		if (!liveApp) return;
		react.props.liveGameController._liveApp = liveApp;
		return true;
	} catch {
		return;
	}
}

function generateUI(section) {
	if (!(section in CHEATS)) return null;
	if (document.querySelector(`#xmods-gui-${section.replace('_', '-')}`)) return null;

	const mainUI = gui.querySelector('#xmods-gui-main');
	const newHeader = document.createElement('h1');
	newHeader.innerHTML = section.toLowerCase().split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
	newHeader.onclick = e => uiCollapse(e.currentTarget, section.replace('_', '-'));
	mainUI.appendChild(newHeader);

	const newUI = document.createElement('section');
	newUI.id = `xmods-gui-${section.replace('_', '-')}`;
	if (mainUI.children.length >= 2) {
		mainUI.insertBefore(newUI, mainUI.children[1]);
	} else {
		mainUI.appendChild(newUI);
	}

	CHEATS[section].forEach(cheat => {
		let ele;
		let eleInput; let eleButton;
		const boundRun = cheat.run?.bind(cheat);
		switch (cheat.type) {
			case 'button':
				ele = document.createElement('button');
				ele.innerHTML = cheat.text;
				ele.onclick = boundRun;
				newUI.appendChild(ele);
				break;
			case 'toggle':
				ele = document.createElement('button');
				ele.classList.add('xmods-toggle');
				ele.dataset.state = cheat.state || 0;
				ele.innerHTML = cheat.text;
				ele.onclick = function() {
					cheat.state = cheat.state === 0 ? 1 : 0;
					ele.dataset.state = cheat.state || 0;
					boundRun();
				};
				newUI.appendChild(ele);
				break;
			case 'input':
				ele = document.createElement('div');
				ele.classList.add('xmods-input');
				eleInput = document.createElement('input');
				eleInput.type = 'text';
				eleInput.placeholder = cheat.text;
				ele.appendChild(eleInput);
				cheat.input = eleInput;
				eleButton = document.createElement('button');
				eleButton.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M4 12.6111L8.92308 17.5L20 6.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>`;
				eleButton.onclick = function() {
					cheat.value = eleInput.value;
					boundRun();
					if (cheat.reset) eleInput.value = '';
				};
				ele.appendChild(eleButton);
				newUI.appendChild(ele);
				break;
			case 'justinput':
				ele = document.createElement('div');
				ele.classList.add('xmods-just-input');
				eleInput = document.createElement('input');
				eleInput.type = 'text';
				eleInput.placeholder = cheat.text;
				eleInput.onchange = function() {
					cheat.value = eleInput.value;
					boundRun();
				};
				ele.appendChild(eleInput);
				cheat.input = eleInput;
				newUI.appendChild(ele);
				break;
			case 'toggleinput':
				ele = document.createElement('div');
				ele.classList.add('xmods-input', 'xmods-toggle');
				ele.dataset.state = cheat.state || 0;
				eleInput = document.createElement('input');
				eleInput.type = 'text';
				eleInput.placeholder = cheat.text;
				ele.appendChild(eleInput);
				eleButton = document.createElement('button');
				eleButton.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M4 12.6111L8.92308 17.5L20 6.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>`;
				eleButton.onclick = function() {
					cheat.state = cheat.state === 0 ? 1 : 0;
					ele.dataset.state = cheat.state || 0;
					cheat.value = eleInput.value;
					boundRun();
				};
				ele.appendChild(eleButton);
				newUI.appendChild(ele);
				break;
			case 'blookselect':
			case 'select':
				ele = document.createElement('div');
				ele.classList.add('xmods-select');
				eleButton = document.createElement('button');
				eleButton.classList.add('xmods-choice');
				if (cheat.type === 'blookselect') eleButton.classList.add('xmods-blook-choice');
				cheat.value = Object.keys(cheat.options)[0];
				let defaultText = document.createElement('p');
				if (typeof cheat.options[cheat.value] === 'string') {
					eleButton.classList.add('xmods-choice-no-img');
					defaultText.innerHTML = cheat.options[cheat.value];
				} else {
					eleButton.style.backgroundImage = `url('${cheat.options[cheat.value][1]}')`;
					defaultText.innerHTML = cheat.options[cheat.value][0];
				}
				eleButton.appendChild(defaultText);
				eleButton.innerHTML += `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M7 10L12 15L17 10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>`;
				ele.appendChild(eleButton);
				let eleOptions = document.createElement('div');
				eleOptions.classList.add('xmods-options');
				if (cheat.type === 'blookselect') eleOptions.classList.add('xmods-blook-options');
				eleOptions.style.display = 'none';
				let option;
				for (let o in cheat.options) {
					option = document.createElement('button');
					option.classList.add('xmods-option');
					if (cheat.type !== 'blookselect') {
						option.innerHTML = typeof cheat.options[o] === 'string' ? cheat.options[o] : cheat.options[o][0];
					}
					if (typeof cheat.options[o] === 'string') {
						option.classList.add('xmods-choice-no-img');
					} else {
						option.style.backgroundImage = `url('${cheat.options[o][1]}')`;
					}
					option.dataset.value = o;
					option.onclick = function() {
						if (eleOptions.style.display !== 'none') {
							eleOptions.style.display = 'none';
							cheat.value = o;
							defaultText = eleButton.querySelector('p');
							if (typeof cheat.options[o] === 'string') {
								eleButton.classList.add('xmods-choice-no-img');
								eleButton.style.backgroundImage = '';
								defaultText.innerHTML = cheat.options[o];
							} else {
								eleButton.classList.remove('xmods-choice-no-img');
								eleButton.style.backgroundImage = `url('${cheat.options[o][1]}')`;
								defaultText.innerHTML = cheat.options[o][0];
							}
							boundRun();
						}
					};
					eleOptions.appendChild(option);
				}
				ele.appendChild(eleOptions);
				eleButton.onclick = function() {
					eleOptions.style.display = eleOptions.classList.contains('xmods-blook-options') ? 'grid' : 'block';
					document.addEventListener('mousedown', function(e) {
						if (!eleOptions.contains(e.target) && !eleButton.contains(e.target)) {
							eleOptions.style.display = 'none';
						}
					}, { once: true });
				}
				newUI.appendChild(ele);
				break;
			case 'slider':
				ele = document.createElement('div');
				ele.classList.add('xmods-slider');
				let labelText = document.createElement('p');
				labelText.innerHTML = cheat.text;
				ele.appendChild(labelText);
				let slider = document.createElement('input');
				slider.classList.add('xmods-range');
				slider.type = 'range';
				slider.min = cheat.min || 0;
				slider.max = cheat.max || 100;
				slider.value = cheat.value || 50;
				slider.style.setProperty('--fill', `${(slider.value - slider.min) / (slider.max - slider.min) * 100}%`);
				slider.oninput = function() {
					slider.style.setProperty('--fill', `${(slider.value - slider.min) / (slider.max - slider.min) * 100}%`);
					cheat.value = slider.value;
					boundRun();
				};
				ele.appendChild(slider);
				newUI.appendChild(ele);
				break;
			default:
				console.warn(`Unknown UI element type: ${cheat.type}`);
		}
		if (cheat.wide) {
			ele?.classList.add('xmods-wide');
		}
	});
}
generateUI('global');
if (!window.location.hostname.startsWith('solo.')) {
	generateUI('bot_flooder');
}

function getGamemode() {
	switch (window.location.pathname) {
		case "/play/gold":
			return "gold_quest";
		case "/play/fishing":
			return "fishing_frenzy";
		case "/play/hack":
			return "crypto";
		case "/play/pirate":
			return "pirates_voyage";
		case "/play/defense2":
			return "tower_defense_2";
		case "/play/brawl":
			return "monster_brawl";
		case "/play/dino":
			return "deceptive_dinos";
		case "/play/battle-royale/match/preview":
		case "/play/battle-royale/question":
		case "/play/battle-royale/answer/sent":
		case "/play/battle-royale/answer/result":
		case "/play/battle-royale/match/result":
			return "battle_royale";
		case "/defense":
			return "tower_defense";
		case "/cafe":
		case "/cafe/shop":
			return "cafe";
		case "/play/factory":
			return "factory";
		case "/play/racing":
			return "racing";
		case "/play/rush":
			return "rush";
		case "/play/classic/get-ready":
		case "/play/classic/question":
		case "/play/classic/answer/sent":
		case "/play/classic/answer/result":
		case "/play/classic/standings":
			return "classic";
		default:
			return false
	}
}

console.log("%c[XMODS] Loading always on...", "color: #00ff00; font-weight: bold; font-size: 10px;");

let _connect = setInterval(async () => {
	if (await injectConnection()) {
		clearInterval(_connect);
	}
}, 100);
let _makeUI = setInterval(() => {
	const gamemode = getGamemode();
	if (gamemode) {
		generateUI(gamemode);
		clearInterval(_makeUI);
	}
}, 500);

let _allBlooks = setInterval(() => {
	if (!document.querySelector('#app>div>div')) return;
	const stateNode = Object.values(document.querySelector('#app>div>div'))[1].children[0]._owner.stateNode;
	if (stateNode.state.unlocks) {
		stateNode.setState({
			unlocks: {
				includes: e => 1
			}
		});
		clearInterval(_allBlooks);
	}
}, 1000);

console.log("%c[XMODS] Injected successfully!", "color: #00ff00; font-weight: bold; font-size: 10px;");

console.clear();
console.log("%c Blooket Hacks ", "background: linear-gradient(to right, #f00, #000, #f00); border: 3px solid #f00; color: #ffffff; font-weight: bold; font-size: 30px;");
console.log("%cFrom: %c xmods.vip ", "", "background: linear-gradient(to right, #70f, #0af); color: #ffffff; border-radius: 20px; font-weight: bold; font-size: 20px;");

})();
