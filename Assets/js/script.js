// MOMENT.JS DAY-TRACKER
var currentDay = moment();
$("#currentDay").text(currentDay.format("MMMM Do, YYYY"));

var timeBlock = [
  { hour: "9" },
  { hour: "10" },
  { hour: "11" },
  { hour: "12" },
  { hour: "1" },
  { hour: "2" },
  { hour: "3" },
  { hour: "4" },
  { hour: "5" },
];

console.log(typeof timeBlock.hour);

var $row = $("#row");

var currentTime = moment().format("h");
console.log(typeof currentTime);
// var $row = $(".row");
// if (timeBlock === currentTime) {
//   $row.setAttribute("style", ".present");
// } else if (timeBlock === currentTime) {
//   $row.setAttribute("style", ".past");
// }

// THIS ONE WORKS BELOW!!!!!
// if (timeBlock[0].hour === 9) {
//   $row.attr("style", "background-color: red;");
// }

var hourIndex = currentTime;

if (timeBlock[hourIndex].hour === currentTime) {
  $row.attr("style", "background-color: #ff6961; color: white;");
} else if (timeBlock[hourIndex].hour < currentTime) {
  $row.attr("style", "background-color: #d3d3d3; color: white;");
} else if (timeBlock[hourIndex].hour > currentTime) {
  $row.attr("style", "background-color: #77dd77; color: white;");
}

var $saveBtn = $("#saveBtn");
var $userInput = $("#user-input");

// SAVE BUTTON CALL/FUNCTION
$saveBtn.on("click", textField);

// RENDER USER INPUT
function textField() {
  // GET CURRENT LOCAL STORAGE DATA
  var toDoList = JSON.parse(localStorage.getItem("to-do-list"));
  var toDoItem = $userInput;
  toDoList.push(toDoItem);
  localStorage.setItem("to-do-list", JSON.stringify(toDoList));
}
