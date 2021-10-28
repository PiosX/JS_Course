// deklaracja funkcji

function test() {
	console.log("hi");
}

test();

// wyrażenie funkcyjne

const helloWorld = function () {
	console.log("hello");
};

helloWorld();

// funkcja z argumentami
//parametr(w funkcji) = argument(przy wywołaniu funkcji)
function add(x, y) {
	return x + y;
}

add(5, 3);

function me(name, age) {
	console.log(`Hi, My name is ${name} and i have ${age} years old.`);
}

me("John", 22);
