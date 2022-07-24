// global variable specifying the element/id in html and the texts stored in local storage converted to objects
var clearButton = document.getElementById("clear");
var initial = JSON.parse(localStorage.getItem("name"));
var score = JSON.parse(localStorage.getItem("score"));

// displays the objects retrieved from local storage in the location specified by id
document.getElementById("result").innerHTML = initial + " - " + score;

// When "Clear high score" button is clicked, it removes the values stored in local storage
clearButton.addEventListener("click", function deleteScore(event) {
    event.preventDefault();
    localStorage.removeItem("name");
    localStorage.removeItem("score"); 
    document.getElementById("result").innerHTML  = " ";

})