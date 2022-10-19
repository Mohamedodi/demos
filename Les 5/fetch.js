const base_url = 'https://api.chucknorris.io/jokes/random';

fetch(base_url)
	.then((response)=> {
		console.log(response);

		if(response.ok){
			return response.json();
		} else if(response.status == 404) {
			throw Error('bad request');
		}
	}).then((json)=>{
		console.log(json);
		console.log(json.value);

		document.getElementById('joke').innerText = json.value;
	}).catch((message)=> {
		console.error(message);
	});