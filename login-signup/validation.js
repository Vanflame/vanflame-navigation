const form = document.getElementById('form')
const firstname_input = document.getElementById('firstname-input')
const email = document.getElementById('email-input')
const password = document.getElementById('password-input')
const repeat_password = document.getElementById('repeat-password-input')
const error_message = document.getElementById('error-message')

form.addEventListener('submit', (e) => {
  let errors = []

  if(firstname_input){
    // If we have a firstname input then we are in the signup
    errors = getSignupFormErrors(firstname_input.value, email.value, password.value, repeat_password.value)
  }
  else{
    // If we don't have a firstname input then we are in the login
    errors = getLoginFormErrors(email.value, password.value)
  }

  if(errors.length > 0){
    // If there are any errors
    e.preventDefault()
    error_message.innerText  = errors.join(". ")
  }
})

function getSignupFormErrors(firstname, email, password, repeatPassword){
  let errors = []

  if(firstname === '' || firstname == null){
    errors.push('Firstname is required')
    firstname_input.parentElement.classList.add('incorrect')
  }
  if(email === '' || email == null){
    errors.push('Email is required')
    email.parentElement.classList.add('incorrect')
  }
  if(password === '' || password == null){
    errors.push('Password is required')
    password.parentElement.classList.add('incorrect')
  }
  if(password.length < 8){
    errors.push('Password must have at least 8 characters')
    password.parentElement.classList.add('incorrect')
  }
  if(password !== repeatPassword){
    errors.push('Password does not match repeated password')
    password.parentElement.classList.add('incorrect')
    repeat_password.parentElement.classList.add('incorrect')
  }


  return errors;
}

function getLoginFormErrors(email, password){
  let errors = []

  if(email === '' || email == null){
    errors.push('Email is required')
    email.parentElement.classList.add('incorrect')
  }
  if(password === '' || password == null){
    errors.push('Password is required')
    password.parentElement.classList.add('incorrect')
  }

  return errors;
}

const allInputs = [firstname_input, email, password, repeat_password].filter(input => input != null)

allInputs.forEach(input => {
  input.addEventListener('input', () => {
    if(input.parentElement.classList.contains('incorrect')){
      input.parentElement.classList.remove('incorrect')
      error_message.innerText = ''
    }
  })
})

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC3HObihU08C4n8whNvxEalbmYxOJiubwQ",
    authDomain: "login-database-6d587.firebaseapp.com",
    databaseURL: "https://login-database-6d587-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "login-database-6d587",
    storageBucket: "login-database-6d587.firebasestorage.app",
    messagingSenderId: "190425522088",
    appId: "1:190425522088:web:ba6985fe4f8cf10f8b879d",
    measurementId: "G-C7JHZMK3BM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


 

  //submit
  const submit = document.getElementById('submit').value;
  submit.addEventListener("click", function(event){
    event.preventDefault()
    alert(1)
  })

 