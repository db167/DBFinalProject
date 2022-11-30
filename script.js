document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);

function buzzfeedQuiz() {

  // task 4: declare variables for the html elements you'll use as selectors later. You need the submit button, display div, and all three inputs for your questions.

  let button = document.querySelector(".submit");
  let displayResult = document.querySelector(".displayResult");
  let q1 = document.querySelector(".q1");
  let q2 = document.querySelector(".q2");
  let q3 = document.querySelector(".q3");
  let q4 = document.querySelector(".q4");
  let coverResult = document.querySelector(".cover");
  let imgResult = document.querySelector(".coverPhoto");



  // task 5: declare variables for values we'll set later. You'll need one for an image source, a result and a score for each question.
  let imgSrc
  let result
  let score = 0

  button.onclick = function() {

    // task 6: Declare user input variables for each of your questions. If you have three questions, you should have three variables. These variables should equal the value of the user input for each question.
    console.log("hi");
    //Input one
    const inputOne = document.querySelector(".q1")
    let code = "code"
    let med = "watch a medical drama"
    let musical = "go to a musical"
    let hustle = "work on a side hustle"
    //_________________________________________________
    //Input Two
    const inputTwo = document.querySelector(".q2")
    let math = "math"
    let science = "science"
    let arts = "arts"
    let economics = "economics"
    //___________________________________________________
    //Input Three
    const inputThree = document.querySelector(".q3")
    let newEngland = "New England"
    let SE = "Southeast"
    let NE = "Northeast"
    let MA = "Mid-Atlantic"
    //_______________________________________________________
    //Input Four
    const inputFour = document.querySelector(".q4")
    let clam = "Clam Chowder"
    let KFC = "Fried Chicken"
    let pizza = "Pizza"
    let lobster = "Lobster"
    //_____________________________________________________

    if (inputOne.value === code) {
      code = 1
      score += code
    }
    else if (inputOne.value === med) {
      med = 2
      score += med
    }
    else if (inputOne.value === musical) {
      musical = 3
      score += musical
    }
    else if (inputOne.value === hustle) {
      hustle = 4
      score += hustle
    }
    else {

    }
    //___________________________________________________________
    if (inputTwo.value === math) {
      math = 1
      score += math
    }
    else if (inputTwo.value === science) {
      science = 2

      score += science
    }
    else if (inputTwo.value === arts) {
      arts = 3
      score += arts
    }
    else if (inputTwo.value === economics) {
      economics = 4
      score += economics
    }
    else {

    }
    //____________________________________________________________________
    if (inputThree.value === newEngland) {

      newEngland = 1

      score += newEngland
    }
    else if (inputThree.value === SE) {
      SE = 2

      score += SE
    }
    else if (inputThree.value === NE) {
      NE = 3

      score += NE
    }
    else if (inputThree.value === MA) {
      MA = 4
      score += MA
    }
    else {

    }
    //_________________________________________________________________________________________

    if (inputFour.value === clam) {
      clam = 1

      score += clam
    }
    else if (inputFour.value === KFC) {
      KFC = 2

      score += KFC
    }
    else if (inputFour.value === pizza) {
      pizza = 3

      score += pizza
    }
    else if (inputFour.value === lobster) {
      lobster = 4
      score += lobster
    }
    else {

    }
    //_______________________________________________________________________________________________
    // task 10: declare a variable for the total score of the quiz and set it equal to the sum of each question score.
    let totalScore === score




    // task 11: create a conditional statement for the result to the quiz based on the total score. Using string interpolation, display these to the page: the result, an image that corresponds and a message to go with it.
    if (totalScore >= 4 && totalScore < 8) {
      let uni = "Massachusetts Institute of Technology"
      imgResult.src = "https://news.mit.edu/sites/default/files/download/201810/MIT-Computer-Announce-01-PRESS.jpg"

    }
    else if (totalScore >= 8 && totalScore < 12) {
       uni = "Duke University"

      imgResult.src = "https://today.duke.edu/sites/default/files/20201215_blue_holiday_aerials001%20%281%29.jpg"

    }
    else if (totalScore >= 12 && totalScore < 16) {
       uni = "New York University"

      imgResult.src = "https://2u.com/static/c48bf1fb7bcb5eb24bac075484d88ff4/44b4e/nyu-steinhardt-campus-flags_1aVLUBT.max-2880x1800.jpg"

    }
    else if (totalScore >= 16) {
       uni = "University of Pennsylvania"

      imgResult.src = "https://media.cntraveler.com/photos/5c1137222a1ed14acdea31a2/16:9/w_2560,c_limit/GettyImages-594949892.jpg"
    }
  };
}