const liItems = document.querySelectorAll("li");

let i = 1;
for (const li of liItems) {
	li.textContent = i;
	li.setAttribute("data-ID", i);
	i++;
	if (li.dataset.id == 3) {
		const thirdLi = li.getAttribute("data-ID");
		console.log(li.closest("div.wrapper"));
	}
}

// const thirdLi = document.querySelector('[data-id="3"');
// console.log(thirdLi);
