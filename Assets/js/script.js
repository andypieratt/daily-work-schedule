// MOMENT.JS DAY-TRACKER
var currentDay = moment();
$("#currentDay").text(currentDay.format("MMMM Do, YYYY"));

var timeBlock = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];

var currentTime = moment().format("h");
console.log(typeof currentTime);
var $row = $(".row");
if (timeBlock === currentTime) {
  $row.setAttribute("style", ".present");
} else if (timeBlock === currentTime) {
  $row.setAttribute("style", ".past");
}
