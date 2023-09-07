import { select, range, symbol, symbolsFill } from "d3";

const link = "http://www.w3.org/2000/svg";
const width = window.innerWidth;
const height = window.innerHeight;

// svg initialization
const svg = select("body")
	.append("svg")
	.attr("width", width)
	.attr("height", height);

const n = 100;
const marks = [];
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

// mask
const mask = svg.append("mask").attr("id", "mask-1");

// maskRect
mask
	.append("rect")
	.attr("width", width)
	.attr("height", height)
	.attr("fill", "black");

// circle
mask
	.append("g")
	.attr("transform", `translate(${width / 2}, ${height / 2})`)
	.append("path")
	.attr("d", symbol(symbolsFill[1], 200000)())
	.attr("fill", "white");

// mask2
const mask2 = svg.append("mask").attr("id", "mask-2");

// maskRect2
mask2
	.append("rect")
	.attr("width", width)
	.attr("height", height)
	.attr("fill", "white");

// circle2
mask2
	.append("g")
	.attr("transform", `translate(${width / 2}, ${height / 2})`)
	.append("path")
	.attr("d", symbol(symbolsFill[1], 200000)())
	.attr("fill", "black");
