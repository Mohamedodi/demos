const persoon =  new Object();
persoon.naam ='Matthias';

console.log(persoon['naam']);

persoon['eersteAuto'] = 'opel';

console.log(persoon.eersteAuto);

const date = new Date();

console.log(date.toLocaleString());

const currentDate = new Date();

const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };

console.log(currentDate.toLocaleDateString('de-DE', options));


console.log(currentDate.toLocaleDateString('ar-EG', options));

console.log(currentDate.toLocaleDateString('en-us', options));


const randomArray = [1,'Demo', new Date(), true, 'true'];

randomArray[100]='test';

randomArray[10000000]='test';
console.log(randomArray);


console.log(randomArray.length);

//push
const demo = [];
demo.push('test');
demo.push('test2');
demo.push('test3');

console.log(demo);

const temp = demo.pop();

console.log('temp: '+temp);
console.log(demo);

demo.unshift('test4');
console.log(demo);

const temp2 = demo.shift();
console.log('temp2: '+temp2);
console.log(demo);

demo[1]='test5';
console.log(demo);

console.table(demo);