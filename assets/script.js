// Eventlistener for the click on the buttons and set it in local storage
$(".saveBtn").on("click", function () {
  let value = $(this).siblings(".description").val();
  let time = $(this).parent().attr("id");
  localStorage.setItem(time, value);
});
// loops trugh each button and get the local storage in
let arr = [
  "hour-9",
  "hour-10",
  "hour-11",
  "hour-12",
  "hour-13",
  "hour-14",
  "hour-15",
  "hour-16",
  "hour-17",
];
for (let i = 0; i < arr.length; i++) {
  $(`#${arr[i]} .description`).val(localStorage.getItem(arr[i]));
}
// timer intreval so it will refresh every second
function setTime() {
  let currentTime = dayjs();
  $("#currentDay").text(currentTime.format("MMM D YYYY H:mm:ss"));
}
setInterval(function () {
  setTime();
}, 1000);
// function to match the timeslot and to apply appropriate class
$(function () {
  let today = dayjs();

  if (today.hour() < 9) {
    $("#hour-9").addClass("future");
  } else if (today.hour() > 9) {
    $("#hour-9").addClass("past");
  } else {
    $("#hour-9").addClass("present");
  }
  if (today.hour() < 10) {
    $("#hour-10").addClass("future");
  } else if (today.hour() > 10) {
    $("#hour-10").addClass("past");
  } else {
    $("#hour-10").addClass("present");
  }
  if (today.hour() < 11) {
    $("#hour-11").addClass("future");
  } else if (today.hour() > 11) {
    $("#hour-11").addClass("past");
  } else {
    $("#hour-11").addClass("present");
  }
  if (today.hour() < 12) {
    $("#hour-12").addClass("future");
  } else if (today.hour() > 12) {
    $("#hour-12").addClass("past");
  } else {
    $("#hour-12").addClass("present");
  }
  if (today.hour() < 13) {
    $("#hour-13").addClass("future");
  } else if (today.hour() > 13) {
    $("#hour-13").addClass("past");
  } else {
    $("#hour-13").addClass("present");
  }
  if (today.hour() < 14) {
    $("#hour-14").addClass("future");
  } else if (today.hour() > 14) {
    $("#hour-14").addClass("past");
  } else {
    $("#hour-14").addClass("present");
  }
  if (today.hour() < 15) {
    $("#hour-15").addClass("future");
  } else if (today.hour() > 15) {
    $("#hour-15").addClass("past");
  } else {
    $("#hour-15").addClass("present");
  }
  if (today.hour() < 16) {
    $("#hour-16").addClass("future");
  } else if (today.hour() > 16) {
    $("#hour-16").addClass("past");
  } else {
    $("#hour-16").addClass("present");
  }
  if (today.hour() < 17) {
    $("#hour-17").addClass("future");
  } else if (today.hour() > 17) {
    $("#hour-17").addClass("past");
  } else {
    $("#hour-17").addClass("present");
  }
});
