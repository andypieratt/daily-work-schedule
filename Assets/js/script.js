// MOMENT.JS DAY-TRACKER
var currentDay = moment();
$("#currentDay").text(currentDay.format("MMMM Do, YYYY"));

// TIME-BLOCK SELECTOR VARIABLE
var $timeBlock = $("#time-block");

// SAVE BUTTON DOC SELECTOR
var $saveBtn = $("#save-button");

// CURRENT HOUR
var currentHour = moment().hour();
console.log(currentHour);

// HOUR VARIABLES AND FUNCTION
var startHour = 9;
var endHour = 17;
for (let i = startHour; i <= endHour; i++) {
  var $row = $(
    `<div id="time-block" class="row">
        <div class="col hour">
          ${i}HR
        </div>
        <input id="user-input" type="text" class="col-6 border border-dark textarea">
        </input>
        <button id="save-button" class="col saveBtn">
          SAVE
        </button>
      </div>`
  );
  if (i === currentHour) {
    $row.addClass("present");
  } else if (i < currentHour) {
    $row.addClass("past");
  } else {
    $row.addClass("future");
  }
  $row.children("input").val(localStorage.getItem(i));
  $row.on("click", ".saveBtn", function () {
    var note = $(this).siblings("input").val();
    localStorage.setItem(i, note);
  });
  $("body>div").append($row);
}
