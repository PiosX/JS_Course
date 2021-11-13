function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.sayHi = function () {
	console.log(`Cześć, jestem ${this.name}`);
};

Person.prototype.showAge = function () {
	console.log(`Mam ${this.age} lata.`);
};

const person1 = new Person("Majek", 23);
person1.sayHi();
person1.showAge();

// ============================

class Person2 {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	sayHi() {
		console.log(`Cześć, jestem ${this.name}`);
	}

	showAge() {
		console.log(`Mam ${this.age} lata.`);
	}
}

const person2 = new Person2("Ania", 33);
person2.sayHi();
person2.showAge();
