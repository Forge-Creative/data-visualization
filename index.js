import * as d3 from "d3";
import { homeOwnershipRate, governments, periodEvents } from "./data";

const svgWidth = 1200;
const svgHeight = 800;
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
	.domain([new Date(1840, 0, 1), new Date(2040, 0, 1)])
	// .domain([new Date(1840, 0, 1), new Date(new Date().getFullYear(), 0, 1)]) // up to the current year
	.range([0, width]);

//=====
//home ownership
//=====
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
//government period
//=====
const yScaleGov = d3
	.scaleBand()
	.domain(governments.map((d) => d.government))
	.range([svgHeight, svgHeight + governments.length * 30])
	.padding(0.2);

//government period bar
const tooltip = d3.select("#tooltip");
svg
	.selectAll(".gov-term")
	.data(governments)
	.enter()
	.append("rect")
	.attr("class", "gov-term")
	// .attr("y", (d) => yScaleGov(d.government))
	.attr("y", 500)
	.attr("x", (d) =>
		xScale(new Date(d.start.year, d.start.month - 1, d.start.day))
	)
	.attr(
		"width",
		(d) =>
			xScale(new Date(d.end.year, d.end.month - 1, d.end.day)) -
			xScale(new Date(d.start.year, d.start.month - 1, d.start.day))
	)
	.attr("height", yScaleGov.bandwidth())
	.attr("fill", (d) => d.color)
	.on("mouseover", function (event, d) {
		tooltip.transition().duration(200).style("opacity", 0.9);
		tooltip
			.html(
				`<h3>${d.government}</h3>
				${d.start.year}-${d.start.month}-${d.start.day} to ${d.end.year}-${d.end.month}-${d.end.day}<br>
				<p> ${d.details}</p>`
			)
			.style("left", event.pageX + 5 + "px")
			.style("top", event.pageY - 28 + "px");
	})
	.on("mouseout", function (d) {
		tooltip.transition().duration(500).style("opacity", 0);
	});

//government label
// svg
// 	.selectAll(".gov-label")
// 	.data(governments)
// 	.enter()
// 	.append("text")
// 	.attr("class", "gov-label")
// 	.attr("x", (d) => xScale(new Date(d.start, 0, 1)) + 55) // バーの少し右側
// 	// .attr("y", (d) => yScaleGov(d.government) + yScaleGov.bandwidth() / 2)
// 	.attr("y", 500)
// 	.attr("dy", ".35em") // 上下中央に位置するための調整
// 	.text((d) => d.government);

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
