const baseUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
const city = 'brussel';
const query = '?unitGroup=metric&key=L9P6SMMTEJ46TC9EBMF22NDJ6&contentType=json';
const button = document.getElementById('weatherbtn');
const inputCity = document.getElementById('input-city');

function fillNextDays(data){
	const forecastElement = document.getElementById('forecast');
	forecastElement.innerHTML = '';
	for (let index = 0; index < 5; index++) {
		const forecast = data.days[index+1];
		const div = document.createElement('div');
		div.classList.add('col');
		div.classList.add('d-flex', 'flex-column', 'justify-content-between');
		div.innerHTML = `<img src="img/${forecast.icon}.svg">
    <div>
    <p>${forecast.datetime}</p>
    <p>${forecast.temp} &deg;C</p>
    <p>${forecast.tempmin}&deg;/${forecast.tempmax}&deg;</p> </div>`; 
		forecastElement.append(div);
	}
}

function fillWidget(data){
	const city = document.getElementById('city');
	const time = document.getElementById('time');
	const temp = document.getElementById('temp');
	const feelsLikeTemp = document.getElementById('feels-like-temp');
	const image = document.getElementById('image');

	city.innerText  = data.resolvedAddress;
	time.innerText = data.currentConditions.datetime;
	temp.innerText = data.currentConditions.temp;
	feelsLikeTemp.innerText = data.currentConditions.feelslike;
	image.setAttribute('src', `img/${data.currentConditions.icon}.svg` );

	fillNextDays(data);
}

function loadWeather(city){
	localStorage.city = city;
	fetch(baseUrl+city+query).then((response)=> {
		if(response.ok){
			return response.json();
		}
  
		throw Error(response.statusText);
	}).then((json)=> {
		fillWidget(json);
	}).catch(e=> console.log(e));
}



button.addEventListener('click', (e)=> {
	e.preventDefault();
	loadWeather(inputCity.value);
});

if(localStorage.city!=null){
	loadWeather(localStorage.city);
} else {
	loadWeather('brussel');
}