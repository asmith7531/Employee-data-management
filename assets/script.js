//initializing firebase
var config = {
  apiKey: "AIzaSyB14F_mVqpnnkeiHeSJ0ugPi94B1oqyAPk",
  authDomain: "employee-database-c46ff.firebaseapp.com",
  databaseURL: "https://employee-database-c46ff.firebaseio.com",
  projectId: "employee-database-c46ff",
  storageBucket: "",
  messagingSenderId: "176647660987"
};
firebase.initializeApp(config);

var database = firebase.database();

var name;
var role;
var startDate;
var monthlyRate;
var monthsWorked;
var totalBilled;

database.ref().push()


database.ref().on("child_added", function(snapshot){


})


$("#add-employee").on("click", function(){
  event.preventDefault();

  name = $("#name-input").val().trim();
  role = $("#role-input").val().trim();
  startDate = $("#start-date-input").val().trim();
  monthlyRate = $("#monthly-rate-input").val().trim();

})
