const color = ["blue"];

color.unshift("red");
color.push("yellow");

for (let i = 0; i < color.length; i++) {
	console.log(
		`Mój ulubiony kolor to: ${
			color[i].charAt(0).toUpperCase() + color[i].slice(1)
		}`
	);
}

// for (col of color) {
// 	console.log(
// 		`Mój ulubiony kolor to: ${col.charAt(0).toUpperCase() + col.slice(1)}`
// 	);
// }
