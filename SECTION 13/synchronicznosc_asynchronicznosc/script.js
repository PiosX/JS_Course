const btn = document.querySelector("button");

btn.addEventListener("click", () => {
	console.log("wykonuję się pierwszy!");
	const p = document.createElement("p");
	alert("stworzyłem paragraf!");
	p.textContent = "test";
	document.body.append(p);
	console.log("koniec");
});

console.log(1);
setTimeout(() => {
	console.log(2);
}, 800);
console.log(3);
