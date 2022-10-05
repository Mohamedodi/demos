const main = document.getElementById('main');
const main2 = document.querySelector('#main');
const items = main.querySelectorAll('.item');
const items2 = main.querySelectorAll('#main .item');
const ul = main.querySelector('ul');

const demoButton = document.getElementById('demoButton');
const demoButton2 = document.getElementById('demoButton2');

const answer = prompt('Wat is je naam ?');

console.log(answer);

let counter = 0;
function buttonClicked(event){
	console.log(event);
	console.log(`button clicked - ${counter}`);
	event.target.disabled = true;
	counter++;
}

demoButton.addEventListener('click', buttonClicked);
demoButton2.addEventListener('click', buttonClicked);

items.forEach(item=> {
	item.addEventListener('click', ()=> {
		console.log('item clicked');
	});
	item.addEventListener('click', ()=> {
		console.log('item clicked - use capture');
	}, true);
});

ul.addEventListener('click', ()=> {
	console.log('ul clicked');
});
ul.addEventListener('click', ()=> {
	console.log('ul clicked - use capture');
}, true);

main.addEventListener('click', ()=>{
	console.log('main clicked -use capture');
},true);

main.addEventListener('click', ()=>{
	console.log('main clicked - bubble' );
});

// demoButton.addEventListener('click', (event) => {
// 	console.log(event);
// 	console.log(`button clicked with Lambda - ${counter}`);
// 	counter++;
// });

// window.addEventListener('keydown', (event)=>{
// 	console.log(event);
// });

// window.addEventListener('keydown', function(event){
// 	console.log(event);
// });