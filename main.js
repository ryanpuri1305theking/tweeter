
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDCM0bftzXkzdzpNmHfMxiuze9IivtQKtA",
  authDomain: "tweeter-72632.firebaseapp.com",
  databaseURL: "https://tweeter-72632-default-rtdb.firebaseio.com",
  projectId: "tweeter-72632",
  storageBucket: "tweeter-72632.appspot.com",
  messagingSenderId: "194543823781",
  appId: "1:194543823781:web:446fb912cbedba0f39964c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function AddUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"Adding User"
    })
}