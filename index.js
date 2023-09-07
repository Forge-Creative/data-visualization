import { select, range, symbol, symbolsFill } from "d3";

const width = window.innerWidth;
const height = window.innerHeight;

// svg initialization
const svg = select("body")
	.append("svg")
	.attr("width", width)
	.attr("height", height);

const n = 100;
//horizontal lines
svg
	.append("g")
	.selectAll("rect")
	.data(range(n))
	.join("rect")
	.attr("y", (d) => d * 20)
	.attr("width", width)
	.attr("height", 10)
	.attr("mask", "url(#mask-1)");

// vertical lines
svg
	.append("g")
	.selectAll("rect")
	.data(range(n))
	.join("rect")
	.attr("x", (d) => d * 20)
	.attr("width", 10)
	.attr("height", height)
	.attr("mask", "url(#mask-2)");

// shape mask
const renderMask = (selection, id, inverted) => {
	const mask = svg.append("mask").attr("id", id);

	mask
		.append("rect")
		.attr("width", width)
		.attr("height", height)
		.attr("fill", inverted ? "black" : "white");

	// const g = mask
	// 	.append("g")
	// 	.attr("transform", `translate(${width / 2}, ${height / 2})`);

	mask
		.selectAll("g")
		.data(range(symbolsFill.length))
		.join((enter) =>
			enter
				.append("g")
				.attr("transform", (d) => `translate(${d * 300}, ${height / 2})`)
				.append("path")
				.attr("d", (d) => symbol(symbolsFill[d], 50000)())
				.attr("fill", inverted ? "white" : "black")
		);
};

// renderMask(svg, "mask-1", false);
// renderMask(svg, "mask-2", true);

svg.call(renderMask, "mask-1", false).call(renderMask, "mask-2", true);
