function User(name, age) {
	this.name = name;
	this.age = age;
}

const newUser = new User("Klaudia", 23);
const newUser2 = new User("Lily", 34);
const newUser3 = new User("Peter", 45);

console.log(newUser, newUser2, newUser3);

// LEKCJA PROTOTYPÓW

User.prototype.hello = function () {
	console.log(`Cześć ${this.name}`);
};

User.prototype.country = "Polska";

newUser.hello();
console.log(newUser2.country);
