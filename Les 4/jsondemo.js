const persoon = { 
	voornaam: 'Matthias',
	achternaam: 'Druwé',
	leeftijd: 32,
	gezinshoofd: true,
	kinderen: [ 
		{ 
			voornaam: 'Piet',
			achternaam: 'Druwé'
		}, {
			voornaam: 'Marieke',
			achternaam: 'Druwé'
		}
	],
	huisdieren: [ 'hond', 'kat'],
	partner: {
		voornaam: 'Janine',
		achternaam: 'Jansens'
	}
};

console.log(persoon);
console.log(JSON.stringify(persoon));
const personString = JSON.stringify(persoon);
console.log(JSON.parse(personString ));

localStorage.setItem('persoon', personString);
localStorage.persoon2 = personString;
