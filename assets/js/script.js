// global variables for <h1> and <button> within <div>
var challenge = "Coding Quiz Challenge";
var quiz = [
  "A very useful tool used during development and debugging for printing content to the debugger is:",
  "The condition in an if / else statement is enclosed with _________.",
  "String values must be enclosed within ________ when being assigned to variables.",
]
var answersOne = ["1. JavaScript", "2. terminal", "3. for loops", "4. console.log"]
var answersTwo = ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"]
var answersThree = ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"]
var allDone = "All done!"

// gloval variables to specify the class/id within html
var timeEl = document.querySelector(".time");
var startButton = document.getElementById("start");
var submitButton = document.getElementById("submit");
var quiz1Button = document.getElementById("quiz1");
var quiz2Button = document.getElementById("quiz2");
var quiz3Button = document.getElementById("quiz3");

// function to return the the start page when page is refreshed
function initial() {
  question.textContent = challenge;
  document.getElementById("main-content").style.alignItems = "center";
  document.getElementById("main-content").style.textAlign = "center";
  document.getElementById("quiz1").style.display = "none";
  document.getElementById("quiz2").style.display = "none";
  document.getElementById("quiz3").style.display = "none";
  document.getElementById("score").style.display = "none";
  document.getElementById("input").style.display = "none";
  document.getElementById("submit").style.display = "none";
  document.getElementById("output").style.display = "none";
}

// calling function initial 
initial();

// When start button is clicked the following function is called
startButton.addEventListener("click", function start() { 
  var secondsLeft = 60;
  var penalty = 10;

  // function to start counting down from 60seconds
  var timerInterval = setInterval (function() {
    timeEl.textContent = "Time: " + secondsLeft;
    secondsLeft--;
    // when the time reaches 0, the timer is stopped
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000)

  // changes the element display status, text alignments, and box alignments
  document.getElementById("main-content").style.alignItems = "flex-start";
  document.getElementById("main-content").style.textAlign = "left";
  document.getElementById("desc").style.display = "none";
  document.getElementById("quiz1").style.display = "block";
  document.getElementById("start").style.display = "none";
  document.getElementById("output").style.display = "block";

  // contenets of html changes in accordance with the global variable
  question.textContent = quiz[0];
  one.textContent = answersOne[0];
  two.textContent = answersOne[1];
  three.textContent = answersOne[2];
  four.textContent = answersOne[3];

// When a button is clicked, it calls the following function
quiz1Button.addEventListener("click", function (event) {
  var element = event.target
console.log(element)

  // if the selection is incorrect, it displays message and deducts 10seconds from the time
  // if correct, changes the display status of html elements & contenets of html changes in accordance with the global variable
  if (element.innerHTML !== answersOne[3]) {
    output.textContent = "Wrong!";
    secondsLeft = secondsLeft - penalty;
  } else {
    output.textContent = "Correct!";

    document.getElementById("desc").style.display = "none";
    document.getElementById("quiz1").style.display = "none";
    document.getElementById("quiz2").style.display = "block";
    document.getElementById("start").style.display = "none";
    document.getElementById("output").style.display = "block";

    question.textContent = quiz[1];
    five.textContent = answersTwo[0];
    six.textContent = answersTwo[1];
    seven.textContent = answersTwo[2];
    eight.textContent = answersTwo[3];
  }
  })

// When a button is clicked, it calls the following function
quiz2Button.addEventListener("click", function (event) {
  var element = event.target

  // if the selection is incorrect, it displays message and deducts 10seconds from the time
  // if correct, changes the display status of html elements & contenets of html changes in accordance with the global variable
  if (element.innerHTML !== answersTwo[1]) {
    output.textContent = "Wrong!";
    secondsLeft = secondsLeft - penalty;
  } else {
    output.textContent = "Correct!";

    document.getElementById("desc").style.display = "none";
    document.getElementById("quiz2").style.display = "none";
    document.getElementById("quiz3").style.display = "block";
    document.getElementById("start").style.display = "none";
    document.getElementById("output").style.display = "block";

    question.textContent = quiz[2];
    nine.textContent = answersThree[0];
    ten.textContent = answersThree[1];
    eleven.textContent = answersThree[2];
    twelve.textContent = answersThree[3];
  }
  })

// When a button is clicked, it calls the following function
quiz3Button.addEventListener("click", function (event) {
  var element = event.target

  // if the selection is incorrect, it displays message and deducts 10seconds from the time
  // if correct, changes the display status of html elements, contenets of html changes in accordance with the global variable
  // if correct, it also stoppes the countdown and the time left is stored in local storage
  if (element.innerHTML !== answersThree[2]) {
    output.textContent = "Wrong!";
    secondsLeft = secondsLeft - penalty;
  } else {
    clearInterval(timerInterval);
    output.textContent = "Correct!";
    question.textContent = allDone;
    document.getElementById("desc").style.display = "none";
    document.getElementById("quiz3").style.display = "none";
    document.getElementById("start").style.display = "none";
    document.getElementById("score").style.display = "block";
    document.getElementById("input").style.display = "block";
    document.getElementById("submit").style.display = "block";
    document.getElementById("output").style.display = "none";
    score.textContent = "Your score is: " + (secondsLeft + 1);
    localStorage.setItem("score", secondsLeft + 1);
  }
})
})

// When submit button is clicked, it stores the value entered in <form> in local storage
submitButton.addEventListener("click", function submit() {
    localStorage.setItem("name", JSON.stringify(candidate.value))
})
