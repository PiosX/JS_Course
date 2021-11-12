// this w listenerach

const btns = document.querySelectorAll("button");

btns.forEach((btn) =>
	btn.addEventListener("click", function (e) {
		console.log(this); // daje undefined przy funkcji strzałkowej
		// console.log(e.target); to to samo co this
	})
);

// this w funkcji strzałkowej

const ob = {
	number: 123,
	showNumber() {
		console.log(this.number);
	},
	showNumber2() {
		// console.log(this.number); // window
		const test = () => {
			console.log(this.number);
		};
		test();
	},
};

ob.showNumber();
ob.showNumber2();
