
  



  (function () {

  // Initialize Firebase

  const config = {
    apiKey: "AIzaSyBdJyQWscf12G0AHe0UcI079igredcakD4",
    authDomain: "class-thing.firebaseapp.com",
    databaseURL: "https://class-thing.firebaseio.com",
    projectId: "class-thing",
    storageBucket: "class-thing.appspot.com",
    messagingSenderId: "742683233065"
  };

  firebase.initializeApp(config);



  const txtEmail=document.GetElementById("txtEmail");
  const txtPassword=document.GetElementById("txtPassword");
  const btnLogin=document.GetElementById("btnLogin");
  const btnSignUp=document.GetElementById("btnSignUp");
  const btnLogout=document.GetElementById("btnLogout");


  // Add login event

  btnLogin.addEventListener("click", e=> {

  		// get email and password

  		const email =txtEmail.value;
  		const pass = txtPassword.value;
  		const auth = firebase.auth();

  		
  		// Sign In

  		const promise =auth.signInWithEmailAndPassword(email, pass);
  		promise
      .catch(e=>console.log(e.message));


  });


// log out
// btnLogout.addEventListener("click", e=> {
//   firebase.auth().signOut();

});
  //  add signup event
  btnSignUp.addEventListener("click", e=> {

  	  		// get email and password
  	  		// TODO: check for real emails


  		const email =txtEmail.value;
  		const pass = txtPassword.value;
  		const auth = firebase.auth();

  		// Create User

  		const promise =auth.createUserWithEmailAndPassword(email, pass);
  		promise
		.catch(e=>console.log(e.message));


});

// add a real time event listener
	firebase.auth().onAuthStateChanged(firebaseUser=>{
if (firebaseUser) {
console.log(firebaseUser);
btn.Logout.classList.remove("hide");
} else {
	console.log ("not logged in");
  btnLogout.classList.add("hide)");
}
});


