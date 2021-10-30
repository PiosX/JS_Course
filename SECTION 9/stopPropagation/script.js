const blue = document.querySelector(".blue");
const gold = document.querySelector(".yellow");

const infoBlue = () => {
	console.log(
		"%cten kod nie miał sięteraz wykonać",
		"color:royalblue; text-transform: uppercase"
	);
};

const infoGold = (e) => {
	e.stopPropagation();
	console.log(
		"%cwykonuję jakiś kod",
		"color:gold; text-transform: uppercase"
	);
};

blue.addEventListener("click", infoBlue);
gold.addEventListener("click", infoGold);
