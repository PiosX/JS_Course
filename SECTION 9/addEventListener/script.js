// const btn1 = document.querySelector(".btn-1");
// const btn2 = document.querySelector(".btn-2");
// const btn3 = document.querySelector(".btn-3");

// btn1.addEventListener("click", function () {
// 	console.log("Kliknięto mnie!");
// });

// btn2.addEventListener("mouseover", () => {
// 	console.log("najechano na mnie");
// });

// const test = () => {
// 	console.log("double click");
// };

// btn3.addEventListener("dblclick", test);

// btn1.addEventListener("click", test);

//listenery zawsze na samym dole kodu

const btns = document.querySelectorAll("button");
console.log(btns);

const smile = () => {
	console.log(":)");
};

btns.forEach((btn) => addEventListener("click", smile));
