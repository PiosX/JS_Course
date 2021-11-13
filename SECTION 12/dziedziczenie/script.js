class Animal {
	constructor(name) {
		this.name = name;
	}

	sound() {
		console.log(`Zwierzak robi "hau hau"`);
	}
}

class Dog extends Animal {
	constructor(name, age) {
		super(name);
		this.age = age;
	}
}

class Cat extends Animal {
	constructor(name) {
		super(name);
	}

	sound() {
		console.log("miau");
	}
}

const dog = new Dog("drops", 6);
const cat = new Cat("kot");
cat.sound();
dog.sound();
console.log(cat);
