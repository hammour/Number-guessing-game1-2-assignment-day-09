// =============================================================================
// Some example variables to get you started. The first three are the elements
// in the index.html file. The last is for storing the computer's number. You
// can see how they are being used below. I recommend keeping these as they are.
// You may want to add more.
// =============================================================================

var userInputRangeLowEl = document.getElementById('userInputRangeLow');
var userInputRangeHighEl = document.getElementById('userInputRangeHigh');
var msgDisplayEl = document.getElementById('msgDisplay');
var userInputEl = document.getElementById('userInput');
var submitBtnEl = document.getElementById('submitBtn');
var submitBtn2El = document.getElementById('submitBtn2');
var ranNumber;
var numberOfGuesses=1;

// =============================================================================
// Some example functions, to get you started. You can change, delete, add to
// these however you like!
// =============================================================================


function getRange(Low, High) {
  if (submitBtn2El.value === "Pick") {

      //submitBtn2El.value = "Pick again"
      userInputRangeHighEl = parseInt(High);
      userInputRangeLowEl = parseInt(Low);
      ranNumber = generateNumber();
      submitBtn2El.value = "Already Picked!";

     // msgDisplayEl.innerHTML = "You Picked"+userInputRangeHighEl+' and '+userInputRangeLowEl //+' random = ' + ranNumber;
   }
}
function generateNumber() {
  var ranN =  Math.round(Math.random()*(userInputRangeHighEl-userInputRangeLowEl))+userInputRangeLowEl;
  return ranN;
  
};

function clearInput() {
  userInputEl.value = '';
  userInputRangeLowEl.value = '';
  userInputRangeHighEl.value = '';
  //ranNumber = '';
};

// =============================================================================
// The guessing game. Everytime the user clicks the button on the page, this
// function will run. Don't change the name of it unless you change the
// corresponding name of the function in the html doc. There's really no reason
// to do that.
// You can see that the guessingGame function is receiving userInput. If you're
// feeling overwhelmed, you can just trust that that is always true for this
// program, but I promise it's not magical. Go look around at the index.html
// file if you want to try and figure out how that's happnening.
// Change any and all of this code (except the name and the parameter)! Good
// Luck!
// =============================================================================

//var ranNumber = generateNumber();

function guessingGame(userInput) {
  
  
  
  if ((!userInput) || (!userInputRangeLowEl) || (!userInputRangeHighEl)){
    if (submitBtnEl.value === "Start") {
        submitBtnEl.value = "Submit"
    }
    msgDisplayEl.innerHTML = "Please guess a number"
  } else if (parseInt(userInput) === ranNumber) {
        document.body.innerHTML = '<nav><header>You guessed it right after <span>'+ numberOfGuesses +'</span> tirals ! Great job!\n <INPUT TYPE="button" onClick="history.go(0)" VALUE="Play Again"></header></nav> <style> nav { background-color: #2F4E81; color: #fff; font-weight: bolder; height: 5em; text-align: center; margin: 0px auto;} header { padding:1em; width: auto; margin: auto;} span{color: red;}<\style>';
  
        clearInput();
        console.log(ranNumber);
        submitBtnEl.value = "Start";
        submitBtn2El.value = "Pick";
        
        
        
        
        
    } else if (userInput > ranNumber) {
        msgDisplayEl.innerHTML = "Your number is greater than the secret number!"
        clearInput();
        submitBtnEl.value = "Guess Again!";
        submitBtn2El.value = "Already Picked!";
        numberOfGuesses++;
        
      } else if (userInput < ranNumber) {
          msgDisplayEl.innerHTML = "Your number is less than the secret number!"
          clearInput();
          submitBtn2El.value = "Already Picked!";
          submitBtnEl.value = "Guess Agina!!";
          numberOfGuesses++;
          
        }


}
