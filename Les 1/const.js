const naam = 'Matthias';
// naam = 'Jef'; // Error dit mag niet!

const fruitsoorten = ['Appel', 'Peer', 'Sla'];
fruitsoorten[2]='Banaan';
fruitsoorten[3]='Druif';

const persoon = new Object();

persoon.naam ='Matthias';
persoon.naam = 'Marcel';
persoon.naam = 8;

persoon.age = '30';
persoon.age = persoon.age+1;

console.log(persoon);
console.log(naam);
console.log(fruitsoorten);