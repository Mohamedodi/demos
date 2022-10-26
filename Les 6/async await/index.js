const restaurantClosed = true;

async function doSomething( ){
	const output =  await new Promise((resolve, reject)=> {
		setTimeout(()=>resolve('demo'),10000);
	});

	console.log(output);
}

doSomething();

function executeTask(task, time){
	console.log(task);
	const promise = new Promise((resolve, reject)=> {

		if(restaurantClosed){
			reject('restaurant closed');
		} else {

			setTimeout(()=> { resolve();},time);
		}

	});

	return promise;
}


async function orderPizza(size, saus, toppings){

	try{

		await executeTask('bestelling plaatsen', 2000);
		await executeTask(`Maak deeg voor ${size} pizza`, 2000);
		await executeTask(`Smeer ${saus} op pizza`, 1000);
		await executeTask(`beleg pizza met ${toppings.join()}`, 5000);
		await executeTask('Pizza in de oven',10000);
		await executeTask('kies doos',2000);
		await executeTask('bestelling leveren',1000);
			
		console.log('bestelling geleverd');
			
	} catch(e){
		console.log(e);
	}
}


orderPizza('large', 'tomatensaus', ['ham', 'spek', 'mozzerella']);


// Voorbeeld fetch

async function loadPokemon(){
	const response = await fetch('https://pokeapi.co/api/v2/pokemon');

	let json=null;
	if(response.ok){
		json = await response.json();
		console.log(json);
	} else {
		const error = await response.json();
		console.log(error);
	}
}
