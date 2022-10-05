let loopcounter = 0;
const primes = [];

function isPrime(primeCandidate){
	let isPrime=true;
	primes.forEach(element => {
		if(primeCandidate%element == 0){
			isPrime = false;
			return false;
		}
		loopcounter++;
	});
	
	return isPrime;
}

const index = 100000;
let counter = 2;

do {
	if(isPrime(counter)){
		primes.push(counter);
	}
	counter++;
} while(primes.length < index);

console.log(`${index}th prime number is ${primes.pop()}`);
console.log(loopcounter);