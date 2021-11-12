const name = 123;

const user = {
	name: "Peter",
	getName() {
		console.log(this.name);
	},
};

user.getName();
