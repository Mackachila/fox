/**
 * 
 */

function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}


const sadmnumber = document.getElementById('sadmnumber');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	validateInputs();
});

const setError = (element, message) => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('.error');
	errorDisplay.innerText = message;
	inputControl.classList.add('error');
	inputControl.classList.remove('success')
	
}
const setSuccess = element => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('.error');
	errorDisplay.innerText = "";
	inputControl.classList.add('success');
	inputControl.classList.remove('error');
	
}

const validateInputs = () => {


const sadmnumberValue = sadmnumber.value.trim();

const passwordValue = password.value.trim();


if(sadmnumberValue === ''){
	setError(sadmnumber, 'This field is required');
}
else{
	setSuccess(sadmnumber);
}

if(passwordValue === ''){
	setError(password, 'Password is required');
}
else if(passwordValue.length <6){
	setError(password, 'Password must be at least 6 characters');
}
else{
	setSuccess(password);
}
};
