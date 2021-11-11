let todoInput; //miejsce, gdzie uzytkownik wpisuje tresc zadania
let errorInfo; // info o braku zadań / konieczności wpisania tekstu
let addBtn; //przycisk Add - dodaje nowe elementy do listy
let ulList; // lista zadan, tagi UL
let newTodo; // nowo dodany LI, nowe zadanie

let popup; // popup
let popupInfo; // tekst w popupie, jak sie dada pusty tekst
let todoToEdit; // edytowany Todo
let popupInput; // input w popupie
let popupAddBtn; // przycisk 'zatwierdź' w popupie
let popupCloseBtn; // przycisk 'anuluj' w popupie

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	//pobieramy wszystkie elementy
	todoInput = document.querySelector(".todo-input");
	errorInfo = document.querySelector(".error-info");
	addBtn = document.querySelector(".btn-add");
	ulList = document.querySelector(".todolist ul");

	popup = document.querySelector(".popup");
	popupInfo = document.querySelector(".popup-info");
	popupInput = document.querySelector(".popup-input");
	popupAddBtn = document.querySelector(".accept");
	popupCloseBtn = document.querySelector(".cancel");
};

const prepareDOMEvents = () => {
	// nadajemy nasłuchiwanie
	addBtn.addEventListener("click", addNewTodo);
	ulList.addEventListener("click", checkClick);
	popupCloseBtn.addEventListener("click", closePopup);
	popupAddBtn.addEventListener("click", changeTodoText);
	todoInput.addEventListener("keyup", enterKeyCheck);
};

const addNewTodo = () => {
	if (todoInput.value !== "") {
		newTodo = document.createElement("li");
		newTodo.textContent = todoInput.value;
		ulList.appendChild(newTodo);
		createToolsArea();

		todoInput.value = "";
		errorInfo.textContent = "";
	} else {
		errorInfo.textContent = "Wpisz treść zadania!";
	}
};

const createToolsArea = () => {
	const toolsPanel = document.createElement("div");
	const compBtn = document.createElement("button");
	const editBtn = document.createElement("button");
	const delBtn = document.createElement("button");

	compBtn.classList.add("complete");
	toolsPanel.classList.add("tools");
	editBtn.classList.add("edit");
	delBtn.classList.add("delete");

	compBtn.innerHTML = '<i class="fas fa-check"></i>';
	delBtn.innerHTML = '<i class="fas fa-times"></i>';

	editBtn.textContent = "EDIT";

	newTodo.appendChild(toolsPanel);
	toolsPanel.append(compBtn, editBtn, delBtn);
};

const checkClick = (e) => {
	if (e.target.matches(".complete")) {
		e.target.closest("li").classList.toggle("completed");
		e.target.classList.toggle("completed");
	} else if (e.target.matches(".edit")) {
		editTodo(e);
	} else if (e.target.matches(".delete")) {
		deleteTodo(e);
	}
};

const editTodo = (e) => {
	todoToEdit = e.target.closest("li");
	popupInput.value = todoToEdit.firstChild.textContent;
	popup.style.display = "flex";
};

const closePopup = () => {
	popup.style.display = "none";
	popupInfo.textContent = "";
};

const changeTodoText = () => {
	if (popupInput.value !== "") {
		todoToEdit.firstChild.textContent = popupInput.value;
		popup.style.display = "none";
		popupInfo.textContent = "";
	} else {
		popupInfo.textContent = "Musisz podać jakąś treść";
	}
};

const deleteTodo = (e) => {
	e.target.closest("li").remove();

	const allTodos = ulList.querySelectorAll("li");

	if (allTodos.length === 0) {
		errorInfo.textContent = "Brak zadań na liście.";
	}
};

const enterKeyCheck = (e) => {
	if (e.key === "Enter") {
		addNewTodo();
	}
};

document.addEventListener("DOMContentLoaded", main);
