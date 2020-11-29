// make the box disapear when the user clicks it
var theBox = document.querySelector("div");
theBox.addEventListener("click", function() {
  theBox.className = "none";
});