const checkAge = (age) => {
	return new Promise((resolve, reject) => {
		if (age >= 18) {
			resolve();
		} else {
			reject("Masz za mało lat!");
		}
	});
};

const doubleCheck = () => {
	return new Promise((resolve) => {
		console.log("Sprawdzam jeszcze raz...");
		setTimeout(() => {
			resolve("Faktycznie, wiek się zgadza.");
		}, 1000);
	});
};

// checkAge(50)
// 	.then(() => {
// 		console.log("Chyba możesz wejść.");
// 		return doubleCheck();
// 	})
// 	.then((res) => console.log(res))
// 	.then(() => {
// 		console.log("Weryfikacja zakończona!");
// 	})
// 	.catch((error) => console.error(error));

async function test() {
	try {
		await checkAge(22);
		console.log("Chyba możesz wejść");
		await doubleCheck();
		console.log("Faktycznie, wiek się zgadza");
		console.log("Weryfikacja zakończona");
	} catch {
		console.error("Błąd, masz za mało lat.");
	}
}
test();

// Async & Await - 2 lekcja

const URL = "https://dog.ceo/api/breeds/image/random";

fetch(URL)
	.then((res) => res.json())
	.then((data) => console.log(data))
	.catch((error) => console.error(error));

async function test2() {
	try {
		const res = await fetch(URL);
		const data = await res.json();
		console.log(data);
	} catch {
		console.error("Błąd");
	}
}

test2();
