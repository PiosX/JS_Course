const x3 = 50;
let text;

if (x3 >= 100) {
	text = `X > 100`;
} else if (x3 < 100 && x3 > 30) {
	text = "X jest średniakiem.";
} else if (x3 <= 30) {
	text = `X jest mały.`;
}

console.log(text.toUpperCase());
