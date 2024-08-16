const submitBtn = document.getElementById('submitButton');
const nameError=document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

submitBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  if(validateName() && validateEmail() && validatePassword()){
    alert("form submitted successfully")
  }
})

function validateName(){
   let name = document.getElementById('name').value ;
   if(name.length ==0){
    nameError.innerHTML="Name is required";
    nameError.previousElementSibling.classList.add('fa-xmark');
    return false
   }
   if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML="Write full name";
    nameError.previousElementSibling.classList.add('fa-xmark');
    return false;

   }
   nameError.innerHTML="";
   nameError.previousElementSibling.classList.add('fa-check');
   return true;
}
// for mail

function validateEmail(){
  let email = document.getElementById('email').value ;
  if(email.length ==0){
   emailError.innerHTML="Email is required";
   emailError.previousElementSibling.classList.add('fa-xmark');
   return false
  }
  if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
   emailError.innerHTML="Enter valid email";
   emailError.previousElementSibling.classList.add('fa-xmark');
   return false;

  }
  emailError.innerHTML="";
  emailError.previousElementSibling.classList.add('fa-check');
  return true;
}

// for password

function validatePassword(){
  let password = document.getElementById('password').value ;
  if(password.length ==0){
   passwordError.innerHTML="Password is required";
   passwordError.previousElementSibling.classList.add('fa-xmark');
   return false
  }
  if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){
  passwordError.innerHTML="Enter valid password";
   passwordError.previousElementSibling.classList.add('fa-xmark');
   return false;

  }
  passwordError.innerHTML="";
  passwordError.previousElementSibling.classList.add('fa-check');
  return true;
}
