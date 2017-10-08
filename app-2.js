(function (){

	// Initialize Firebase
	var config ={

	apiKey: "AIzaSyBdJyQWscf12G0AHe0UcI079igredcakD4",
    authDomain: "class-thing.firebaseapp.com",
    databaseURL: "https://class-thing.firebaseio.com",
    projectId: "class-thing",
    storageBucket: "class-thing.appspot.com",
    messagingSenderId: "742683233065"
  };

  firebase.initializeApp(config);
	

// get elements

var txtEmail = document.getElementById("txtEmail");
var txtPassword = document.getElementById("txtPassword");
var btnLogin = document.getElementById("btnLogin");
var btnSignUp = document.getElementById("btnSignUp");
var btnLogout = document.getElementById("btnLogout");


// Add login event

btnLogin.addEventListener("click", e=> {
	// get email and pass
	var email = txtEmail.value;
	var pass = txtPassword.value;
	var auth = firebase.auth ();
	// Sign In
	var promise = auth.signInWithEmailAndPassword (email, pass);
	promise.catch (e => console.log(e.message));



	// add sign up event
btnSignUp.addEventListener("click", e=>{
	// get email and pass
	// todo: check for real emails
	var email = txtEmail.value;
	var pass = txtPassword.value;
	var auth = firebase.auth ();
	// Sign Up
	var promise = auth.createUserWithEmailAndPassword (email, pass);
	promise
	.catch (e => console.log(e.message));
});

btnLogout.addEventListener("click",e => { 
firebase.auth().signOut();
	
});


// add a realtime listener

firebase.auth().onAuthStateChanged(firebaseUser => {
	if (firebaseUser) {
		console.log(firebaseUser);
		btnLogout.classList.remove("hide");
	}else {
		console.log("not logged in");
		btnLogout.classList.add("hide");
	}

	});








})

})