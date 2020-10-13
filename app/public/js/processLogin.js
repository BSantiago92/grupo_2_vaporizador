// let errors = {};

// let userEmail = document.getElementById('email');
// let password = document.getElementById('password');
// let emailErrorAlert = document.getElementById('email-error-alert');
// let passwordErrorAlert = document.getElementById('password-error-alert');

// function validateEmail(){
//     // Se evitan los espacios por delante y por detras
//     userEmail.value = userEmail.value.trim();

//     let feedback;

//     if (userEmail.value == ""){
//         feedback = "Campo obligatorio";
//     } else if(userEmail.value.length < 2 || userEmail.value.length > 255 ) feedback = "Debe tener entre 2 y 255 caracteres";

//     if (feedback) {
//         userEmail.classList.add("is-danger");
//         emailErrorAlert.innerText = feedback;
//     } else {
//         userEmail.classList.remove("is-danger");
//         emailErrorAlert.innerText = "";
//     }
// }

//   function validatePassword(){
    
//     let feedback;

//     if(password.value == "") {
//         feedback = "Campo obligatório";
//     } else if(password.value.length < 8) {
//         feedback = "Debe tener al menos 8 caracteres";
//     } 

//     if (feedback) {
//         password.classList.add("is-danger");
//         passwordErrorAlert.innerText = feedback;
//     } else {
//         password.classList.remove("is-danger");
//         passwordErrorAlert.innerText = "";
//     }
// }


// userEmail.addEventListener("blur", validateEmail);
// password.addEventListener("blur", validatePassword);

// form.addEventListener("submit", function(event){
//     // Ataja el caso en que se intente enviar el formulario sin haber interactuado con los campos
//     validateEmail();

//     if(Object.keys(errors).length){
//         event.preventDefault();
//     }

// });

window.addEventListener('load', function(){
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    email.addEventListener('blur', function(){
        if (this.value == "" ) {
            console.log('El campo no puede estar vacío');
        }
    })
    password.addEventListener('blur', function(){
        if (this.value == "" ) {
            console.log('El campo no puede estar vacío');
        }
    })
})