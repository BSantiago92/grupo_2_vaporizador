let errors = {};

const name = document.getElementById('name');
const brand = document.getElementById('brand');
const model_1 = document.getElementById('model_1');
const model_2 = document.getElementById('model_2');
const model_3 = document.getElementById('model_3');
const img = document.getElementById('img');
const description = document.getElementById('description');
const price = document.getElementById('price');

let validateName = function(){
    let feedback = '';
    let feedbackElement = name.nextElementSibling;

    if(name.value.trim() == '' ){
        feedback = 'Debe ingresar el nombre del producto';
    }

    if(feedback){
        name.classList.add('is-danger');
        errors.name = feedback;
    }
    else{
        name.classList.remove('is-danger');
        delete errors.name;
    }

    feedbackElement.innerText = feedback;
}

let validateBrand = function(){
    let feedback = '';
    let feedbackElement = brand.nextElementSibling;

    if(brand.value.trim() == '' ){
        feedback = 'Debe ingresar la marca del producto';
    }

    if(feedback){
        brand.classList.add('is-danger');
        errors.brand = feedback;
    }
    else{
        brand.classList.remove('is-danger');
        //feedbackElement.remove();
        delete errors.brand;
    }

    feedbackElement.innerText = feedback;
}

let validateModel_1 = function(){
    let feedback = '';
    let feedbackElement = model_1.nextElementSibling;

    if(model_1.value.trim() == '' ){
        feedback = 'Debe ingresar el modelo del producto';
    }

    if(feedback){
        model_1.classList.add('is-danger');
        errors.model_1 = feedback;
    }
    else{
        model_1.classList.remove('is-danger');
        //feedbackElement.remove();
        delete errors.model_1;
    }

    feedbackElement.innerText = feedback;
}

let validateModel_2 = function(){
    let feedback = '';
    let feedbackElement = model_2.nextElementSibling;

    if(model_2.value.trim() == '' ){
        feedback = 'Debe ingresar el modelo del producto';
    }

    if(feedback){
        model_2.classList.add('is-danger');
        errors.model_2 = feedback;
    }
    else{
        model_2.classList.remove('is-danger');
        //feedbackElement.remove();
        delete errors.model_2;
    }

    feedbackElement.innerText = feedback;
}

let validateModel_3 = function(){
    let feedback = '';
    let feedbackElement = model_3.nextElementSibling;

    if(model_3.value.trim() == '' ){
        feedback = 'Debe ingresar el modelo del producto';
    }

    if(feedback){
        model_3.classList.add('is-danger');
        errors.model_3 = feedback;
    }
    else{
        model_3.classList.remove('is-danger');
        //feedbackElement.remove();
        delete errors.model_3;
    }

    feedbackElement.innerText = feedback;
}

let validateDescription = function(){
    let feedback = '';
    let feedbackElement = description.nextElementSibling;

    if(description.value.trim() == '' ){
        feedback = 'Debe ingresar una descripcion para el producto';
    }

    if(feedback){
        description.classList.add('is-danger');
        errors.description = feedback;
    }
    else{
        description.classList.remove('is-danger');
        //feedbackElement.remove();
        delete errors.description;
    }

    feedbackElement.innerText = feedback;
}

let validatePrice = function(){
    let feedback = '';
    let feedbackElement = price.nextElementSibling;

    if(price.value.trim() == '' ){
        feedback = 'Debe ingresar el precio del producto';
    }

    if(feedback){
        price.classList.add('is-danger');
        errors.price = feedback;
    }
    else{
        price.classList.remove('is-danger');
        //feedbackElement.remove();
        delete errors.price;
    }

    feedbackElement.innerText = feedback;
}

name.addEventListener('blur', validateName);
brand.addEventListener('blur', validateBrand);
model_1.addEventListener('blur', validateModel_1);
model_2.addEventListener('blur', validateModel_2);
model_3.addEventListener('blur', validateModel_3);
description.addEventListener('blur', validateDescription);
price.addEventListener('blur', validatePrice);