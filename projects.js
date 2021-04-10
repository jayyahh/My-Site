function showArrow(project) {
	const projectArrow = ".projectBlockArrow." + project;
	document.querySelectorAll(".projectBlockArrow").forEach(e => e.classList.remove("showArrow"));
	setTimeout(() => document.querySelector(projectArrow).classList.add("showArrow"), 300);
	document.querySelectorAll(".projectDetails").forEach(e => e.classList.remove("showProject"));
	const projectIntro = ".projectDetails." + project;
	setTimeout(() => document.querySelector(projectIntro).classList.add("showProject"), 300);
}


//	window.open("https://github.com/jayyahh/Interview-Simulator", "_blank").focus();
