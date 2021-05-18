function showArrow(project) {
	const projectColor = ".projectBlock." + project;
	document.querySelectorAll(".projectBlock").forEach(e => e.classList.remove("showColor"));
	setTimeout(() => document.querySelector(projectColor).classList.add("showColor"), 300);

	const projectArrow = ".projectBlockArrow." + project;
	document.querySelectorAll(".projectBlockArrow").forEach(e => e.classList.remove("showArrow"));
	setTimeout(() => document.querySelector(projectArrow).classList.add("showArrow"), 300);

	document.querySelectorAll(".projectDetails").forEach(e => e.classList.remove("showProject"));
	const projectIntro = ".projectDetails." + project;
	setTimeout(() => document.querySelector(projectIntro).classList.add("showProject"), 300);
}

var p1 = document.getElementById("page1");
var p2 = document.getElementById("page2");
var p3 = document.getElementById("page3");
var p4 = document.getElementById("page4");
var p5 = document.getElementById("page5");

var d1 = document.getElementById("d1");
var d2 = document.getElementById("d2");
var d3 = document.getElementById("d3");
var d4 = document.getElementById("d4");
var d5 = document.getElementById("d5");

var startingX;

function p1TouchStart(event) {
	startingX = event.touches[0].clientX;
}

function p1TouchEnd(event) {
	let change = startingX - event.changedTouches[0].clientX;
	let threshold = screen.width / 3;
	if (change > threshold) {
		p1.style.opacity = 0;
		p2.style.opacity = 1;
		d1.style.opacity = 0.5;
		d2.style.opacity = 1;
	} else if (change < (threshold * -1)) {
		p1.style.opacity = 0;
		p5.style.opacity = 1;
		d1.style.opacity = 0.5;
		d5.style.opacity = 1;
	}
}

function p2TouchStart(event) {
	startingX = event.touches[0].clientX;
}

function p2TouchEnd(event) {
	let change = startingX - event.changedTouches[0].clientX;
	let threshold = screen.width / 3;

	if (change > threshold) {
		p2.style.opacity = 0;
		p3.style.opacity = 1;
		d2.style.opacity = 0.5;
		d3.style.opacity = 1;
	} else if (change < (threshold * -1)) {
		p2.style.opacity = 0;
		p1.style.opacity = 1;
		d2.style.opacity = 0.5;
		d1.style.opacity = 1;
	}
}

function p3TouchStart(event) {
	startingX = event.touches[0].clientX;
}

function p3TouchEnd(event) {
	let change = startingX - event.changedTouches[0].clientX;
	let threshold = screen.width / 3;
	if (change > threshold) {
		p3.style.opacity = 0;
		p4.style.opacity = 1;
		d3.style.opacity = 0.5;
		d4.style.opacity = 1;
	} else if (change < (threshold * -1)) {
		p3.style.opacity = 0;
		p2.style.opacity = 1;
		d3.style.opacity = 0.5;
		d2.style.opacity = 1;
	}
}

function p4TouchStart(event) {
	startingX = event.touches[0].clientX;
}

function p4TouchEnd(event) {
	let change = startingX - event.changedTouches[0].clientX;
	let threshold = screen.width / 3;
	if (change > threshold) {
		p4.style.opacity = 0;
		p5.style.opacity = 1;
		d4.style.opacity = 0.5;
		d5.style.opacity = 1;
	} else if (change < (threshold * -1)) {
		p4.style.opacity = 0;
		p3.style.opacity = 1;
		d4.style.opacity = 0.5;
		d3.style.opacity = 1;
	}
}

function p5TouchStart(event) {
	startingX = event.touches[0].clientX;
}

function p5TouchEnd(event) {
	let change = startingX - event.changedTouches[0].clientX;
	let threshold = screen.width / 3;
	if (change > threshold) {
		p5.style.opacity = 0;
		p1.style.opacity = 1;
		d5.style.opacity = 0.5;
		d1.style.opacity = 1;
	} else if (change < (threshold * -1)) {
		p5.style.opacity = 0;
		p4.style.opacity = 1;
		d5.style.opacity = 0.5;
		d4.style.opacity = 1;
	}
}