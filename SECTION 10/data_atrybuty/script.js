const divTag = document.querySelector('[data-number="23"');
console.log(divTag.dataset.number);
console.log(divTag.dataset.moreInfo);

divTag.setAttribute("data-test", "123");
console.log(divTag.dataset);
