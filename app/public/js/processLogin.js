
let errors = {};

let form = document.getElementById('form-login');

const email = document.getElementById('email');
const password = document.getElementById('password');


let validateEmail = function(){
    let feedback = '';
    let feedbackElement = email.nextElementSibling;

    if(email.value.trim() == '' ){
        feedback = 'El campo email no puede estar vacío';
    }

    if(feedback){
        email.classList.add('is-danger');
        errors.email = feedback;
    }
    else{
        email.classList.remove('is-danger');
        //feedbackElement.remove();
        delete errors.email;
    }

    feedbackElement.innerText = feedback;
}

let validatePassword = function(){
    let feedback = '';
    let feedbackElement = password.nextElementSibling;

    if(password.value.trim() == '' ){
        feedback = 'El campo contraseña no puede estar vacío';
    }
    else if(password.value.length < 8){
        feedback = 'La contraseña debe tener al menos 8 caracteres';
    }

    if(feedback){
        password.classList.add('is-danger');
        errors.password = feedback;
    }
    else{
        password.classList.remove('is-danger');
        //feedbackElement.remove();
        delete errors.password;
    }

    feedbackElement.innerText = feedback;
    }

email.addEventListener('blur', validateEmail);
password.addEventListener('blur', validatePassword);

form.addEventListener('submit', function(event){
    validateEmail();
    validatePassword();
    if(Object.keys(errors).length){
        event.preventDefault();
    }
})