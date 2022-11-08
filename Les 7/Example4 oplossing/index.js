const addButton = document.getElementById('add-button');
const productElement = document.getElementById('product');
const productsList = document.getElementById('products');
const changeQuantityItems = document.getElementsByClassName('changequantity');
const removeItemsButtons = document.getElementsByClassName('remove');
const shoppingCartItems = [];

function removeItems(){
	for (let i = 0; i < removeItemsButtons.length; i++) {
		const element = removeItemsButtons[i];
		element.addEventListener('click', e=> {
			e.preventDefault();
			element.parentNode.remove();
			shoppingCartItems.splice(i,1);
			// eslint-disable-next-line no-use-before-define
			renderItems();
		});
	}
}

function changeQuantitiesEvent(){

	for (let index = 0; index < changeQuantityItems.length; index++) {
		
		changeQuantityItems[index].addEventListener('change', ()=>{
			shoppingCartItems[index].quantity +=1;
		});
		
	}

}

function renderItems(){
	productsList.innerHTML = '';
	shoppingCartItems.forEach(item => {
		const liElement = `<li class="item">${item.name} <input type="number" class="changequantity" value=${item.quantity}> <a class="remove" href=""s>x</a> </li>`;
		productsList.innerHTML += liElement;
	});
	changeQuantitiesEvent();
	removeItems();

}

addButton.addEventListener('click', ()=> {
	shoppingCartItems.push({name: productElement.value, quantity:1});

	renderItems();
});