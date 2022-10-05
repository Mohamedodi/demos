const addButton = document.getElementById('add');
const removeButton = document.getElementById('remove');
const helloButton = document.getElementById('hello');
const helloButton2 = document.getElementById('hello2');

function printHelloWorld() {
	console.log('hello world');
}

addButton.addEventListener('click', ()=> {
	helloButton.addEventListener('click', printHelloWorld);
	helloButton2.addEventListener('click', printHelloWorld);
});

removeButton.addEventListener('click', ()=> {
	helloButton.removeEventListener('click', printHelloWorld);
	helloButton2.removeEventListener('click', printHelloWorld);
});