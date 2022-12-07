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
  let uniname = document.querySelector(".uniname");
  let unInfo = document.querySelector(".collegeinfo");
  let uLogo = document.querySelector(".logo2");
    



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
    let totalScore = score;




    // task 11: create a conditional statement for the result to the quiz based on the total score. Using string interpolation, display these to the page: the result, an image that corresponds and a message to go with it.
    if (totalScore >= 4 && totalScore < 8) {
      let uni = "Massachusetts Institute of Technology"
      uniname.innerHTML = "Welcome to The Massachusettes Institute of Technology, roll Tech!"
      imgResult.src = "https://news.mit.edu/sites/default/files/download/201810/MIT-Computer-Announce-01-PRESS.jpg"
      uInfo.innerHTML = "The MIT community is driven by a shared purpose: to make a better world through education, research, and innovation. We are fun and quirky, elite but not elitist, inventive and artistic, obsessed with numbers, and welcoming to talented people regardless of where they come from."
      uLogo.src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/2560px-MIT_logo.svg.png"

    }
    else if (totalScore >= 8 && totalScore < 12) {
       uni = "Duke University"
      uniname.innerHTML = "Who knew you were born to be a Blue Devil! Welcome to Duke!"
      imgResult.src = "https://today.duke.edu/sites/default/files/20201215_blue_holiday_aerials001%20%281%29.jpg"
       uInfo.innerHTML = "Durham, North Carolina, which surrounds Duke's campus, offers a variety of activities including shopping, dining and entertainment. Its Bull City nickname comes from the Blackwell Tobacco Company's Bull Durham Tobacco. Students at Duke are required to live on campus for their first three years, and freshmen live together on the East Campus. The Duke Blue Devils maintain a fierce rivalry with the University of North Carolina—Chapel Hill Tar Heels and are best known for their outstanding men's basketball program, which is one of the top five most wins all-time college basketball programs in the country. There are more than 700 student groups at Duke University, including fraternities and sororities, sports clubs, and organizations for a variety of other interests."
      uLogo.src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Duke_University_logo.svg/1024px-Duke_University_logo.svg.png"

    }
    else if (totalScore >= 12 && totalScore < 16) {
       uni = "New York University"
      uniname.innerHTML = "You're going to NYU! Welcome to The Big Apple!"
      imgResult.src = "https://2u.com/static/c48bf1fb7bcb5eb24bac075484d88ff4/44b4e/nyu-steinhardt-campus-flags_1aVLUBT.max-2880x1800.jpg"
      uInfo.innerHTML = "Now among the largest private universities in the US, NYU provides a rigorous, demanding education to more than 65,000 students and undertakes $1 billion in research annually. It counts among its faculty recipients of the highest scholarly honors and is a top producer of patents and revenue from licensing among US universities. NYU has a vast network of alumni who have gone on to succeed across professions, from the sciences to the arts and government, throughout the world."
      uLogo.src="https://yt3.ggpht.com/-RZYi5isxH_M/AAAAAAAAAAI/AAAAAAAAAAA/rmWpoe2qZzI/s900-c-k-no/photo.jpg"

    }
    else if (totalScore >= 16) {
       uni = "University of Pennsylvania"
      uniname.innerHTML = "You're a Quaker, Welcome to The University of Pennsylvania!"
      imgResult.src = "https://media.cntraveler.com/photos/5c1137222a1ed14acdea31a2/16:9/w_2560,c_limit/GettyImages-594949892.jpg"
      uInfo.innerHTML = "Penn’s academics are boosted by its inherent culture and ecosystem of innovation. You name it, if it’s cutting-edge, the University’s faculty—and students—have their hands in it. Grounded in the liberal arts and sciences and enriched by the integrated resources of four undergraduate and 12 graduate schools, Penn offers students an unparalleled education informed by inclusivity, intellectual rigor, research, and the impetus to create new knowledge to the benefit of individuals and communities around the world."
      uLogo.src="https://branding.web-resources.upenn.edu/sites/default/files/styles/card_3x2/public/2022-03/UniversityofPennsylvania_FullLogo_RGB-4_0.png?h=ab080a2f&itok=tu_jMFEm"
      
    }
  };
}