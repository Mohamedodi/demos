const addButton = document.getElementById('add-button');
const productElement = document.getElementById('product');
const productsList = document.getElementById('products');

addButton.addEventListener('click', ()=> {
	const product  = productElement.value;
	const element = document.createElement('li');
	element.innerText = product;
	productsList.append(element);
});