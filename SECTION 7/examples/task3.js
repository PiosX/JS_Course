const numbers1 = [1, 5, 13, 26, 48];

const newArr = numbers1.map((number) => number * 5);
console.log(newArr);

for (let i = 0; i < newArr.length; i++) {
	if (newArr[i] % 2 == 0) {
		console.log(`Liczba parzysta: ${newArr[i]}`);
	} else {
		console.log(`Liczba nieparzysta: ${newArr[i]}`);
	}
}

// for(const number of newArr){

// }
