(() => {

const css = document.createElement("style");
css.id = "xmods-css";
css.textContent = `
#xmods-gui {
	position: absolute;
	top: 25vh;
	left: 25vw;
	width: 50vw;
	height: 50vh;

	background-color: #f00;
	border: 2px solid #000;
}
`;
document.head.appendChild(css);

const gui = document.createElement("div");
gui.id = "xmods-gui";
document.body.appendChild(gui);

gui.addEventListener("mousemove", e => {
	if (e.target.id === gui.id && e.buttons !== 0) {
		const rect = gui.getBoundingClientRect();
		gui.style.top = `${e.clientY - rect.top}px`;
		gui.style.left = `${e.clientX - rect.left}px`;

		// y.style.left = t.x - a.x + (t.width - y.clientWidth) / 2 + "px", y.style.top = t.y - a.y + t.height + "px"
	}
});

})();