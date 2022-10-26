const queryparams = new URLSearchParams(window.location.search);
const baseUrl = 'https://goudvis.xn--druw-epa.be/reservations/';
const nameElement = document.getElementById('name');
const datetimeElement = document.getElementById('datetime');
const emailElement = document.getElementById('email');
const telephoneElement = document.getElementById('telephone');

fetch(baseUrl + `getReservation.php?code=${queryparams.get('id')}`)
	.then((response)=> {
		if(response.ok){
			return response.json();
		} else {
			throw new Error(response.statusText);
		}
	}).then((json)=>{
		console.log(json);
		nameElement.innerText = `${json.firstname} ${json.lastname}`;
		datetimeElement.innerText = new Date(json.datetime).toLocaleString();
		emailElement.innerText = json.email;
		telephoneElement.innerText = json.telephone;
	}).catch((e)=>
		alert(e));