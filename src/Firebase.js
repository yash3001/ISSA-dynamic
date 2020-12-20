import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAVEU6KwrsqKyOJw8QVXjr5TizwVqnYmj8",
    authDomain: "issa-website.firebaseapp.com",
    projectId: "issa-website",
    storageBucket: "issa-website.appspot.com",
    messagingSenderId: "234484338701",
    appId: "1:234484338701:web:d17479031ed2680e628544"
  };

var fire = firebase.initializeApp(firebaseConfig);

export default fire;