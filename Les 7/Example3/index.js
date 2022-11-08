const addButton = document.getElementById('add-button');
const productElement = document.getElementById('product');
const productsList = document.getElementById('products');

const product  = productElement.value;

addButton.addEventListener('click', ()=> {
	const element = document.createElement('li');
	element.innerText = product;
	productsList.append(element);
});