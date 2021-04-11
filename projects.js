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