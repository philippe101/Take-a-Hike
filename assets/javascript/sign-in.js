(function() {
// Initialize Firebase
var config = {
  apiKey: "AIzaSyB8A4Bur4UxHzsm4Nsmt-e1csI9rtFY2z4",
  authDomain: "test-priject-27921.firebaseapp.com",
  databaseURL: "https://test-priject-27921.firebaseio.com",
  projectId: "test-priject-27921",
  storageBucket: "test-priject-27921.appspot.com",
  messagingSenderId: "652371163576"
};

firebase.initializeApp(config);

// var database = firebase.database();
// console.log(database);



//call back
// auth.onAuthStateChanged(firebaseUser => {});

//Get input
var txtEmail = $("#inputUsernameEmail");
var txtPassword = $("#inputPassword");
var btnLogin = $("#btn-log-in");
var btnGoogle = $("#btn-google");
var btnFacebook = $("#btn-facebook");

console.log("txtEmail variable: " + txtEmail);
console.log("txtPassword variable: " + txtPassword);
console.log(btnLogin);
console.log(btnGoogle);
console.log(btnFacebook);


//onclick event to sign-in
$("#btn-log-in").on("click", function() {
//get email and password
const email = txtEmail.val().trim();
const pass = txtPassword.val().trim();
const auth = firebase.auth();

console.log("email variable: " + email);
console.log("pass variable: " + email);
console.log("auth variable: " + email);


//sign in
const promise = auth.signInWithEmailAndPassword(email, pass);
promise.catch(e => console.log(e.message));

});




//signup button event
$("#btn-sign-up").on("click", function() {
//get email and password
const email = $("#inputUsernameEmail").val().trim();
//  TODO: CHECK FOR REAL EMAILS
const pass = $("#inputPassword").val().trim();
const auth = firebase.auth();
//sign in
const promise = auth.createUserWithEmailAndPassword(email, pass);
promise.catch(e => console.log(e.message));

});

// add a realtime listener
firebase.auth().onAuthStateChanged (firebase => {
  if (firebaseUser) {
    console.log(firebaseUser);
  } else {
    console.log("not logged in");
  }
});



});