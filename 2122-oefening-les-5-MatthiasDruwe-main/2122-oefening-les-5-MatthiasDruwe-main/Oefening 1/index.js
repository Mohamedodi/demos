const outputP = document.getElementById('output');
const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');

const inputForm = document.getElementById('input');

const baseUrl = 'https://odiseenodetest.azurewebsites.net/';


fetch(baseUrl).then(response=> {
	console.log(response);

	if(response.ok){
		return response.json();
	}
	throw Error('Something went wrong');
}).then(json=> {
	outputP.innerText = JSON.stringify(json);
}).catch(e=> alert(e));


inputForm.addEventListener('submit', (e)=> {
	e.preventDefault();
	const body = {name: nameInput.value, message: messageInput.value};

	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(body)
	};

	fetch(baseUrl,options).then(response => {
		console.log(response);
		if(response.ok){
			return response.json();
		} 
		throw Error('Post failed');
	}).then (json => {
		outputP.innerText = JSON.stringify(json);
	}).catch(e=> alert(e));

});