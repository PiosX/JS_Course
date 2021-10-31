const img = document.querySelector("img");

img.setAttribute("src", "cat.jpg");
img.setAttribute("alt", "cat");

const func = () => {
	console.log("napis");
};

setTimeout(func, 2000);
