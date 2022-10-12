const personString = localStorage.getItem('persoon');

console.log(personString);

const persoon = JSON.parse(personString);
const persoon2 = JSON.parse(localStorage.persoon2);

// const voornaam = persoon.voornaam;
// const achternaam =persoon.achternaam;
// const leeftijd = persoon.leeftijd;
const numbers = [1,2,3,4,5,6,7,8];
// const {voornaam, achternaam, leeftijd, huisdieren:[a,b]} = persoon;

// const [x,y,z] = numbers;

// document.querySelector('body').innerHTML = `<h1>Hello ${fir} & ${b}</h1>`;
const point = [100,250];

function drawPoint(x, y){
	console.log(x);
	console.log(y);
}

const newPoints = [...point];

drawPoint(...point);
drawPoint(point[0], point[1]);

console.log(newPoints);

function top3(firstItem, secondItem,...items){
	console.log(firstItem);
	console.log(secondItem);
	console.log(items);
}

top3();
top3('demo');
top3('demo', 'demo2');
top3('demo', 'demo2','demo', 'demo2','demo', 'demo2','demo', 'demo2','demo', 'demo2');


const {voornaam, achternaam, leeftijd, huisdieren:[a,b], ...rest} = persoon;

console.log(rest);