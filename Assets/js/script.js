// MOMENT.JS DAY-TRACKER
var currentDay = moment();
$("#currentDay").text(currentDay.format("MMMM Do, YYYY"));

// DOCUMENT SELECTOR VARIABLES
var $rowNine = $("#row-9");
var $rowTen = $("#row-10");
var $rowEleven = $("#row-11");
var $rowNoon = $("#row-12");
var $rowOne = $("#row-1");
var $rowTwo = $("#row-2");
var $rowThree = $("#row-3");
var $rowFour = $("#row-4");
var $rowFive = $("#row-5");

var $hour = $(".hour");

var $saveBtn = $("#saveBtn");

var $row = $(".row");

// HOUR VARIABLES
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
console.log(hours);

// CURRENT HOUR
var currentHour = moment().hour();
console.log(currentHour);

// COLOR CODE FUNCTION
function colorCode() {
  if (hours[0] === currentHour) {
    $rowNine.addClass("present");
  } else if (hours[1] === currentHour) {
    $rowTen.addClass("present");
  } else if (hours[2] === currentHour) {
    $rowEleven.addClass("present");
  } else if (hours[3] === currentHour) {
    $rowNoon.addClass("present");
  } else if (hours[4] === currentHour) {
    $rowOne.addClass("present");
  } else if (hours[5] === currentHour) {
    $rowTwo.addClass("present");
  } else if (hours[6] === currentHour) {
    $rowThree.addClass("present");
  } else if (hours[7] === currentHour) {
    $rowFour.addClass("present");
  } else if (hours[8] === currentHour) {
    $rowFive.addClass("present");
  } else {
    $row.addClass("past");
  }
}

// COLOR CODE CALL
colorCode();

// TEXT ENTRY VARIABLES
var $userInput = $("#user-input");

// function saveUserInput(event) {
//   event.preventDefault();
//   var userText = $userInput;
//   localStorage.getItem("toDo");
//   localStorage.setItem("toDo", (userText));
// }

$saveBtn.on("click", function (event) {
  event.preventDefault();
  var text = document.querySelector("#user-input").value;
  localStorage.setItem("toDo", text);
  $userInput.append(text);
});
