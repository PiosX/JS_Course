let celsius, temp;

const fahrenheit = (x) => {
	celsius = x;

	temp = celsius * 1.8 + 32;

	return console.log(`${celsius}°C = ${temp}°F`);
};

fahrenheit(20);
