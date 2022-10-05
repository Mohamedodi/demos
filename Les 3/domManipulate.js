const introductionDiv = document.getElementById('introduction');
const changeIntroButtonHtml = document.getElementById('changeIntroButtonHtml');
const changeIntroButtonText = document.getElementById('changeIntroButtonText');
const addClassListOfButton = document.getElementById('addClassListOfButton');
const removeClassListOfButton = document.getElementById('removeClassListOfButton'); 
const toggleClassListOfButton = document.getElementById('toggleClassListOfButton');

console.log(introductionDiv.innerText);
console.log(introductionDiv.innerHTML);

changeIntroButtonText.addEventListener('click', ()=>{
	introductionDiv.innerText = '<h2>demo innerHTML</h2>';
});

changeIntroButtonHtml.addEventListener('click', ()=>{
	introductionDiv.innerHTML = '<h2>demo innerHTML</h2>';
});

addClassListOfButton.addEventListener('click', () => {
	console.log(addClassListOfButton.classList);
	addClassListOfButton.classList.add('btn');
	console.log(addClassListOfButton.classList);
});

removeClassListOfButton.addEventListener('click', ()=> {
	console.log(removeClassListOfButton.classList);
	removeClassListOfButton.classList.remove('bg-dark');
	console.log(removeClassListOfButton.classList);
});

toggleClassListOfButton.addEventListener('click', ()=>{
	console.log(toggleClassListOfButton.classList);
	toggleClassListOfButton.classList.toggle('btn-secondary');
	if(toggleClassListOfButton.classList.contains('btn-secondary')){
		console.log('ok');
	} else {
		console.log('not ok');
	}

	console.log(toggleClassListOfButton.classList);
});