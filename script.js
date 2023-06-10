
const firstName = document.querySelector('.js-firstname')

const lastName = document.querySelector('.js-lastname');

const email = document.querySelector('.js-email');

const password = document.querySelector('.js-password');

const error1 = document.querySelector('.error1');

const error2 = document.querySelector('.error2');

const error3 = document.querySelector('.error3');

const error4 = document.querySelector('.error4');

document.getElementById('Form').addEventListener('submit',function(e){
  if(checkForm() === false){
    e.preventDefault()
    checkForm();
  }else{

  }
   
})



function checkForm () {
    const value1 = firstName.value;

    const value2 = lastName.value;

    const value3 = email.value;

    const value4 = password.value;

    let valid = true;

    if(value1 === ''){
      error1.innerHTML =`<i>First Name cannot be empty</i>`;

      error1.classList.add('warning');
      
      firstName.classList.add('warning-border');

      firstName.classList.add('icon');

      firstName.removeAttribute('placeholder'); 

     valid = false;
    }

   if(value2 === ''){
    

        error2.innerHTML =`<i>Last Name cannot be empty</i>`;

        error2.classList.add('warning');
        
        lastName.classList.add('warning-border')

        lastName.classList.add('icon');

        lastName.removeAttribute('placeholder')

        valid = false;
      } 
  
      if(!value3.includes('@') || !value3.includes('.')){
    
        email.value = 'email@example.com';

        error3.innerHTML =`<i>Looks like this is not an email</i>`;

        error3.classList.add('warning');

        email.classList.add('warning-border');

        email.classList.add('icon');

        email.removeAttribute('placeholder');
       
       valid = false; 
      } 

  
      if(value4 === ''){
        error4.innerHTML =`<i>Password cannot be empty</i>`;

        error4.classList.add('warning');

        password.classList.add('warning-border')

        password.classList.add('icon');

        password.removeAttribute('placeholder')

        valid = false;

      } 
      
      return valid;
}

function removeError(value, value2){
  document.querySelector(value).classList.remove('warning-border');

  document.querySelector(value).classList.remove('icon');

  value2.innerHTML =``;

  if(email.value === 'email@example.com' ){
    email.value = '';
  }
}