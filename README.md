# WorkSchedule
$("#save9am").on("click", function () {
  localStorage.setItem("save9am", document.getElementById("text9am").value);
});
$("#text9am").text(localStorage.getItem("save9am"));