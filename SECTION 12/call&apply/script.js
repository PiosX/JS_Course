const movie = {
	title: "Avengers",
};

function showMovie(price, cinema) {
	console.log(`Film ${this.title}, cena: ${price}, kino: ${cinema}.`);
}

showMovie(30, "SuperKINO");

// Funkcja.call(obiekt, argumenty)
showMovie.call(movie, 35, "SuperKINO2");

// Funkcja.apply(obiekt, tablica)
const movieData = [51, "SuperK2"];

showMovie.apply(movie, movieData);
