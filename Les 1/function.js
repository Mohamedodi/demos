function helloWorld(){
	console.log('hello world');
}

function hello(person){
	console.log(`hello ${person}`);
}

function calculateSquare(x){
	return x*x;
}

helloWorld();
hello('Gijs');
hello(42);
hello(true);

console.log(calculateSquare(2));