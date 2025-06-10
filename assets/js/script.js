let nameError=document.getElementById('name-error');
let emailError=document.getElementById('email-error');
let phoneError=document.getElementById('phone-error');
let submitError=document.getElementById('submit-error');

function validateName(){
    let name=document.getElementById('name-field').value;
    if(name.length===0){
        nameError.innerHTML='Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z\s]+$/)) {
        nameError.innerHTML='write full name';
        return false;
    }
    nameError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    let email=document.getElementById('email-field').value;
    if (email.length===0) {
        emailError.innerHTML='email-id is required';
        
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)) {
        emailError.innerHTML='Invalid Email-id';
        return false;
    }
    emailError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
    return true;
}
 function validatePhone() {
    let phone=document.getElementById('contact-phone').value;
    if (phone.length===0) {
        phoneError.innerHTML='Phone No. required';

        
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML='Phone number is reuired'
        return false;
    }
    phoneError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
    return true;
    
 }
 
function validateForm(){
    if (!validateName() ||!validateEmail() ||!validatePhone() ) {
        submitError.style.display='block';

        submitError.innerHTML='Please fix error to submit';
        setTimeout(function(){submitError.style.display='none';},3000);
        return false;

    }
}