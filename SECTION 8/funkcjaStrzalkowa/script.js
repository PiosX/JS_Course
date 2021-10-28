const arrowFunction = () => {
	// tak wyglada funkcja strzalkowa
};

function test(name) {
	console.log(`Mam na imię ${name}`);
}

test("Peter");

const test2 = (name) => {
	console.log(`Mam na imię ${name}`);
};

test2("Lisa");

const test3 = (name) => console.log(`Mam na imię ${name}`);
test3("John");

const test4 = (name, age) => {
	console.log(name, age);
};
test4("name", 12);

function add(num1, num2) {
	return num1 + num2;
}

const add2 = (num1, num2) => num1 + num2;
//jeśli mamy 1 linijke kodu nie trzeba pisac return i nie trzeba dawac nawiasów klamrowych

const add3 = (num1, num2) => {
	console.log("hello");
	return num1 + num2;
};

const days = ["poniedzialek", "wtorek", "sroda"];

const days2 = days.forEach(function (day) {
	console.log(day);
});

console.log("------");

const days3 = days.forEach((day) => console.log(day));

const days4 = (day4, day5) => {
	console.log(days.push(day4, day5));
};

days4("czwartek", "piatek");
console.log(days);
