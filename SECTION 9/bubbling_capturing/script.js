const lime = document.querySelector(".lime");
const blue = document.querySelector(".blue");
const gold = document.querySelector(".yellow");

const infoLime = () => {
	console.log("%clime", "color:lime; text-transform: uppercase");
};

const infoBlue = () => {
	console.log("%cblue", "color:royalblue; text-transform: uppercase");
};

const infoGold = () => {
	console.log("%cgold", "color:gold; text-transform: uppercase");
};

lime.addEventListener("click", infoLime, { capture: true });
blue.addEventListener("click", infoBlue, { capture: true });
gold.addEventListener("click", infoGold, { capture: true });

//faza przechwytywania - nie robi fazy babelkowania, od najstarszego do najmlodszego
//faza babelkowania - od najmlodszego do najstarszego
