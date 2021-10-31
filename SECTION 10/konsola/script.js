console.log("cześć");
console.log(window.console);

console.warn("warning");
console.error("error123");

console.table(["123", 123]);

const persons = [
	{
		name: "Lisa",
		age: 23,
	},
	{
		name: "Maciej",
		age: undefined,
		fav: null,
	},
];

console.table(persons);
