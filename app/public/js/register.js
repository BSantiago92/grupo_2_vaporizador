let errors = {};

const first_name = document.getElementById('first_name');
const last_name = document.getElementById('last_name');
const email = document.getElementById('email');
const password = document.getElementById('password');

let validateFirst_name = function(){
    let feedback = '';
    let feedbackElement = first_name.nextElementSibling;

    if(first_name.value.trim() == '' ){
        feedback = 'El campo nombre no puede estar vacío';
    }

    if(feedback){
        first_name.classList.add('is-danger');
        errors.first_name = feedback;
    }
    else{
        first_name.classList.remove('is-danger');
        //feedbackElement.remove();
        delete errors.first_name;
    }

    feedbackElement.innerText = feedback;
}

let validateLast_name = function(){
    let feedback = '';
    let feedbackElement = last_name.nextElementSibling;

    if(last_name.value.trim() == '' ){
        feedback = 'El campo apellido no puede estar vacío';
    }

    if(feedback){
        last_name.classList.add('is-danger');
        errors.last_name = feedback;
    }
    else{
        last_name.classList.remove('is-danger');
        //feedbackElement.remove();
        delete errors.last_name;
    }

    feedbackElement.innerText = feedback;
}

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
first_name.addEventListener('blur', validateFirst_name);
last_name.addEventListener('blur', validateLast_name);
email.addEventListener('blur', validateEmail);
password.addEventListener('blur', validatePassword);
