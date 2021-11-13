//to jest destrukturyzacja obiektu

const person = {
	name: "Lily",
	age: 23,
	job: "DJ",
	car: {
		brand: "Dodge",
		model: "Viper",
	},
};

const showInfo = ({ name, age, job }) => {
	// const { name, age, job } = person;

	// const name = person.name;
	// const age = person.age;
	// const job = person.job;

	console.log(`${name} pracuje jako ${job} i ma ${age} lata.`);
};

showInfo(person);

const showInfo2 = ({ car: { brand, model } }) => {
	console.log(`Jej samochód to ${brand} ${model}.`);
};

showInfo2(person);

const showInfo3 = () => {
	const {
		car: { brand, model },
	} = person;
	console.log(`Jej samochód to ${brand} ${model}.`);
};

showInfo3(person);
