const search = window.location.search;
console.log(search);
const params = new URLSearchParams(search);
console.log(params);

console.log(params.get('username') );

console.log(params.get('password') );

console.log(params.get('email') );

console.log(params.get('radio') );
console.log(params.get('select') );