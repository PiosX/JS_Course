const str = "Audi, Mercedes, BMW, Nissan, Dodge";

const newTab1 = str.split(", ");

if (newTab1.length > 3) {
	console.log(`Jest OK`);
} else {
	console.log(`Nie jest OK`);
}

if (newTab1.includes("Audi")) {
	newTab1.push("Tesla");
} else {
	newTab1.pop();
}

console.log(newTab1);
