

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCMPVbRG5PFeB4pHSaEvzpMywGCaxJ2I74",
    authDomain: "rock-paper-scissors-83540.firebaseapp.com",
    databaseURL: "https://rock-paper-scissors-83540.firebaseio.com",
    projectId: "rock-paper-scissors-83540",
    storageBucket: "",
    messagingSenderId: "318063060937"
};
firebase.initializeApp(config);

var database = firebase.database();


$("h1").on("click", function(){
    console.log("Hello Baby");
});