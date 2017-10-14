function run (){



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD5QMYzLquOPs8SdvNSOThs3DwRVNMKVws",
    authDomain: "take-a-hike-1e52e.firebaseapp.com",
    databaseURL: "https://take-a-hike-1e52e.firebaseio.com",
    projectId: "take-a-hike-1e52e",
    storageBucket: "take-a-hike-1e52e.appspot.com",
    messagingSenderId: "339109679713"
  };
  firebase.initializeApp(config);

const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById("txtPassword");
const btnLogin = document.getElementById("btnLogin");
const btnSignUp = document.getElementById("btnSignUp");
const btnLogout = document.getElementById("btnLogout");


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

btnLogout.addEventListener("click",e => { 
firebase.auth().signOut();
	
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
