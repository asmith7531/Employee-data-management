//initializing firebase
var config = {
  apiKey: "AIzaSyAebzqb4LCnyHRACqxrvGPtyP91msogrfU",
  authDomain: "employee-data-management-2e19d.firebaseapp.com",
  databaseURL: "https://employee-data-management-2e19d.firebaseio.com",
  projectId: "employee-data-management-2e19d",
  storageBucket: "",
  messagingSenderId: "170522147070"
};
firebase.initializeApp(config);

var database = firebase.database();

var name;
var role;
var startDate;
var monthlyRate;
var monthsWorked;
var totalBilled;




$("#add-employee").on("click", function (e) {
  e.preventDefault();
  name = $("#name-input").val().trim();
  role = $("#role-input").val().trim();
  startDate = $("#start-date-input").val().trim();
  monthlyRate = $("#monthly-rate-input").val().trim();



    database.ref().push({
      name: name,
      role: role,
      startDate: startDate,
      monthlyRate: monthlyRate,
    })
})

database.ref().on("child_added", function (snapshot) {

  

})
