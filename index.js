import * as d3 from "d3";
import { homeOwnershipRate } from "./data";

const svgWidth = 1200;
const svgHeight = 400;
const margin = { top: 20, right: 20, bottom: 20, left: 20 };
const width = svgWidth - margin.left - margin.right;
const height = svgHeight - margin.top - margin.bottom;

// SVG
const svg = d3
	.select("body")
	.append("svg")
	.attr("width", svgWidth)
	.attr("height", svgHeight);

//scale
const xScale = d3
	.scaleTime()
	.domain([new Date(1840, 0, 1), new Date(new Date().getFullYear(), 0, 1)]) // up to the current year
	.range([0, width]);

const yScale = d3
	.scaleLinear()
	.domain([0, 100]) //percentage
	.range([height, 0]);

//chart line
const line = d3
	.line()
	.x((d) => xScale(new Date(d.year, 0, 1)))
	.y((d) => yScale(d.rate));

svg
	.append("path")
	.datum(homeOwnershipRate)
	.attr("d", line)
	.attr("stroke", "#7A0708")
	.attr("stroke-width", 5)
	.attr("fill", "none");

//=====
//bar
//=====
//x-axis
svg
	.append("g")
	.attr("class", "x-axis")
	.attr("transform", `translate(0, ${yScale(0)})`)
	.call(d3.axisBottom(xScale).tickFormat(d3.timeFormat("%Y")));

//y-axis
// svg.append("g").attr("class", "y-axis").call(d3.axisLeft(yScale));
