let errors = {};

const quantity = document.getElementById('quantity');

let validateQuantity = function(){
    let feedback = '';
    let feedbackElement = quantity.nextElementSibling;

    if(quantity.value.trim() <= 0 ){
        feedback = 'Debe adquirir al menos 1 producto';
    }

    if(feedback){
        quantity.classList.add('is-danger');
        errors.quantity = feedback;
    }
    else{
        quantity.classList.remove('is-danger');
        delete errors.quantity;
    }

    feedbackElement.innerText = feedback;
}

quantity.addEventListener('mouseout', validateQuantity);