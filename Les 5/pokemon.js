const base_url = 'https://pokeapi.co/api/v2/pokemon';
const pokemonListElement = document.getElementById('pokemon-list');
let prevURL = null;
let nextUrl = null;
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');


function printPokemon(pokemon){
	const li = document.createElement('div');
	li.innerHTML = `<h1>${pokemon.name}</h1><img src = ${pokemon.sprites.front_default}> `;
	pokemonListElement.append(li);
}

function loadPokemon(url){
	pokemonListElement.innerHTML = '';
	fetch(url).then((response)=> {
		if(response.ok){
			return response.json();
		}
		else{
			throw Error(response.statusText);
		}
	}).then((json)=> {
		printPokemon(json);
	})
		.catch((e)=> console.error(e)); 
}


function printAllPokemon(data){
	prevURL  = data.previous;
	nextUrl  =data.next;

	data.results.forEach(element => {

		loadPokemon(element.url);
		
	});
}

function loadPokemons(base_url)
{
	fetch(base_url).then((response)=> {
		if(response.ok){
			return response.json();
		} else {
			throw Error(response.statusText);
		}
	}).then((data)=>printAllPokemon(data))
		.catch((e)=> {
			console.error(e);
		});
}

loadPokemons(base_url);

prevButton.addEventListener('click', (e)=> {
	e.preventDefault();
	if(prevURL!=null){
		loadPokemons(prevURL);
	}
});

nextButton.addEventListener('click', (e)=> {
	e.preventDefault();
	if(nextUrl!=null){
		loadPokemons(nextUrl);
	}
});