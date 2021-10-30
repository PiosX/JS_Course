// const allCircles = document.getElementsByClassName("circle");
const allCircles = document.querySelectorAll(".circle");
const lime = document.querySelector(".lime");
const gold = document.querySelector(".yellow");

const newCircle = document.createElement("div");
newCircle.classList.add("circle", "purple");
gold.append(newCircle);

// allCircles.forEach((circle) =>
// 	circle.addEventListener("click", () => {
// 		console.log(circle);
// 	})
// );

// console.log(allCircles.length);

// lime.addEventListener("click", (e) => {
// 	if (e.target.matches(".circle2")) {
// 		console.log(e.target);
// 	}
// });

lime.addEventListener("click", (e) => {
	if (e.target.classList.contains("circle2")) {
		console.log(e.target);
		console.log(":)");
	}
});
