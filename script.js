
//possible character type combination arrays
var specs = ["!", "@", "#", "$", "^", "&", "*", "(", ")", "~", ";", "/", "<", ">", "?", "+", "|"];
var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var ups = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lows = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numsSpecs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "#", "$", "^", "&", "*", "(", ")", "~", ";", "/", "<", ">", "?", "+", "|"];
var specsLows = ["!", "@", "#", "$", "^", "&", "*", "(", ")", "~", ";", "/", "<", ">", "?", "+", "|", "!", "@", "#", "$", "^", "&", "*", "(", ")", "~", ";", "/", "<", ">", "?", "+", "|"];
var lowsUps = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
 "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numsLows = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", 
"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numsUps = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
 "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specsUps = ["!", "@", "#", "$", "^", "&", "*", "(", ")", "~", ";", "/", "<", ">", "?", "+", "|", 
"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numsSpecsLows = ["!", "@", "#", "$", "^", "&", "*", "(", ")", "~", ";", "/", "<", ">", "?", "+", "|", 
"1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
 "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specsLowsUps = ["!", "@", "#", "$", "^", "&", "*", "(", ")", "~", ";", "/", "<", ">", "?", "+", "|", 
"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numsLowsUps = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", 
"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numsSpecsUps = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", 
"!", "@", "#", "$", "^", "&", "*", "(", ")", "~", ";", "/", "<", ">", "?", "+", "|",
"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specsNumsLows = ["!", "@", "#", "$", "^", "&", "*", "(", ")", "~", ";", "/", "<", ">", "?", "+", "|",
"1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbsSpecsUpsLows = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
"!", "@", "#", "$", "^", "&", "*", "(", ")", "~", ";", "/", "<", ">", "?", "+", "|",
"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//prompt asking the user how many characters 8-28, assigning each response to  var//
var length = prompt("How many characters long would you like your password to be? (must be a number between 8-28");



//set of confirms asking user to confirm which types of characters they want used, assigning each possible response combo to a var//
var asknums = confirm("Do you want numbers in your password?");
var askspecs = confirm("Do you want special characters in your password?");
var askups = confirm("Do you want uppercase letters in your password?");
var asklows = confirm("Do you want lowercase letters in your password?");

//if statements linking user responses to appropriate string//
var combo1 = function(){if(asknums === true && askspecs === true && askups === false && asklows === false)
    {for (i=0; i < 17; i++){numsSpecs[Math.floor(Math.random() * numsSpecs.length)]}
}
}
console.log(combo1)


//iterating function, using passLength as iterator limit and passCharacters, to pick random characters from appropriate array//

//why can't I assign a variable to this? //why won't it iterate? //how do I invoke it? 
for (i=0; i < 17; i++){
    var characters = specs[Math.floor(Math.random() * specs.length)];
    }



//push resulting characters from function into array//



//join resulting array into a string//



//return string to screen// 

var combo2 = function () {if(1>0) {for(i=0; i < 17; i++){numsUps[Math.floor(Math.random() * numsUps.length)]}}

}
console.log(combo2)