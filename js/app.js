// UDEMY
// JAVASCRIPT
// CHALLENGE I
// 1. John and friend invented a simple game where the player with the highest value of his height (cm) plus 5 times his age wins. ( There can be a draw)

// 2. Create variable for height and varable for agegs of two friends and assign values

// 3. Decide who wins and print the winner to console. Include score in the string that you output to the console.

// BONUS: Add third player and decide who wins. (Needs && operator)


// Creating variables with height, age, and total score
var johnHeight = 170;
var andrewHeight = 177;

var johnAge = 20;
var andrewAge = 21;

var johnTotal = johnHeight + johnAge * 5;
var andrewTotal = andrewHeight + andrewAge * 5;

// Two player

// If else statements

// if (andrewTotal < johnTotal) {
//   console.log("John wins the game with " + johnTotal + " points!");
// } else if (andrewTotal > johnTotal) {
//   console.log ("Andrew wins the game with " + andrewTotal + " points!");
// } else if (score andrewTotal === johnTotal) {
//   console.log ("There is a draw!");
// }

// Three player

var meganHeight = 158;
var meganAge = 20;
var meganTotal = meganHeight + meganAge * 5;

// Using the && or and operator

if (johnTotal > andrewTotal && johnTotal > meganTotal){
  console.log("John wins the game with " + johnTotal + " ponts!");
} else if (andrewTotal > johnTotal && andrewTotal> meganTotal){
  console.log("Andrew wins the game with " + andrewTotal + " points!");
} else if (meganTotal > johnTotal && meganTotal > andrewTotal){
  console.log("Megan wins the game with " + meganTotal + " points!");
} else {
  console.log("There is a draw!");
}


// CHALLENGE 2
// 1. Create array with years in which people were born

// 2. Create empty array

// 3. Use loop to fill array with ages of people

// 4. Use another loop to log into console whether each person is 18 or older

// 5. Create function printFullAge which receives years as arguement, executes 2-4 and returns a vector of true/false boolean values: true if person is adult (>= 18 years) false if not ( < 18 years)


var years = [1995, 1996, 2001, 1991, 2006];

function printFullAge(years){
  var age = [];

  // For loop goes through years array, age array equals current year minues years array

  for(var i = 0; i < years.length; i++) {
    age[i] = 2017 - years[i];
  }

  // Goes through the age array and determins if person is an adult or teenager
  // (i+1 is the index plus 1, which is the number of the person in order)

  for (var i = 0; i < age.length; i++){
    if (age[i] >= 18){
      console.log("Person " + (i+1) + " is " + age[i] + " years old, who is an adult. ");
    } else if (age[i] < 18){
      console.log("Person " + (i+1) + " is " + age[i] + " years old, who is a teenager.");
    }
  }
}
