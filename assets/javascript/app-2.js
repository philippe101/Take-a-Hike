
function deeznutz (){
	// Initialize Firebase
	const config ={

	apiKey: "AIzaSyBdJyQWscf12G0AHe0UcI079igredcakD4",
    authDomain: "class-thing.firebaseapp.com",
    databaseURL: "https://class-thing.firebaseio.com",
    projectId: "class-thing",
    storageBucket: "class-thing.appspot.com",
    messagingSenderId: "742683233065"
  };

  firebase.initializeApp(config);
	

// get elements

const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById("txtPassword");
const btnLogin = document.getElementById("btnLogin");
const btnSignUp = document.getElementById("btnSignUp");
const btnLogout = document.getElementById("btnLogout");


// Add login event

btnLogin.addEventListener("click", e=> {
	// get email and pass
	const email = txtEmail.value;
	const pass = txtPassword.value;
	const auth = firebase.auth();
	

	// Sign In
	const promise = auth.signInWithEmailAndPassword (email, pass);
	promise.catch (e => console.log(e.message));
});


	// add sign up event


btnSignUp.addEventListener("click", e=> {
	// get email and pass
	// todo: check for real emails
	const email = txtEmail.value;
	const pass = txtPassword.value;
	const auth = firebase.auth();
	// Sign Up
	const promise = auth.createUserWithEmailAndPassword (email, pass);
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
	
	};



});

	console.log("deeznutz");


};
deeznutz();
