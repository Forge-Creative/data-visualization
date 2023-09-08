import * as d3 from "d3";

const svgWidth = window.innerWidth - 100;
const svgHeight = window.innerHeight - 100;

const dataset = [
	{ x: 1, y: 5 },
	{ x: 2, y: 15 },
	{ x: 3, y: 8 },
	{ x: 4, y: 20 },
	{ x: 5, y: 13 },
];

// SVG要素を作成
const svg = d3
	.select("body")
	.append("svg")
	.attr("width", svgWidth)
	.attr("height", svgHeight);

//scale
const xScale = d3
	.scaleLinear()
	.domain([d3.min(dataset, (d) => d.x), d3.max(dataset, (d) => d.x)])
	.range([0, svgWidth]);

const yScale = d3
	.scaleLinear()
	.domain([0, d3.max(dataset, (d) => d.y)])
	.range([svgHeight, 0]);

//line
const line = d3
	.line()
	.x((d) => xScale(d.x))
	.y((d) => yScale(d.y));

svg
	.append("path")
	.attr("d", line(dataset))
	.attr("stroke", "blue")
	.attr("stroke-width", 2)
	.attr("fill", "none");

//bar
svg
	.append("g")
	.attr("transform", `translate(0, ${svgHeight})`)
	.call(d3.axisBottom(xScale));

svg.append("g").call(d3.axisLeft(yScale));
