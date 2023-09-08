import { select, range } from "d3";

const width = window.innerWidth;
const height = window.innerHeight;

const svg = select("body")
	.append("svg")
	.attr("width", width)
	.attr("height", height);

let time = 0;
setInterval(() => {
	const data = range(15).map((d) => ({
		x: d * 60 + 50,
		y: 250 + Math.sin(d * 0.5 + time) * 200,
		r: 20 + Math.sin(d * 0.5 + time * 2) * 10,
	}));
	// const circles = svg.selectAll("circle").data(data);

	// const circlesEnter = circles
	// 	.enter()
	// 	.append("circle")
	// 	.attr("r", 20)
	// 	.attr("fill", "pink");

	// circles
	// 	.merge(circlesEnter)
	// 	.attr("cx", (d) => d * 60 + 50)
	// 	.attr("cy", (d) => 250 + Math.sin(d * 0.5 + time) * 200);

	const circles = svg
		.selectAll("circle")
		.data(data)
		.join("circle")
		.attr("r", (d) => d.r)
		.attr("fill", "pink")
		.attr("cx", (d) => d.x)
		.attr("cy", (d) => d.y);

	time = time + 0.01;
}, 1000 / 60);
