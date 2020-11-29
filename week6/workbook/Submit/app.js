// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function
var submitMe = document.getElementById("submit-me");
submitMe.addEventListener("click", function(e) {
    e.preventDefault()
});