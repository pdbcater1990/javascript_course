//coding challenge 1

var ageA = prompt('Player A: how old are you?');
var heightA = prompt('Player A: how tall are you in cm?');

var ageB = prompt('Player B: how old are you?');
var heightB = prompt('Player B: how tall are you in cm?');

var ageC = prompt('Player C: how old are you?');
var heightC = prompt('Player C: how tall are you in cm?');

var scoreA = heightA * ageA;
var scoreB = heightB * ageB;
var scoreC = heightC * ageC;

if (scoreA > scoreB && scoreA > scoreC)
{console.log('Player A wins!');}
else if (scoreB > scoreA && scoreB > scoreC) {
  console.log('Player B wins!');
  }
  else if (scoreC > scoreA && scoreC > scoreC) {
    console.log('Player C wins!');
    }
  else if (scoreA === scoreB && scoreA === scoreC && scoreB === scoreC ) {
    console.log('its a draw!');
  }
