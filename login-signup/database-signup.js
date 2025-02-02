// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3HObihU08C4n8whNvxEalbmYxOJiubwQ",
  authDomain: "login-database-6d587.firebaseapp.com",
  databaseURL: "https://login-database-6d587-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "login-database-6d587",
  storageBucket: "login-database-6d587.appspot.com",
  messagingSenderId: "190425522088",
  appId: "1:190425522088:web:ba6985fe4f8cf10f8b879d",
  measurementId: "G-C7JHZMK3BM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Get input elements
const firstname_input = document.getElementById('firstname-input');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const repeat_password_input = document.getElementById('repeat-password-input');
const error_message = document.getElementById('error-message'); // Ensure this element exists
const submit = document.getElementById('submit');

submit.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve input values inside the event listener
  const email = email_input.value;
  const password = password_input.value;
  const name = firstname_input.value; // Get the value here
  const repeat_password = repeat_password_input.value;

  let errors = [];

  // Validate inputs
  errors = getSignupFormErrors(name, email, password, repeat_password);

  if (errors.length > 0) {
    // If there are any errors
    error_message.innerText = errors.join(". ");
  } else {
    // If there are no errors
    console.log("Creating user..."); // Debugging line
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userId = user.uid; // Get the user's unique ID
        const timestamp = Date.now();
        const date = new Date(timestamp);
        const formattedDate = date.toLocaleString();

        window.location.href = "/vanflame-navigation/logged-in/index.html"
        writeUserData(userId, name, email, formattedDate);
        alert('Success! User created.');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode);
        alert(errorMessage);
      });
  }
});

function writeUserData(userId, name, email, formattedDate) {
  set(ref(database, 'users/' + userId), {
    name: name,
    email: email,
    timestamp: formattedDate
  })
  .then(() => {
    console.log('Data written successfully');
  })
  .catch((error) => {
    console.error(error);
  });
}

function getSignupFormErrors(firstname, email, password, repeatPassword) {
  let errors = [];

  if (!firstname) {
    errors.push('Firstname is required');
    firstname_input.parentElement.classList.add('incorrect');
  }
  if (!email) {
    errors.push('Email is required');
    email_input.parentElement.classList.add('incorrect');
  }
  if (!password) {
    errors.push('Password is required');
    password_input.parentElement.classList.add('incorrect');
  }
  if (password.length < 8) {
    errors.push('Password must have at least 8 characters');
    password_input.parentElement.classList.add('incorrect');
  }
  if (password !== repeatPassword) {
    errors.push('Password does not match repeated password');
    password_input.parentElement.classList.add('incorrect');
    repeat_password_input.parentElement.classList.add('incorrect');
  }

  return errors;
}

function getLoginFormErrors(email, password) {
  let errors = [];

  if (!email) {
    errors.push('Email is required');
    email_input.parentElement.classList.add('incorrect');
  }
  if (!password) {
    errors.push('Password is required');
    password_input.parentElement.classList.add('incorrect');
  }

  return errors;
}

// Clear error messages on input
const allInputs = [firstname_input, email_input, password_input, repeat_password_input].filter(input => input != null);

allInputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.parentElement.classList.contains('incorrect')) {
      input.parentElement.classList.remove('incorrect');
      error_message.innerText = ''; // Clear the error message
    }
  });
});