// Cześć IMIE, jak się masz?

const hello = (name = "drogi użytkowniku") => {
	console.log(`Cześć ${name}, jak się masz?`);
};

hello();
hello("John");

const add = (x = 5, y = 10) => {
	console.log(x + y);
};

add();
