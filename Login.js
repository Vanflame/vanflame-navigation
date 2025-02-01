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


  //inputs
  const email = document.getElementById ('email-input').value;
  const password = document.getElementById('password-input').value;

  //submit
  const submit = document.getElementById('submit').value;
  submit.addEventListener("click", function(event){
    event.preventDefault()
    alert(1)
  })