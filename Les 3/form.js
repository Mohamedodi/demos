const forms = document.forms;
const loginForm = forms.loginform;
const usernameInput = loginForm.username;
const passwordInput = loginForm.password;
const emailInput = loginForm.email;
console.log(usernameInput);
console.log(passwordInput);

loginForm.addEventListener('submit', (event) => {
	
	// event.preventDefault();
	event.stopPropagation();
  
	document.getElementById('errors').innerHTML = '';
	if(!passwordInput.validity.valid){
		const li = document.createElement('li');
		li.innerText='password is invalid';
		document.getElementById('errors').append(li);
	}

	if(emailInput.validity.patternMismatch){
		emailInput.setCustomValidity('Het email adres moet een odisee studenten adres zijn');
		emailInput.reportValidity();
	} else {
		emailInput.setCustomValidity('');
	}
	
});

document.addEventListener('click', ()=>{
	console.log('document clicked');
});