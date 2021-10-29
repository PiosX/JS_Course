const btn = document.querySelector("button");

// console.log(btn.outerHTML);
// btn.outerHTML = "123";

// btn.innerHTML = "<li>123</li>";
// document.body.innerHTML = "";

// console.log(btn.innerText);
// console.log(btn.textContent);

// btn.textContent = "<li>123</li>";
// btn.innerText = "<li>123</li>";

const innerT = document.querySelector(".inner-text");
const textC = document.querySelector(".text-content");
console.log(innerT.innerText);
console.log(textC.textContent);

// textContent ignoruje wszystkie style, renderuje wszystko jako zwykly tekst, lepiej go uzywac w sumie

//innerHTML jest niebezpieczny bo uzytkownik moze wprowadzic jakis kod
