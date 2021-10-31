const link = document.querySelector("a");
const img = document.querySelector("img");
const p = document.querySelector("p");

link.setAttribute("href", "#");
link.setAttribute("target", "_blank");
// dodaje / ustawia nowy atrybut i przypisuje do niego wartość

console.log(img.getAttribute("src"));
// pobiera wartosc, ktora jest przypisana do danego atrybutu

console.log(p.hasAttribute("style"));
// sprawdza, czy mamy jakiśatrybut

p.removeAttribute("style");
// usuwa wskazany atrybut z DOM
