// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

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
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const error_message = document.getElementById('error-message'); // Ensure this element exists
const submit = document.getElementById('submit');
const logoutBtn = document.getElementById('logoutBtn'); // Ensure this element exists

submit.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent form submission

  // Retrieve input values inside the event listener
  const email = email_input.value;
  const password = password_input.value;

  let errors = [];

  // Validate inputs
  errors = getLoginFormErrors(email, password);

  if (errors.length > 0) {
    // If there are any errors
    error_message.innerText = errors.join(". ");
  } else {
    // If there are no errors
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userId = user.uid; // Get the user's unique ID
        const timestamp = Date.now();
        const date = new Date(timestamp);
        const formattedDate = date.toLocaleString();

        writeUserData(userId, email, formattedDate, 'login');
        window.location.href = "/vanflame-navigation/logged-in/index.html"
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode);
        alert(errorMessage);
      });
  }
});

logoutBtn.addEventListener("click", function () {
  signOut(auth).then(() => {
    const user = auth.currentUser;
    if (user) {
      const userId = user.uid;
      const timestamp = Date.now();
      const date = new Date(timestamp);
      const formattedDate = date.toLocaleString();

      writeUserData(userId, user.email, formattedDate, 'logout');
    }
    window.location.href = "/vanflame-navigation/login-signup/login.html";
  }).catch((error) => {
    console.error(error);
  });
});

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

const allInputs = [firstname_input, email_input, password_input, repeat_password_input].filter(input => input != null);

allInputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.parentElement.classList.contains('incorrect')) {
      input.parentElement.classList.remove('incorrect');
      error_message.innerText = ''; // Clear the error message
    }
  });
});

function writeUserData(userId, email, timestamp, eventType) {
  const eventRef = ref(database, 'userEvents/' + userId);
  const newEventRef = push(eventRef);
  set(newEventRef, {
    email: email,
    timestamp: timestamp,
    eventType: eventType
  });
}
