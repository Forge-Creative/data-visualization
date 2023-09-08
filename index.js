import * as d3 from "d3";
import { homeOwnershipRate, governments, events } from "./data";

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

//=====
//Event period
//=====
const yScaleEvent = d3
	.scaleBand()
	.domain(events.map((d) => d.event))
	.range([height, height - events.length * 20])
	.padding(0.1);

svg
	.selectAll(".event-term")
	.data(events)
	.enter()
	.append("rect")
	.attr("class", "event-term")
	.attr("x", (d) =>
		xScale(new Date(d.start.year, d.start.month - 1, d.start.day))
	)
	.attr("y", (d) => yScaleEvent(d.event) - 150)
	.attr(
		"width",
		(d) =>
			xScale(new Date(d.end.year, d.end.month - 1, d.end.day)) -
			xScale(new Date(d.start.year, d.start.month - 1, d.start.day))
	)
	.attr("height", yScaleEvent.bandwidth())
	.attr("fill", (d) => d.color)
	.on("mouseover", function (event, d) {
		tooltip.transition().duration(200).style("opacity", 0.9);
		tooltip
			.html(
				`<h3>Event: ${d.event}</h3>
				<p>${d.start.year}-${d.start.month}-${d.start.day} to
				End: ${d.end.year}-${d.end.month}-${d.end.day}</p>
				<p>${d.details}<br>
				<a href="${d.link}" target="_blank">Read more</a></p>`
			)
			.style("left", event.pageX + 5 + "px")
			.style("top", event.pageY - 28 + "px");
	})
	.on("mouseout", function (d) {
		tooltip.transition().duration(500).style("opacity", 0);
	});

//=====
//Chart bars
//=====
//x-axis
svg
	.append("g")
	.attr("class", "x-axis")
	.attr("transform", `translate(0, ${yScale(0)})`)
	.call(d3.axisBottom(xScale).tickFormat(d3.timeFormat("%Y")));

//y-axis
// svg.append("g").attr("class", "y-axis").call(d3.axisLeft(yScale));
