for(let i = 0; i<10; i++){
	console.log(i);
}

let counter = 10;
while(counter>0){
	console.log(counter);
	counter--;
}

let counter2 = 10;
do{
	console.log(counter2);
	counter2--;
}while(counter2>0);

const fruit = ['apple', 'pear', 'banana'];
fruit[100] = 'kiwi';
fruit.forEach(element => {
	console.log(element);
});

for (const key in fruit) {
	console.log(key);
}

for (const element of fruit) {
	console.log(element);
}

const person = new Object();
person.name = 'Jef';
person.age = 32;

for (const key in person) {
	console.log(key);
	console.log(person[key]);
}

for(let i = 0; i<fruit.length; i++){
	console.log(fruit[i]);
}