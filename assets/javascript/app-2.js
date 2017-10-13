function run (){

	var config ={
	apiKey: "AIzaSyBdJyQWscf12G0AHe0UcI079igredcakD4",
    authDomain: "class-thing.firebaseapp.com",
    databaseURL: "https://class-thing.firebaseio.com",
    projectId: "class-thing",
    storageBucket: "class-thing.appspot.com",
    messagingSenderId: "742683233065"
  };
  firebase.initializeApp(config);
	
const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById("txtPassword");
const btnLogin = document.getElementById("btnLogin");
const btnSignUp = document.getElementById("btnSignUp");


btnLogin.addEventListener("click", e=> {
	const email = txtEmail.value;
	const pass = txtPassword.value;
	const auth = firebase.auth();
	const promise = auth.signInWithEmailAndPassword (email, pass);
	promise.catch (e => console.log(e.message));
});

btnSignUp.addEventListener("click", e=> {
	const email = txtEmail.value;
	const pass = txtPassword.value;
	const auth = firebase.auth();
	const promise = auth.createUserWithEmailAndPassword (email, pass);
	promise
	.catch (e => console.log(e.message));
});

firebase.auth().onAuthStateChanged(firebaseUser => {
	if (firebaseUser) {
		console.log(firebaseUser);
		
	}else {
		console.log("not logged in");
		
	};
});
	console.log("working");
};
run();
