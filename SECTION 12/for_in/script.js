const user = {
	name: "KLaudia",
	age: 23,
	sex: "female",
	"hair-color": "blonde",
};

for (const data in user) {
	console.log(data + ": " + user[data]);
}
