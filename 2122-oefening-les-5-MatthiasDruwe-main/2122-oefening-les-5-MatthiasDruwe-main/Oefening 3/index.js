const startDateElement = document.getElementById('start-date');
const endDateElement = document.getElementById('end-date');
const datesElement = document.getElementById('dates');
const hoursElement = document.getElementById('hours');
const firstnameElement = document.getElementById('firstname');
const lastnameElement = document.getElementById('lastname');
const emailElement = document.getElementById('email');
const telephoneElement = document.getElementById('telephone');
const form = document.getElementById('reservation-form');
const baseUrl = 'https://goudvis.xn--druw-epa.be/reservations/';

let allDates = [];


function formatDateTime(dateObject){
	const date = dateObject.getDate()
		.toString()
		.padStart(2, '0');

	const month = (dateObject.getMonth()+1)
		.toString()
		.padStart(2, '0');

	const year = dateObject.getFullYear();
	const hour = dateObject.getHours().toString().padStart(2,'0');
	const minute = dateObject.getMinutes().toString().padStart(2,'0');
	return `${year}-${month}-${date} ${hour}:${minute}`;
}

function formatDate(dateObject){
	const date = dateObject.getDate()
		.toString()
		.padStart(2, '0');

	const month = (dateObject.getMonth()+1)
		.toString()
		.padStart(2, '0');

	const year = dateObject.getFullYear();
	return `${year}-${month}-${date}`;
}

function printDates(json){
	const dates = new Set(json.map(element => new Date(element.date).toLocaleDateString()));
	console.log(dates);
	dates.forEach(datestring=> {
		const option = document.createElement('option');
		option.value = datestring;
		option.innerText=datestring;
		datesElement.append(option);
	});
}

function loadAvailableDates(){
	if(startDateElement.value && endDateElement.value){
		fetch(baseUrl+ `getAvailableTimeSlots.php?fromDate=${startDateElement.value}&toDate=${endDateElement.value}`)
			.then((response)=> {
				if(response.ok){
					return response.json();
				}
			})
			.then(json => {
				allDates = json;
				printDates(json);
			});
	}
}


startDateElement.setAttribute('min', formatDate(new Date()));
endDateElement.setAttribute('min', formatDate(new Date()));

startDateElement.addEventListener('input', ()=> {
	endDateElement.setAttribute('min', startDateElement.value);
	loadAvailableDates();
});

endDateElement.addEventListener('input', ()=> {
	startDateElement.setAttribute('max', endDateElement.value);
	loadAvailableDates();
});

datesElement.addEventListener('input', ()=> {
	const selectedDate = new Date(datesElement.value);

	const hours = allDates.map(element => new Date(element.date))
		.filter(date => date.toDateString() == selectedDate.toDateString());

	hoursElement.innerHTML=''; 
	hours.forEach((hour)=> {
		const option = document.createElement('option');
		option.value = hour;
		option.innerText=hour.toLocaleTimeString();
		hoursElement.append(option);
	});
});


async function sendForm(){
	const headers = new Headers();
	headers.append('content-type', 'application/json');
	const body = {
		firstname:firstnameElement.value, 
		lastname:lastnameElement.value, 
		datetime: formatDateTime(new Date(hoursElement.value)), 
		telephone:telephoneElement.value,
		email:emailElement.value
	};
	const options={ 
		method: 'POST',
		headers: headers, 
		body: JSON.stringify(body)
	};

	const response =  await fetch(baseUrl+'insert.php', options);
	if(response.ok){	
		const json  = await response.json();

		window.location.assign(`reservation.html?id=${json.code}`);
	}
	else if( response.status == 409) {
		const text = await response.text();
		alert(tex);
	}

}

form.addEventListener('submit', (e)=> {
	e.preventDefault();
	
	if(hoursElement.value &&  firstnameElement.value && lastnameElement.value && emailElement.value && telephoneElement.value){
		sendForm();
	}
});