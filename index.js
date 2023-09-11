import * as d3 from "d3";
import { homeOwnershipRate, governments, events } from "./data";

const svgWidth = 1600;
const svgHeight = 800;
const margin = { top: 20, right: 20, bottom: 20, left: 20 };
const width = svgWidth - margin.left - margin.right;
const height = svgHeight - margin.top - margin.bottom;
const zoom = d3
	.zoom()
	.scaleExtent([1, 3])
	.translateExtent([
		[0, 0],
		[width, height],
	])
	.on("zoom", zoomed);

// SVG
const svg = d3
	.select("body")
	.append("svg")
	.attr("width", svgWidth)
	.attr("height", svgHeight)
	.call(zoom);

//scale
const xScale = d3
	.scaleTime()
	.domain([new Date(1840, 0, 1), new Date(2040, 0, 1)])
	// .domain([new Date(1840, 0, 1), new Date(new Date().getFullYear(), 0, 1)]) // up to the current year
	.range([0, width]);

//zoom function
function zoomed({ transform }) {
	const newXScale = transform.rescaleX(xScale);
	const scale = transform.k;
	let tickInterval;

	if (scale > 2) {
		tickInterval = 1;
	} else if (scale > 1) {
		tickInterval = 5;
	} else {
		tickInterval = 10;
	}

	// update path
	svg.select("path").attr(
		"d",
		line.x((d) => newXScale(new Date(d.year, 0, 1)))
	);

	// update government period bar
	svg
		.selectAll(".gov-term")
		.attr("x", (d) =>
			newXScale(new Date(d.start.year, d.start.month - 1, d.start.day))
		)
		.attr(
			"width",
			(d) =>
				newXScale(new Date(d.end.year, d.end.month - 1, d.end.day)) -
				newXScale(new Date(d.start.year, d.start.month - 1, d.start.day))
		);

	// update event period bar
	svg
		.selectAll(".event-term")
		.attr("x", (d) =>
			newXScale(new Date(d.start.year, d.start.month - 1, d.start.day))
		)
		.attr(
			"width",
			(d) =>
				newXScale(new Date(d.end.year, d.end.month - 1, d.end.day)) -
				newXScale(new Date(d.start.year, d.start.month - 1, d.start.day))
		);

	// update x-axis
	svg
		.select(".x-axis")
		.call(
			d3
				.axisBottom(newXScale)
				.ticks(d3.timeYear.every(tickInterval))
				.tickFormat(d3.timeFormat("%Y"))
		)
		.attr("transform", `translate(0, ${yScale(0)}) scale(${transform.k},1)`)
		.selectAll("text")
		.attr("transform", "translate(-10,0)rotate(-45)")
		.style("text-anchor", "end");
}

// ========================= home ownership =========================
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
//========================= government period =========================
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

//========================= Event period =========================
const yScaleEvent = d3
	.scaleBand()
	.domain(events.map((d) => d.event))
	.range([height, height - events.length * 20])
	.padding(0.3);

const modal = d3.select("#modal");
const closeModal = d3.select(".close");
const modalContent = d3.select("#modal-content");

svg
	.selectAll(".event-term")
	.data(events)
	.enter()
	.append("rect")
	.attr("class", "event-term")
	.attr("x", (d) =>
		xScale(new Date(d.start.year, d.start.month - 1, d.start.day))
	)
	.attr("y", (d) => yScaleEvent(d.event) - 100)
	.attr(
		"width",
		(d) =>
			xScale(new Date(d.end.year, d.end.month - 1, d.end.day)) -
			xScale(new Date(d.start.year, d.start.month - 1, d.start.day))
	)
	.attr("height", yScaleEvent.bandwidth())
	.attr("fill", (d) => d.color)
	.attr("style", "cursor: pointer;")
	.on("mouseover", function (event, d) {
		tooltip.transition().duration(200).style("opacity", 0.9);
		tooltip
			.html(`<h3>${d.event}</h3>`)
			.style("left", event.pageX + 5 + "px")
			.style("top", event.pageY - 28 + "px");
	})
	.on("mouseout", function (event) {
		let isHovered = tooltip.node().matches(":hover");
		if (!isHovered) {
			tooltip.transition().duration(500).style("opacity", 0);
		}
	})
	.on("click", function (event, d) {
		modalContent.html(`
			<h3>${d.event}</h3>
			<p>${d.start.year}-${d.start.month}-${d.start.day} to
			End: ${d.end.year}-${d.end.month}-${d.end.day}</p>
			<p>${d.details}<br>
			<a href="${d.link}" target="_blank">Read more</a></p>
		`);
		modal.style("display", "block");
	});

closeModal.on("click", function () {
	modal.style("display", "none");
});

//========================= Chart bars =========================
//x-axis
svg
	.append("g")
	.attr("class", "x-axis")
	.attr("transform", `translate(0, ${yScale(0)})`)
	.call(
		d3
			.axisBottom(xScale)
			.ticks(d3.timeYear.every(10))
			.tickFormat(d3.timeFormat("%Y"))
	)
	.selectAll("text")
	.attr("transform", "translate(10,10)");
//.call(d3.axisBottom(xScale).tickFormat(d3.timeFormat("%Y")));

//y-axis
// svg.append("g").attr("class", "y-axis").call(d3.axisLeft(yScale));
