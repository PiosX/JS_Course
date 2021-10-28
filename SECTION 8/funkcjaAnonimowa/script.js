const heading = document.querySelector("h1");

function test() {
	console.log("Kliknięto mnie!");
}

heading.addEventListener("click", test);

// heading.addEventListener("click", function () {
// 	console.log("Kliknięto mnie!");
// });
