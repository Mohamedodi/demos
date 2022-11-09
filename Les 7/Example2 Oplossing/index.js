const ul = document.getElementById('items');

const items = ['eerste item', 'tweede item', 'derde item'];



for (let index = 0; index < items.length; index++) {
	const element = items[index];
	const li = document.createElement('li');
	li.classList.add('item');
	li.innerText = element;
	ul.append(li);
}

const liItems = document.querySelectorAll('li');

liItems.forEach((element)=> {
	element.addEventListener('click', ()=> {
		element.remove();
	});
});

