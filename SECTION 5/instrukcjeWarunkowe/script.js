const x = 100;

if (x > 20) {
	console.log(`${x} > 20`);
} else {
	console.log(`${x} < 20`);
}

// wartosc ? TRUE: FALSE

const newX = x > 20 ? `${x} > 20` : `${x} < 20`;

console.log(newX);

const isLoggedIn = true;

function loggedIn() {
	console.log("Uzytkownik jest zalogowany.");
}

function loggedOut() {
	console.log("Użytkownik nie jest zalogowany.");
}

isLoggedIn ? loggedIn() : loggedOut();
