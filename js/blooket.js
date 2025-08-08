(() => {

const VERSION = "08.08.25";

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
	backdrop-filter: blur(calc(var(--gui-width) * 0.02));
	border: calc(var(--gui-width) * 0.01) solid #00000a1a;
	border-radius: calc(var(--gui-width) * 0.06);
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

	h1 {
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

			&::selection {
				background: #ffffff44;
			}
		}

		&::selection {
			background: #ffffff44;
		}
	}
	p {
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

		&::selection {
			background: #ffffff44;
		}
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

		color: #ffffff;
		text-align: center;
		margin: 0;

		transition: .2s;

		&:hover {
			transform: scale(1.05);
		}
		&::selection {
			background: #ffffff44;
		}
	}
	section {
		width: 100%;
		height: max-content;

		padding: 0 calc(var(--gui-width) * 0.07);
		display: grid;

		grid-template-columns: 1fr 1fr;
		gap: calc(var(--gui-width) * 0.02);

		box-sizing: border-box;

		button, input[type="text"], input[type="number"] {
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
		button:not(.xmods-choice):hover, input[type="text"]:hover, input[type="number"]:hover {
			background: #ffffff2a;
			border-color: #ffffff3a;
		}
		.xmods-toggle[data-state="0"] {
			background: #ff000066 !important;
		}
		.xmods-toggle[data-state="1"] {
			background: #00ff0033 !important;
		}
		.xmods-wide {
			grid-column: 1 / -1;
		}

		.xmods-input {
			display: grid;
			grid-template-columns: 4fr 1fr;

			width: 100%;
			height: calc(var(--gui-width) * 0.1);

			input {
				padding-left: calc(var(--gui-width) * 0.02);

				border-top-right-radius: 0;
				border-bottom-right-radius: 0;

				&:focus {
					outline: none;
					border: calc(var(--gui-width) * 0.007) solid #ffffff55;
				}
				&::selection {
					background: #ffffff44;
				}
			}
			button {
				position: relative;
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-left: none;

				svg {
					position: absolute;
					top: 8%;
					left: 10%;
					width: 80%;
					height: 80%;

					path {
						stroke: #fff;
					}
				}
			}
		}
		.xmods-input.xmods-toggle[data-state="0"] {
			background: none !important;
			input, button {
				background: #ff000066;
			}
		}
		.xmods-input.xmods-toggle[data-state="1"] {
			background: none !important;
			input, button {
				background: #00ff0033;
			}
		}
		.xmods-input.xmods-wide {
			grid-template-columns: 8fr 1fr;
		}
		.xmods-select {
			display: grid;
			grid-template-rows: 1fr 3fr;
			height: calc(var(--gui-width) * 0.1);

			.xmods-choice {
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

				p {
					width: 0;
					white-space: nowrap;
					margin-block-start: 0 !important;
					margin-block-end: 0 !important;
				}

				svg {
					position: absolute;
					top: calc(var(--gui-width) * 0.009);
					right: calc(var(--gui-width) * 0.009);

					width: calc(var(--gui-width) * 0.08);
					height: calc(var(--gui-width) * 0.08);

					path {
						stroke: #fff;
					}
				}
			}
			.xmods-choice-no-img {
				border: calc(var(--gui-width) * 0.007) solid #ffffff2a;

				svg {
					top: calc(var(--gui-width) * 0.005);
					right: calc(var(--gui-width) * 0.005);
				}

				&:hover {
					background: #ffffff2a;
					border-color: #ffffff3a;
				}
			}
			.xmods-options {
				position: relative;
				z-index: 2;

				width: 100%;
				height: calc(var(--gui-width) * 0.3);
				overflow-x: hidden;
				overflow-y: scroll;
				
				border-radius: calc(var(--gui-width) * 0.02);

				background: #00001055;
				backdrop-filter: blur(calc(var(--gui-width) * 0.01));

				.xmods-option {
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
				.xmods-option-no-img:hover {
					background: #ffffff11;
				}
			}
		}
		.xmods-slider {
			width: 100%;
			height: calc(var(--gui-width) * 0.1);

			background: #ffffff1a;
			border: calc(var(--gui-width) * 0.007) solid #ffffff2a;
			border-radius: calc(var(--gui-width) * 0.02);

			transition: .2s;

			position: relative;

			p {
				position: absolute;
				top: calc(var(--gui-width) * 0.002);
				left: 0;

				width: 100%;
				margin: 0;
				text-align: center;

				font-size: calc(var(--gui-width) * 0.035);
				color: #fff;
			}
			.xmods-range {
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
			.xmods-range::-webkit-slider-runnable-track {
				background: linear-gradient(to right, #ffffff88 var(--fill), #ffffff22 var(--fill)) !important;
				border-radius: calc(var(--gui-width) * 0.02);
				height: calc(var(--gui-width) * 0.02);
			}
			.xmods-range::-moz-range-track {
				background: linear-gradient(to right, #ffffff88 var(--fill), #ffffff22 var(--fill)) !important;
				border-radius: calc(var(--gui-width) * 0.02);
				height: calc(var(--gui-width) * 0.02);
			}
			.xmods-range::-webkit-slider-thumb {
				-webkit-appearance: none;
				appearance: none;
				background-color: #fff;
				border: none;
				border-radius: 50%;
				width: calc(var(--gui-width) * 0.03);
				height: calc(var(--gui-width) * 0.03);
			}
			.xmods-range::-moz-range-thumb {
				border: none;
				border-radius: 50%;
				background-color: #fff;
				width: calc(var(--gui-width) * 0.03);
				height: calc(var(--gui-width) * 0.03);
			}
			&:hover {
				background: #ffffff2a;
				border-color: #ffffff3a;
			}
		}
	}
}
`;
document.head.appendChild(css);

const gui = document.createElement("div");
gui.id = "xmods-gui";
gui.innerHTML = `
	<div id="xmods-gui-drag-top" class="xmods-gui-drag">
		<h1>Example Words<span>v${VERSION}</span></h1>
	</div>
	<div id="xmods-gui-main">
	</div>
	<div id="xmods-gui-drag-bottom" class="xmods-gui-drag">
		<p>Made By <span><a class="xmods-underlined" href="https://qwkdev.github.io/" target="_blank" aria-label="label">qwk<span class="xmods-underline" style="--widen: 10%; --fix: 5.5%;"></span></a></span></p>
	</div>
`;
document.body.appendChild(gui);

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

window.guiCollapse = (label, id) => {
	const section = document.getElementById(`xmods-gui-${id}`);
	label.style.color = section.style.display === "none" ? "" : "#bff";
	section.style.display = section.style.display === "none" ? "grid" : "none";
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
			run: function() {
			}
		}, {
			type: "toggle",
			text: "Percent Auto Answer",
			state: 0,
			run: function() {
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
			type: "select",
			options: {
				"starter":          "Default",
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
			},
			run: function() {
				const react = Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner;
				react.stateNode.props.liveGameController.setVal({
					path: "c/" + react.stateNode.props.client.name + "/bg",
					val: this.value
				})
			}
		}, {
			type: "toggle",
			text: "Force Custom Name",
			state: 0,
			run: function() {
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
	newHeader.onclick = e => guiCollapse(e.currentTarget, section.replace('_', '-'));
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