(() => {

const VERSION = "09.08.25";

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
	box-sizing: border-box;
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
#xmods-gui-main section .xmods-input input {
	padding-left: calc(var(--gui-width) * 0.02);
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
}
#xmods-gui-main section .xmods-input input:focus {
	outline: none;
	border: calc(var(--gui-width) * 0.007) solid #ffffff55;
}
#xmods-gui-main section .xmods-input input::selection {
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
	background: #ffffff1a;
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
#xmods-gui-main section .xmods-select .xmods-choice-no-img {
	border: calc(var(--gui-width) * 0.007) solid #ffffff2a;
}
#xmods-gui-main section .xmods-select .xmods-choice-no-img svg {
	top: calc(var(--gui-width) * 0.005);
	right: calc(var(--gui-width) * 0.005);
}
#xmods-gui-main section .xmods-select .xmods-choice-no-img:hover {
	background: #ffffff2a;
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
		<h1>Example Words<span>v${VERSION}</span></h1>
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

const COSMETIC_OPTIONS = {
	blooks: {
		"chick":              ["Chick",                "https://ac.blooket.com/marketassets/blooks/chick.svg"],
		"chicken":            ["Chicken",              "https://ac.blooket.com/marketassets/blooks/chicken.svg"],
		"cow":                ["Cow",                  "https://ac.blooket.com/marketassets/blooks/cow.svg"],
		"goat":               ["Goat",                 "https://ac.blooket.com/marketassets/blooks/goat.svg"],
		"horse":              ["Horse",                "https://ac.blooket.com/marketassets/blooks/horse.svg"],
		"pig":                ["Pig",                  "https://ac.blooket.com/marketassets/blooks/pig.svg"],
		"sheep":              ["Sheep",                "https://ac.blooket.com/marketassets/blooks/sheep.svg"],
		"duck":               ["Duck",                 "https://ac.blooket.com/marketassets/blooks/duck.svg"],
		"alpaca":             ["Alpaca",               "https://ac.blooket.com/marketassets/blooks/alpaca.svg"],
		"dog":                ["Dog",                  "https://ac.blooket.com/marketassets/blooks/dog.svg"],
		"cat":                ["Cat",                  "https://ac.blooket.com/marketassets/blooks/cat.svg"],
		"rabbit":             ["Rabbit",               "https://ac.blooket.com/marketassets/blooks/rabbit.svg"],
		"goldfish":           ["Goldfish",             "https://ac.blooket.com/marketassets/blooks/goldfish.svg"],
		"hamster":            ["Hamster",              "https://ac.blooket.com/marketassets/blooks/hamster.svg"],
		"turtle":             ["Turtle",               "https://ac.blooket.com/marketassets/blooks/turtle.svg"],
		"kitten":             ["Kitten",               "https://ac.blooket.com/marketassets/blooks/kitten.svg"],
		"puppy":              ["Puppy",                "https://ac.blooket.com/marketassets/blooks/puppy.svg"],
		"bear":               ["Bear",                 "https://ac.blooket.com/marketassets/blooks/bear.svg"],
		"moose":              ["Moose",                "https://ac.blooket.com/marketassets/blooks/moose.svg"],
		"fox":                ["Fox",                  "https://ac.blooket.com/marketassets/blooks/fox.svg"],
		"raccoon":            ["Raccoon",              "https://ac.blooket.com/marketassets/blooks/raccoon.svg"],
		"squirrel":           ["Squirrel",             "https://ac.blooket.com/marketassets/blooks/squirrel.svg"],
		"owl":                ["Owl",                  "https://ac.blooket.com/marketassets/blooks/owl.svg"],
		"hedgehog":           ["Hedgehog",             "https://ac.blooket.com/marketassets/blooks/hedgehog.svg"],
		"deer":               ["Deer",                 "https://ac.blooket.com/marketassets/blooks/deer.svg"],
		"wolf":               ["Wolf",                 "https://ac.blooket.com/marketassets/blooks/wolf.svg"],
		"beaver":             ["Beaver",               "https://ac.blooket.com/marketassets/blooks/beaver.svg"],
		"tiger":              ["Tiger",                "https://ac.blooket.com/marketassets/blooks/tiger.svg"],
		"orangutan":          ["Orangutan",            "https://ac.blooket.com/marketassets/blooks/orangutan.svg"],
		"cockatoo":           ["Cockatoo",             "https://ac.blooket.com/marketassets/blooks/cockatoo.svg"],
		"parrot":             ["Parrot",               "https://ac.blooket.com/marketassets/blooks/parrot.svg"],
		"anaconda":           ["Anaconda",             "https://ac.blooket.com/marketassets/blooks/anaconda.svg"],
		"jaguar":             ["Jaguar",               "https://ac.blooket.com/marketassets/blooks/jaguar.svg"],
		"macaw":              ["Macaw",                "https://ac.blooket.com/marketassets/blooks/macaw.svg"],
		"toucan":             ["Toucan",               "https://ac.blooket.com/marketassets/blooks/toucan.svg"],
		"panther":            ["Panther",              "https://ac.blooket.com/marketassets/blooks/panther.svg"],
		"capuchinmonkey":     ["Capuchin",             "https://ac.blooket.com/marketassets/blooks/capuchinmonkey.svg"],
		"gorilla":            ["Gorilla",              "https://ac.blooket.com/marketassets/blooks/gorilla.svg"],
		"hippo":              ["Hippo",                "https://ac.blooket.com/marketassets/blooks/hippo.svg"],
		"rhino":              ["Rhino",                "https://ac.blooket.com/marketassets/blooks/rhino.svg"],
		"giraffe":            ["Giraffe",              "https://ac.blooket.com/marketassets/blooks/giraffe.svg"],
		"snowyowl":           ["Snowy Owl",            "https://ac.blooket.com/marketassets/blooks/snowyowl.svg"],
		"polarbear":          ["Polar Bear",           "https://ac.blooket.com/marketassets/blooks/polarbear.svg"],
		"arcticfox":          ["Arctic Fox",           "https://ac.blooket.com/marketassets/blooks/arcticfox.svg"],
		"babypenguin":        ["Baby Penguin",         "https://ac.blooket.com/marketassets/blooks/babypenguin.svg"],
		"penguin":            ["Penguin",              "https://ac.blooket.com/marketassets/blooks/penguin.svg"],
		"arctichare":         ["Arctic Hare",          "https://ac.blooket.com/marketassets/blooks/arctichare.svg"],
		"seal":               ["Seal",                 "https://ac.blooket.com/marketassets/blooks/seal.svg"],
		"walrus":             ["Walrus",               "https://ac.blooket.com/marketassets/blooks/walrus.svg"],
		"witch":              ["Witch",                "https://ac.blooket.com/marketassets/blooks/witch.svg"],
		"wizard":             ["Wizard",               "https://ac.blooket.com/marketassets/blooks/wizard.svg"],
		"elf":                ["Elf",                  "https://ac.blooket.com/marketassets/blooks/elf.svg"],
		"fairy":              ["Fairy",                "https://ac.blooket.com/marketassets/blooks/fairy.svg"],
		"slimemonster":       ["Slime Monster",        "https://ac.blooket.com/marketassets/blooks/slimemonster.svg"],
		"jester":             ["Jester",               "https://ac.blooket.com/marketassets/blooks/jester.svg"],
		"dragon":             ["Dragon",               "https://ac.blooket.com/marketassets/blooks/dragon.svg"],
		"queen":              ["Queen",                "https://ac.blooket.com/marketassets/blooks/queen.svg"],
		"unicorn":            ["Unicorn",              "https://ac.blooket.com/marketassets/blooks/unicorn.svg"],
		"king":               ["King",                 "https://ac.blooket.com/marketassets/blooks/king.svg"],
		"twoofspades":        ["Two of Spades",        "https://ac.blooket.com/marketassets/blooks/twoofspades.svg"],
		"eat":                ["Eat Me",               "https://ac.blooket.com/marketassets/blooks/eat.svg"],
		"drink":              ["Drink Me",             "https://ac.blooket.com/marketassets/blooks/drink.svg"],
		"alice":              ["Alice",                "https://ac.blooket.com/marketassets/blooks/alice.svg"],
		"queenofhearts":      ["Queen of Hearts",      "https://ac.blooket.com/marketassets/blooks/queenofhearts.svg"],
		"dormouse":           ["Dormouse",             "https://ac.blooket.com/marketassets/blooks/dormouse.svg"],
		"whiterabbit":        ["White Rabbit",         "https://ac.blooket.com/marketassets/blooks/whiterabbit.svg"],
		"cheshirecat":        ["Cheshire Cat",         "https://ac.blooket.com/marketassets/blooks/cheshirecat.svg"],
		"caterpillar":        ["Caterpillar",          "https://ac.blooket.com/marketassets/blooks/caterpillar.svg"],
		"madhatter":          ["Mad Hatter",           "https://ac.blooket.com/marketassets/blooks/madhatter.svg"],
		"kingofhearts":       ["King of Hearts",       "https://ac.blooket.com/marketassets/blooks/kingofhearts.svg"],
		"toast":              ["Toast",                "https://ac.blooket.com/marketassets/blooks/toast.svg"],
		"cereal":             ["Cereal",               "https://ac.blooket.com/marketassets/blooks/cereal.svg"],
		"yogurt":             ["Yogurt",               "https://ac.blooket.com/marketassets/blooks/yogurt.svg"],
		"breakfastcombo":     ["Breakfast Combo",      "https://ac.blooket.com/marketassets/blooks/breakfastcombo.svg"],
		"orangejuice":        ["Orange Juice",         "https://ac.blooket.com/marketassets/blooks/orangejuice.svg"],
		"milk":               ["Milk",                 "https://ac.blooket.com/marketassets/blooks/milk.svg"],
		"waffle":             ["Waffle",               "https://ac.blooket.com/marketassets/blooks/waffle.svg"],
		"pancakes":           ["Pancakes",             "https://ac.blooket.com/marketassets/blooks/pancakes.svg"],
		"frenchtoast":        ["French Toast",         "https://ac.blooket.com/marketassets/blooks/frenchtoast.svg"],
		"pizza":              ["Pizza",                "https://ac.blooket.com/marketassets/blooks/pizza.svg"],
		"earth":              ["Earth",                "https://ac.blooket.com/marketassets/blooks/earth.svg"],
		"meteor":             ["Meteor",               "https://ac.blooket.com/marketassets/blooks/meteor.svg"],
		"stars":              ["Stars",                "https://ac.blooket.com/marketassets/blooks/stars.svg"],
		"alien":              ["Alien",                "https://ac.blooket.com/marketassets/blooks/alien.svg"],
		"planet":             ["Planet",               "https://ac.blooket.com/marketassets/blooks/planet.svg"],
		"ufo":                ["UFO",                  "https://ac.blooket.com/marketassets/blooks/ufo.svg"],
		"spaceship":          ["Spaceship",            "https://ac.blooket.com/marketassets/blooks/spaceship.svg"],
		"astronaut":          ["Astronaut",            "https://ac.blooket.com/marketassets/blooks/astronaut.svg"],
		"lilbot":             ["Lil Bot",              "https://ac.blooket.com/marketassets/blooks/lilbot.svg"],
		"lovelybot":          ["Lovely Bot",           "https://ac.blooket.com/marketassets/blooks/lovelybot.svg"],
		"angrybot":           ["Angry Bot",            "https://ac.blooket.com/marketassets/blooks/angrybot.svg"],
		"happybot":           ["Happy Bot",            "https://ac.blooket.com/marketassets/blooks/happybot.svg"],
		"watson":             ["Watson",               "https://ac.blooket.com/marketassets/blooks/watson.svg"],
		"buddybot":           ["Buddy Bot",            "https://ac.blooket.com/marketassets/blooks/buddybot.svg"],
		"brainybot":          ["Brainy Bot",           "https://ac.blooket.com/marketassets/blooks/brainybot.svg"],
		"megabot":            ["Mega Bot",             "https://ac.blooket.com/marketassets/blooks/megabot.svg"],
		"oldboot":            ["Old Boot",             "https://ac.blooket.com/marketassets/blooks/oldboot.svg"],
		"jellyfish":          ["Jellyfish",            "https://ac.blooket.com/marketassets/blooks/jellyfish.svg"],
		"clownfish":          ["Clownfish",            "https://ac.blooket.com/marketassets/blooks/clownfish.svg"],
		"frog":               ["Frog",                 "https://ac.blooket.com/marketassets/blooks/frog.svg"],
		"crab":               ["Crab",                 "https://ac.blooket.com/marketassets/blooks/crab.svg"],
		"pufferfish":         ["Pufferfish",           "https://ac.blooket.com/marketassets/blooks/pufferfish.svg"],
		"blobfish":           ["Blobfish",             "https://ac.blooket.com/marketassets/blooks/blobfish.svg"],
		"octopus":            ["Octopus",              "https://ac.blooket.com/marketassets/blooks/octopus.svg"],
		"narwhal":            ["Narwhal",              "https://ac.blooket.com/marketassets/blooks/narwhal.svg"],
		"dolphin":            ["Dolphin",              "https://ac.blooket.com/marketassets/blooks/dolphin.svg"],
		"babyshark":          ["Baby Shark",           "https://ac.blooket.com/marketassets/blooks/babyshark.svg"],
		"megalodon":          ["Megalodon",            "https://ac.blooket.com/marketassets/blooks/megalodon.svg"],
		"panda":              ["Panda",                "https://ac.blooket.com/marketassets/blooks/panda.svg"],
		"sloth":              ["Sloth",                "https://ac.blooket.com/marketassets/blooks/sloth.svg"],
		"tenrec":             ["Tenrec",               "https://ac.blooket.com/marketassets/blooks/tenrec.svg"],
		"flamingo":           ["Flamingo",             "https://ac.blooket.com/marketassets/blooks/flamingo.svg"],
		"zebra":              ["Zebra",                "https://ac.blooket.com/marketassets/blooks/zebra.svg"],
		"elephant":           ["Elephant",             "https://ac.blooket.com/marketassets/blooks/elephant.svg"],
		"lemur":              ["Lemur",                "https://ac.blooket.com/marketassets/blooks/lemur.svg"],
		"peacock":            ["Peacock",              "https://ac.blooket.com/marketassets/blooks/peacock.svg"],
		"chameleon":          ["Chameleon",            "https://ac.blooket.com/marketassets/blooks/chameleon.svg"],
		"lion":               ["Lion",                 "https://ac.blooket.com/marketassets/blooks/lion.svg"],
		"amber":              ["Amber",                "https://ac.blooket.com/marketassets/blooks/amber.svg"],
		"dinoegg":            ["Dino Egg",             "https://ac.blooket.com/marketassets/blooks/dinoegg.svg"],
		"dinofossil":         ["Dino Fossil",          "https://ac.blooket.com/marketassets/blooks/dinofossil.svg"],
		"stegosaurus":        ["Stegosaurus",          "https://ac.blooket.com/marketassets/blooks/stegosaurus.svg"],
		"velociraptor":       ["Velociraptor",         "https://ac.blooket.com/marketassets/blooks/velociraptor.svg"],
		"brontosaurus":       ["Brontosaurus",         "https://ac.blooket.com/marketassets/blooks/brontosaurus.svg"],
		"triceratops":        ["Triceratops",          "https://ac.blooket.com/marketassets/blooks/triceratops.svg"],
		"tyrannosaurusrex":   ["Tyrannosaurus Rex",    "https://ac.blooket.com/marketassets/blooks/tyrannosaurusrex.svg"],
		"icebat":             ["Ice Bat",              "https://ac.blooket.com/marketassets/blooks/icebat.svg"],
		"icebug":             ["Ice Bug",              "https://ac.blooket.com/marketassets/blooks/icebug.svg"],
		"iceelemental":       ["Ice Elemental",        "https://ac.blooket.com/marketassets/blooks/iceelemental.svg"],
		"rockmonster":        ["Rock Monster",         "https://ac.blooket.com/marketassets/blooks/rockmonster.svg"],
		"dink":               ["Ding",                 "https://ac.blooket.com/marketassets/blooks/dink.svg"],
		"donk":               ["Donk",                 "https://ac.blooket.com/marketassets/blooks/donk.svg"],
		"bushmonster":        ["Bush Monster",         "https://ac.blooket.com/marketassets/blooks/bushmonster.svg"],
		"yeti":               ["Yeti",                 "https://ac.blooket.com/marketassets/blooks/yeti.svg"],
		"dingo":              ["Dingo",                "https://ac.blooket.com/marketassets/blooks/dingo.svg"],
		"echidna":            ["Echidna",              "https://ac.blooket.com/marketassets/blooks/echidna.svg"],
		"koala":              ["Koala",                "https://ac.blooket.com/marketassets/blooks/koala.svg"],
		"kookaburra":         ["Kookaburra",           "https://ac.blooket.com/marketassets/blooks/kookaburra.svg"],
		"platypus":           ["Platypus",             "https://ac.blooket.com/marketassets/blooks/platypus.svg"],
		"joey":               ["Joey",                 "https://ac.blooket.com/marketassets/blooks/joey.svg"],
		"kangaroo":           ["Kangaroo",             "https://ac.blooket.com/marketassets/blooks/kangaroo.svg"],
		"crocodile":          ["Crocodile",            "https://ac.blooket.com/marketassets/blooks/crocodile.svg"],
		"sugarglider":        ["Sugar Glider",         "https://ac.blooket.com/marketassets/blooks/sugarglider.svg"],
		"deckhand":           ["Deckhand",             "https://ac.blooket.com/marketassets/blooks/deckhand.svg"],
		"buccaneer":          ["Buccaneer",            "https://ac.blooket.com/marketassets/blooks/buccaneer.svg"],
		"swashbuckler":       ["Swashbuckler",         "https://ac.blooket.com/marketassets/blooks/swashbuckler.svg"],
		"treasuremap":        ["Treasure Map",         "https://ac.blooket.com/marketassets/blooks/treasuremap.svg"],
		"seagull":            ["Seagull",              "https://ac.blooket.com/marketassets/blooks/seagull.svg"],
		"jollypirate":        ["Jolly Pirate",         "https://ac.blooket.com/marketassets/blooks/jollypirate.svg"],
		"pirateship":         ["Pirate Ship",          "https://ac.blooket.com/marketassets/blooks/pirateship.svg"],
		"kraken":             ["Kraken",               "https://ac.blooket.com/marketassets/blooks/kraken.svg"],
		"captainblackbeard":  ["Captain Blackbeard",   "https://ac.blooket.com/marketassets/blooks/captainblackbeard.svg"],
		"ant":                ["Ant",                  "https://ac.blooket.com/marketassets/blooks/ant.svg"],
		"rhinobeetle":        ["Rhino Beetle",         "https://ac.blooket.com/marketassets/blooks/rhinobeetle.svg"],
		"ladybug":            ["Ladybug",              "https://ac.blooket.com/marketassets/blooks/ladybug.svg"],
		"fly":                ["Fly",                  "https://ac.blooket.com/marketassets/blooks/fly.svg"],
		"worm":               ["Worm",                 "https://ac.blooket.com/marketassets/blooks/worm.svg"],
		"bee":                ["Bee",                  "https://ac.blooket.com/marketassets/blooks/bee.svg"],
		"mantis":             ["Mantis",               "https://ac.blooket.com/marketassets/blooks/mantis.svg"],
		"butterfly":          ["Butterfly",            "https://ac.blooket.com/marketassets/blooks/butterfly.svg"],
		"pumpkin":            ["Pumpkin",              "https://ac.blooket.com/marketassets/blooks/pumpkin.svg"],
		"swampmonster":       ["Swamp Monster",        "https://ac.blooket.com/marketassets/blooks/swampmonster.svg"],
		"frankenstein":       ["Frankenstein",         "https://ac.blooket.com/marketassets/blooks/frankenstein.svg"],
		"vampire":            ["Vampire",              "https://ac.blooket.com/marketassets/blooks/vampire.svg"],
		"zombie":             ["Zombie",               "https://ac.blooket.com/marketassets/blooks/zombie.svg"],
		"mummy":              ["Mummy",                "https://ac.blooket.com/marketassets/blooks/mummy.svg"],
		"caramelapple2":      ["Caramel Apple",        "https://ac.blooket.com/marketassets/blooks/caramelapple2.svg"],
		"candycorn":          ["Candy Corn",           "https://ac.blooket.com/marketassets/blooks/candycorn.svg"],
		"crow":               ["Crow",                 "https://ac.blooket.com/marketassets/blooks/crow.svg"],
		"werewolf":           ["Werewolf",             "https://ac.blooket.com/marketassets/blooks/werewolf.svg"],
		"ghost":              ["Ghost",                "https://ac.blooket.com/marketassets/blooks/ghost.svg"],
		"blackbear":          ["Black Bear",           "https://ac.blooket.com/marketassets/blooks/blackbear.svg"],
		"pumpkinpie":         ["Pumpkin Pie",          "https://ac.blooket.com/marketassets/blooks/pumpkinpie.svg"],
		"chipmunk":           ["Chipmunk",             "https://ac.blooket.com/marketassets/blooks/chipmunk.svg"],
		"cornucopia":         ["Cornucopia",           "https://ac.blooket.com/marketassets/blooks/cornucopia.svg"],
		"autumncat":          ["Autumn Cat",           "https://ac.blooket.com/marketassets/blooks/autumncat.svg"],
		"pumpkinpuppy":       ["Pumpkin Puppy",        "https://ac.blooket.com/marketassets/blooks/pumpkinpuppy.svg"],
		"autumncrow":         ["Autumn Crow",          "https://ac.blooket.com/marketassets/blooks/autumncrow.svg"],
		"turkey":             ["Turkey",               "https://ac.blooket.com/marketassets/blooks/turkey.svg"],
		"snowglobe":          ["Snow Globe",           "https://ac.blooket.com/marketassets/blooks/snowglobe.svg"],
		"holidaygift":        ["Holiday Gift",         "https://ac.blooket.com/marketassets/blooks/holidaygift.svg"],
		"hotchocolate":       ["Hot Chocolate",        "https://ac.blooket.com/marketassets/blooks/hotchocolate.svg"],
		"holidaywreath":      ["Holiday Wreath",       "https://ac.blooket.com/marketassets/blooks/holidaywreath.svg"],
		"stocking":           ["Stocking",             "https://ac.blooket.com/marketassets/blooks/stocking.svg"],
		"gingerbreadman":     ["Gingerbread Man",      "https://ac.blooket.com/marketassets/blooks/gingerbreadman.svg"],
		"gingerbreadhouse":   ["Gingerbread House",    "https://ac.blooket.com/marketassets/blooks/gingerbreadhouse.svg"],
		"reindeer":           ["Reindeer",             "https://ac.blooket.com/marketassets/blooks/reindeer.svg"],
		"snowman":            ["Snowman",              "https://ac.blooket.com/marketassets/blooks/snowman.svg"],
		"santaclaus":         ["Santa Claus",          "https://ac.blooket.com/marketassets/blooks/santaclaus.svg"],
		"rainbowjellyfish":   ["Rainbow Jellyfish",    "https://ac.blooket.com/marketassets/blooks/rainbowjellyfish.svg"],
		"blizzardclownfish":  ["Blizzard Clownfish",   "https://ac.blooket.com/marketassets/blooks/blizzardclownfish.svg"],
		"lovelyfrog":         ["Lovely Frog",          "https://ac.blooket.com/marketassets/blooks/lovelyfrog.svg"],
		"luckyfrog":          ["Lucky Frog",           "https://ac.blooket.com/marketassets/blooks/luckyfrog.svg"],
		"springfrog":         ["Spring Frog",          "https://ac.blooket.com/marketassets/blooks/springfrog.svg"],
		"poisondartfrog":     ["Poison Dart Frog",     "https://ac.blooket.com/marketassets/blooks/poisondartfrog.svg"],
		"luckyhamster":       ["Lucky Hamster",        "https://ac.blooket.com/marketassets/blooks/luckyhamster.svg"],
		"luckybee":           ["Lucky Bee",            "https://ac.blooket.com/marketassets/blooks/luckybee.svg"],
		"chocolaterabbit":    ["Chocolate Rabbit",     "https://ac.blooket.com/marketassets/blooks/chocolaterabbit.svg"],
		"springrabbit":       ["Spring Rabbit",        "https://ac.blooket.com/marketassets/blooks/springrabbit.svg"],
		"springdeer":         ["Spring Deer",          "https://ac.blooket.com/marketassets/blooks/springdeer.svg"],
		"lemoncrab":          ["Lemon Crab",           "https://ac.blooket.com/marketassets/blooks/lemoncrab.svg"],
		"piratepufferfish":   ["Pirate Pufferfish",    "https://ac.blooket.com/marketassets/blooks/piratepufferfish.svg"],
		"donutblobfish":      ["Donut Blobfish",       "https://ac.blooket.com/marketassets/blooks/donutblobfish.svg"],
		"crimsonoctopus":     ["Crimson Octopus",      "https://ac.blooket.com/marketassets/blooks/crimsonoctopus.svg"],
		"rainbownarwhal":     ["Rainbow Narwhal",      "https://ac.blooket.com/marketassets/blooks/rainbownarwhal.svg"],
		"frostwreath":        ["Frost Wreath",         "https://ac.blooket.com/marketassets/blooks/frostwreath.svg"],
		"tropicalglobe":      ["Tropical Globe",       "https://ac.blooket.com/marketassets/blooks/tropicalglobe.svg"],
		"newyorksnowglobe":   ["New York Snow Globe",  "https://ac.blooket.com/marketassets/blooks/newyorksnowglobe.svg"],
		"londonsnowglobe":    ["London Snow Globe",    "https://ac.blooket.com/marketassets/blooks/londonsnowglobe.svg"],
		"japansnowglobe":     ["Japan Snow Globe",     "https://ac.blooket.com/marketassets/blooks/japansnowglobe.svg"],
		"egyptsnowglobe":     ["Egypt Snow Globe",     "https://ac.blooket.com/marketassets/blooks/egyptsnowglobe.svg"],
		"parissnowglobe":     ["Paris Snow Globe",     "https://ac.blooket.com/marketassets/blooks/parissnowglobe.svg"],
		"redsweatersnowman":  ["Red Sweater Snowman",  "https://ac.blooket.com/marketassets/blooks/redsweatersnowman.svg"],
		"bluesweatersnowman": ["Blue Sweater Snowman", "https://ac.blooket.com/marketassets/blooks/bluesweatersnowman.svg"],
		"elfsweatersnowman":  ["Elf Sweater Snowman",  "https://ac.blooket.com/marketassets/blooks/elfsweatersnowman.svg"],
		"holidayelf":         ["Holiday Elf",          "https://ac.blooket.com/marketassets/blooks/holidayelf.svg"],
		"cozybabypenguin":    ["Cozy Baby Penguin",    "https://ac.blooket.com/marketassets/blooks/cozybabypenguin.svg"],
		"santaclaws":         ["Santa Claws",          "https://ac.blooket.com/marketassets/blooks/santaclaws.svg"],
		"cookiescombo":       ["Cookies Combo",        "https://ac.blooket.com/marketassets/blooks/cookiescombo.svg"],
		"chillyflamingo":     ["Chilly Flamingo",      "https://ac.blooket.com/marketassets/blooks/chillyflamingo.svg"],
		"snowybushmonster":   ["Snowy Bush Monster",   "https://ac.blooket.com/marketassets/blooks/snowybushmonster.svg"],
		"nutcrackerkoala":    ["Nutcracker Koala",     "https://ac.blooket.com/marketassets/blooks/nutcrackerkoala.svg"],
		"sandwich":           ["Sandwich",             "https://ac.blooket.com/marketassets/blooks/sandwich.svg"],
		"iceslime":           ["Ice Slime",            "https://ac.blooket.com/marketassets/blooks/iceslime.svg"],
		"frozenfossil":       ["Frozen Fossil",        "https://ac.blooket.com/marketassets/blooks/frozenfossil.svg"],
		"icecrab":            ["Ice Crab",             "https://ac.blooket.com/marketassets/blooks/icecrab.svg"],
		"rainbowpanda":       ["Rainbow Panda",        "https://ac.blooket.com/marketassets/blooks/rainbowpanda.svg"],
		"whitepeacock":       ["White Peacock",        "https://ac.blooket.com/marketassets/blooks/whitepeacock.svg"],
		"tigerzebra":         ["Tiger Zebra",          "https://ac.blooket.com/marketassets/blooks/tigerzebra.svg"],
		"tealplatypus":       ["Teal Platypus",        "https://ac.blooket.com/marketassets/blooks/tealplatypus.svg"],
		"goldenpumpkinpie":   ["Golden Pumpkin Pie",   "https://ac.blooket.com/marketassets/blooks/goldenpumpkinpie.svg"],
		"bluebutterfly":      ["Blue Butterfly",       "https://ac.blooket.com/marketassets/blooks/bluebutterfly.svg"],
		"redastronaut":       ["Red Astronaut",        "https://ac.blooket.com/marketassets/blooks/redastronaut.svg"],
		"orangeastronaut":    ["Orange Astronaut",     "https://ac.blooket.com/marketassets/blooks/orangeastronaut.svg"],
		"yellowastronaut":    ["Yellow Astronaut",     "https://ac.blooket.com/marketassets/blooks/yellowastronaut.svg"],
		"limeastronaut":      ["Lime Astronaut",       "https://ac.blooket.com/marketassets/blooks/limeastronaut.svg"],
		"greenastronaut":     ["Green Astronaut",      "https://ac.blooket.com/marketassets/blooks/greenastronaut.svg"],
		"cyanastronaut":      ["Cyan Astronaut",       "https://ac.blooket.com/marketassets/blooks/cyanastronaut.svg"],
		"blueastronaut":      ["Blue Astronaut",       "https://ac.blooket.com/marketassets/blooks/blueastronaut.svg"],
		"pinkastronaut":      ["Pink Astronaut",       "https://ac.blooket.com/marketassets/blooks/pinkastronaut.svg"],
		"purpleastronaut":    ["Purple Astronaut",     "https://ac.blooket.com/marketassets/blooks/purpleastronaut.svg"],
		"brownastronaut":     ["Brown Astronaut",      "https://ac.blooket.com/marketassets/blooks/brownastronaut.svg"],
		"blackastronaut":     ["Black Astronaut",      "https://ac.blooket.com/marketassets/blooks/blackastronaut.svg"],
		"lovelyplanet":       ["Lovely Planet",        "https://ac.blooket.com/marketassets/blooks/lovelyplanet.svg"],
		"lovelypeacock":      ["Lovely Peacock",       "https://ac.blooket.com/marketassets/blooks/lovelypeacock.svg"],
		"lovelyfox":          ["Lovely Fox",           "https://ac.blooket.com/marketassets/blooks/lovelyfox.svg"],
		"lovelyrabbit":       ["Lovely Rabbit",        "https://ac.blooket.com/marketassets/blooks/lovelyrabbit.svg"],
		"hauntedpumpkin":     ["Haunted Pumpkin",      "https://ac.blooket.com/marketassets/blooks/hauntedpumpkin.svg"],
		"pumpkincookie":      ["Pumpkin Cookie",       "https://ac.blooket.com/marketassets/blooks/pumpkincookie.svg"],
		"ghostcookie":        ["Ghost Cookie",         "https://ac.blooket.com/marketassets/blooks/ghostcookie.svg"],
		"redgummybear":       ["Red Gummy Bear",       "https://ac.blooket.com/marketassets/blooks/redgummybear.svg"],
		"bluegummybear":      ["Blue Gummy Bear",      "https://ac.blooket.com/marketassets/blooks/bluegummybear.svg"],
		"greengummybear":     ["Green Gummy Bear",     "https://ac.blooket.com/marketassets/blooks/greengummybear.svg"],
		"chickchicken":       ["Chick Chicken",        "https://ac.blooket.com/marketassets/blooks/chickchicken.svg"],
		"chickenchick":       ["Chicken Chick",        "https://ac.blooket.com/marketassets/blooks/chickenchick.svg"],
		"raccoonbandit":      ["Raccoon Bandit",       "https://ac.blooket.com/marketassets/blooks/raccoonbandit.svg"],
		"owlsheriff":         ["Owl Sheriff",          "https://ac.blooket.com/marketassets/blooks/owlsheriff.svg"],
		"vampirefrog":        ["Vampire Frog",         "https://ac.blooket.com/marketassets/blooks/vampirefrog.svg"],
		"pumpkinking":        ["Pumpkin King",         "https://ac.blooket.com/marketassets/blooks/pumpkinking.svg"],
		"leprechaun":         ["Leprechaun",           "https://ac.blooket.com/marketassets/blooks/leprechaun.svg"],
		"anacondawizard":     ["Anaconda Wizard",      "https://ac.blooket.com/marketassets/blooks/anacondawizard.svg"],
		"spookypumpkin":      ["Spooky Pumpkin",       "https://ac.blooket.com/marketassets/blooks/spookypumpkin.svg"],
		"spookymummy":        ["Spooky Mummy",         "https://ac.blooket.com/marketassets/blooks/spookymummy.svg"],
		"agentowl":           ["Agent Owl",            "https://ac.blooket.com/marketassets/blooks/agentowl.svg"],
		"masterelf":          ["Master Elf",           "https://ac.blooket.com/marketassets/blooks/masterelf.svg"],
		"partypig":           ["Party Pig",            "https://ac.blooket.com/marketassets/blooks/partypig.svg"],
		"wiseowl":            ["Wise Owl",             "https://ac.blooket.com/marketassets/blooks/wiseowl.svg"],
		"wisecaterpillar":    ["Wise Caterpillar",     "https://ac.blooket.com/marketassets/blooks/wisecaterpillar.svg"],
		"spookyghost":        ["Spooky Ghost",         "https://ac.blooket.com/marketassets/blooks/spookyghost.svg"],
		"phantomking":        ["Phantom King",         "https://ac.blooket.com/marketassets/blooks/phantomking.svg"],
		"timthealien":        ["Tim the Alien",        "https://ac.blooket.com/marketassets/blooks/timthealien.svg"],
		"rainbowastronaut":   ["Rainbow Astronaut",    "https://ac.blooket.com/marketassets/blooks/rainbowastronaut.svg"],
		"hamstaclaus":        ["Hamsta Claus",         "https://ac.blooket.com/marketassets/blooks/hamstaclaus.svg"],
		"lightblue":          ["Light Blue",           "https://ac.blooket.com/marketassets/blooks/lightblue.svg"],
		"black":              ["Black",                "https://ac.blooket.com/marketassets/blooks/black.svg"],
		"red":                ["Red",                  "https://ac.blooket.com/marketassets/blooks/red.svg"],
		"purple":             ["Purple",               "https://ac.blooket.com/marketassets/blooks/purple.svg"],
		"pink":               ["Pink",                 "https://ac.blooket.com/marketassets/blooks/pink.svg"],
		"orange":             ["Orange",               "https://ac.blooket.com/marketassets/blooks/orange.svg"],
		"lime":               ["Lime",                 "https://ac.blooket.com/marketassets/blooks/lime.svg"],
		"green":              ["Green",                "https://ac.blooket.com/marketassets/blooks/green.svg"],
		"teal":               ["Teal",                 "https://ac.blooket.com/marketassets/blooks/teal.svg"],
		"tan":                ["Tan",                  "https://ac.blooket.com/marketassets/blooks/tan.svg"],
		"maroon":             ["Maroon",               "https://ac.blooket.com/marketassets/blooks/maroon.svg"],
		"gray":               ["Gray",                 "https://ac.blooket.com/marketassets/blooks/gray.svg"],
		"mint":               ["Mint",                 "https://ac.blooket.com/marketassets/blooks/mint.svg"],
		"salmon":             ["Salmon",               "https://ac.blooket.com/marketassets/blooks/salmon.svg"],
		"burgandy":           ["Burgandy",             "https://ac.blooket.com/marketassets/blooks/burgandy.svg"],
		"babyblue":           ["Baby Blue",            "https://ac.blooket.com/marketassets/blooks/babyblue.svg"],
		"dust":               ["Dust",                 "https://ac.blooket.com/marketassets/blooks/dust.svg"],
		"brown":              ["Brown",                "https://ac.blooket.com/marketassets/blooks/brown.svg"],
		"dull":               ["Dull Blue",            "https://ac.blooket.com/marketassets/blooks/dull.svg"],
		"yellow":             ["Yellow",               "https://ac.blooket.com/marketassets/blooks/yellow.svg"],
		"blue":               ["Blue",                 "https://ac.blooket.com/marketassets/blooks/blue.svg"]
	},
	banners: {
		"starter":          "Default Banner",
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
			input: "number",
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
			wide: true,
			text: "GUI Size",
			min: 20,
			max: 60,
			value: 50,
			run: function() {
				gui.style.setProperty('--gui-width', `${this.value}vw`);
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
								correct = [
									...document.querySelectorAll('[class*="answerContainer"]')
								][
									question.answers.findIndex(answer => question.correctAnswers.includes(answer))
								];
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
			run: function() {
			}
		}, {
			type: "toggle",
			text: "Freeze Leaderboard",
			state: 0,
			run: function() {
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
		}
	],
	bot_flooder: [
		{
			type: "input",
			text: "Name",
			run: function() {}
		}, {
			type: "toggle",
			text: "Random Names",
			run: function() {}
		}, {
			type: "button",
			text: "Send",
			run: async function() {
				console.log('im async');
			}
		}
	]
};

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
	mainUI.appendChild(newUI);

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
				eleButton = document.createElement('button');
				eleButton.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M4 12.6111L8.92308 17.5L20 6.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>`;
				eleButton.onclick = function() {
					cheat.value = eleInput.value;
					boundRun();
				};
				ele.appendChild(eleButton);
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
			case 'select':
				ele = document.createElement('div');
				ele.classList.add('xmods-select');
				eleButton = document.createElement('button');
				eleButton.classList.add('xmods-choice');
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
				eleOptions.style.display = 'none';
				let option;
				for (let o in cheat.options) {
					option = document.createElement('button');
					option.classList.add('xmods-option');
					if (typeof cheat.options[o] === 'string') {
						option.classList.add('xmods-choice-no-img');
						option.innerHTML = cheat.options[o];
					} else {
						option.style.backgroundImage = `url('${cheat.options[o][1]}')`;
						option.innerHTML = cheat.options[o][0];
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
					eleOptions.style.display = 'block';
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

console.log("%c[XMODS] Loading always on...", "color: #00ff00; font-weight: bold; font-size: 10px;");

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

const x = async function(e, amount, a, o) {
    console.log(e, amount, a, o);
	// name, amount, blook, banner

	const react = Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode;
	var n = {
		randomNames: !1
	};
	if (!react.props.liveGameController._liveApp) {
		alert("Can't find current game");
		return
	}
	var s = react.props.liveGameController._liveApp.firebase;
	async function l(e, t) {
		let r = await fetch("https://fb.blooket.com/c/firebase/join", {
			body: JSON.stringify({
				id: e,
				name: t
			}),
			credentials: "include",
			method: "PUT"
		}).then(e => e.json());
		if (r.success) {
			let i = s.initializeApp({
				apiKey: "AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU",
				authDomain: "blooket-2020.firebaseapp.com",
				projectId: "blooket-2020",
				storageBucket: "blooket-2020.appspot.com",
				messagingSenderId: "741533559105",
				appId: "1:741533559105:web:b8cbb10e6123f2913519c0",
				measurementId: "G-S3H5NGN10Z",
				databaseURL: r.fbShardURL
			}, t);
			await i.auth().signInWithCustomToken(r.fbToken);
			let n = i.database();
			await n.ref(`${e}/c/${t}`).set({
					b: a,
					bg: o
				}),
				C.alerts[0].addLog(`Bot ${t} joined!`)
		} else
			alert("Connect error: " + r.msg)
	}
	async function c() {
		const react = Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode;
		if (!react.props.liveGameController._liveApp) {
			alert("Can't find current game");
			return
		}
		var a,
			o = react.props.client.hostId,
			amt = parseInt(amount);
		if (!amt) {
			alert("You must use a valid number!");
			return
		}
		if (!n.randomNames)
			var s = e;
		for (var c = 0; c < amt; c++)
			await l(o, a = n.randomNames ? d(15) : s + Math.floor(4e3 * Math.random()))
	}
	function d(e) {
		for (var t = "", a = 0; a < e; a++)
			t += String.fromCharCode(65 + Math.floor(25 * Math.random()));
		return t
	}
	c();
}
