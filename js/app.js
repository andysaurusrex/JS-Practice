// UDEMY
// JAVASCRIPT
// PRACTICE I
// 1. John and friend invented a simple game where the player with the highest value of his height (cm) plus 5 times his age wins. ( There can be a draw)

// 2. Create variable for height and varable for agegs of two friends and assign values

// 3. Decide who wins and print the winner to console. Include score in the string that you output to the console.

// BONUS: Add third player and decide who wins. (Needs && operator)

var johnHeight = 170.18;
var andrewHeight = 177.80;

var johnAge = 20;
var andrewAge = 21;

var johnTotal = johnHeight + johnAge * 5;
var andrewTotal = andrewHeight + andrewAge * 5;

if (andrewTotal < johnTotal){
  console.log("John wins the game!");
} else {
  console.log ("Andrew wins the game!");
}
