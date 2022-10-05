const createElementButton = document.getElementById('createElementButton');
const main = document.querySelector('main');

const ul = document.getElementById('list');
const prependButton  = document.getElementById('prependButton');
const appendButton  = document.getElementById('appendButton');
const removeButton = document.getElementById('removeButton');
const removeAll = document.getElementById('removeAll');
const replaceFirst = document.getElementById('replaceFirst');

let counter = 1;

function createElement() {
	const item = document.createElement('li');
	item.innerText = `item ${counter}`;
	counter++;
	return item;
}


appendButton.addEventListener('click', ()=> {
	const item = createElement();
	ul.append(item);
});

prependButton.addEventListener('click', ()=> {
	const item = createElement();
	ul.prepend(item);
});

createElementButton.addEventListener('click', () => {
	const h1 = document.createElement('h1');

	h1.innerText='Hello World';

	main.append(h1);

});

removeButton.addEventListener('click', ()=> {
	const lastLi = ul.querySelector('li:last-child');
	ul.removeChild(lastLi);
});

removeAll.addEventListener('click', ()=> {
	ul.innerHTML ='';
});

replaceFirst.addEventListener('click', ()=> {
	const firstLi = ul.querySelector('li');
	const newItem = createElement();

	ul.replaceChild(newItem, firstLi);
});