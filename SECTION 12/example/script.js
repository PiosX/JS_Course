const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const par = document.querySelector("p");

function Dania(nazwa, cena) {
	this.nazwa = nazwa;
	this.cena = cena;
}

const danie1 = new Dania("Schabowy", 29);
const danie2 = new Dania("Pizza", 25);
const danie3 = new Dania("Zupa", 8);

Dania.prototype.showDania = function () {
	console.log(`${this.nazwa} kosztuje ${this.cena}zł.`);
};

// btn1.addEventListener("click", danie1.showDania);
// btn1.addEventListener("click", function () {
// 	console.log(this);
// });
// btn1.addEventListener("click", () => console.log(this));
btn1.addEventListener("click", () => danie1.showDania());
btn2.addEventListener("click", () => danie2.showDania());
btn3.addEventListener("click", () => danie3.showDania());
