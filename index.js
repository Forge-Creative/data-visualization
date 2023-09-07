import { select, range } from "d3";

const link = "http://www.w3.org/2000/svg";
const width = window.innerWidth;
const height = window.innerHeight;

// svg initialization
const svg = select("body")
	.append("svg")
	.attr("width", width)
	.attr("height", height);

// const svg = document.createElementNS(link, "svg");
// svg.setAttribute("width", width);
// svg.setAttribute("height", height);
// document.body.appendChild(svg);

const n = 100;
const marks = [];
//horizontal lines
// for (let i = 0; i < n; i++) {
// 	marks.push({
// 		y: i * 20,
// 		width: width,
// 		height: 10,
// 		mask: "url(#circle-mask-2)",
// 	});
// }

// svg
// 	.selectAll("rect")
// 	.data(marks)
// 	.join("rect")
// 	.attr("y", (d) => d.y)
// 	.attr("width", (d) => d.width)
// 	.attr("height", (d) => d.height)
// 	.attr("mask", (d) => d.mask);

svg
	.selectAll("rect.horizontal")
	.data(range(n))
	.join("rect")
	.attr("y", (d) => d * 20)
	.attr("width", width)
	.attr("height", 10)
	.attr("class", "horizontal")
	.attr("mask", "url(#circle-mask)");

// vertical lines
svg
	.selectAll("rect.vertical")
	.data(range(n))
	.join("rect")
	.attr("x", (d) => d * 20)
	.attr("width", 10)
	.attr("height", height)
	.attr("class", "vertical")
	.attr("mask", "url(#circle-mask-2)");

// mask
const mask = svg.append("mask").attr("id", '"circle-mask');
// const mask = document.createElementNS(link, "mask");
// mask.setAttribute("id", "circle-mask");
// svg.appendChild(mask);

// maskRect
mask
	.append("rect")
	.attr("width", width)
	.attr("height", height)
	.attr("fill", "white");
// const maskRect = document.createElementNS(link, "rect");
// maskRect.setAttribute("width", width);
// maskRect.setAttribute("height", height);
// maskRect.setAttribute("fill", "black");
// mask.appendChild(maskRect);

// circle
mask
	.append("circle")
	.attr("cx", width / 2)
	.attr("cy", height / 2)
	.attr("r", 300)
	.attr("fill", "white");
// const circle = document.createElementNS(link, "circle");
// circle.setAttribute("cx", width / 2);
// circle.setAttribute("cy", height / 2);
// circle.setAttribute("r", 300);
// circle.setAttribute("fill", "white");
// mask.appendChild(circle);

// mask2
const mask2 = svg.append("mask2").attr("id", '"circle-mask-2');
// const mask2 = document.createElementNS(link, "mask");
// mask2.setAttribute("id", "circle-mask-2");
// svg.appendChild(mask2);

// maskRect2
mask2
	.append("rect")
	.attr("width", width)
	.attr("height", height)
	.attr("fill", "white");
// const maskRect2 = document.createElementNS(link, "rect");
// maskRect2.setAttribute("width", width);
// maskRect2.setAttribute("height", height);
// maskRect2.setAttribute("fill", "white");
// mask2.appendChild(maskRect2);

// circle2
mask2
	.append("circle")
	.attr("cx", width / 2)
	.attr("cy", height / 2)
	.attr("r", 300)
	.attr("fill", "black");
// const circle2 = document.createElementNS(link, "circle");
// circle2.setAttribute("cx", width / 2);
// circle2.setAttribute("cy", height / 2);
// circle2.setAttribute("r", 300);
// circle2.setAttribute("fill", "black");
// mask2.appendChild(circle2);
