let wrapper = document.querySelector('.wrapper'),
    signUpLink = document.querySelector('.link .signup-link'),
    signInLink = document.querySelector('.link .signin-link');

signUpLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signin');
    wrapper.classList.remove('animated-signup');
});

signInLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signup');
    wrapper.classList.remove('animated-signin');
});

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAyCirlt5L4LNh3fKcFCasWNHxWsxIt5gM",
    authDomain: "login-form-fc30a.firebaseapp.com",
    projectId: "login-form-fc30a",
    storageBucket: "login-form-fc30a.appspot.com",
    messagingSenderId: "606177827553",
    appId: "1:606177827553:web:961feaa4f0fe8ee5e975a0"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth()

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
        // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            window.location.href = "../login/index.html"
            console.log(result)
                // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
                // ..
        });
}

//Sign In function
const signIn = () => {
    const email = document.getElementById("emails").value;
    const password = document.getElementById("passwords").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            window.location.href = "../login/index.html"
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}