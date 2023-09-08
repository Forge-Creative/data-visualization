import { select, range } from "d3";

const width = window.innerWidth;
const height = window.innerHeight;

const svg = select("body")
	.append("svg")
	.attr("width", width)
	.attr("height", height);

const vizData = (data) => {
	svg
		.selectAll("circle")
		.data(data)
		.join("circle")
		.attr("r", (d) => d.r)
		.attr("fill", "pink")
		.attr("cx", (d) => d.x)
		.attr("cy", (d) => d.y);
};

let time = 0;
setInterval(() => {
	const data = range(15).map((d) => ({
		x: d * 60 + 50,
		y: 250 + Math.sin(d * 0.5 + time) * 200,
		r: 20 + Math.sin(d * 0.5 + time * 2) * 10,
	}));

	vizData(data);
	time = time + 0.01;
}, 1000 / 60);
