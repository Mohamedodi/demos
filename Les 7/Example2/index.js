const ul = document.getElementById('items');
const liItems = document.querySelectorAll('li');

const items = ['eerste item', 'tweede item', 'derde item'];



for (let index = 0; index < items.length; index++) {
	const element = items[index];
	const li = document.createElement('li');
	li.classList.add('li');
	li.innerText = element;
	ul.append(li);
}

liItems.forEach((element)=> {
	element.addEventListener('click', ()=> {
		element.remove();
	});
});
