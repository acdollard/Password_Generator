
//possible character type combination arrays
var specs = ["!", "@", "#", "$", "^", "&", "*", "(", ")", "~", ";", "/", "<", ">", "?", "+", "|"];
var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var ups = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lows = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//prompt asking the user how many characters 8-28, assigning each response to  var//
var length = prompt("How many characters long would you like your password to be? Must be a number between 8-128");

while(length < 8 || length > 128 || isNaN(length)){
    alert("Must be a number between 8-128!");
    length = prompt("How many characters long would you like your password to be? Must be a number between 8-28");
    }

//set of confirms asking user to confirm which types of characters they want used, assigning each possible response combo to a var//
var asknums = confirm("Do you want numbers in your password?");
var askspecs = confirm("Do you want special characters in your password?");
var askups = confirm("Do you want uppercase letters in your password?");
var asklows = confirm("Do you want lowercase letters in your password?");




let characters =[];
if(asknums){
    characters = characters + nums
}
if(askspecs){
    characters = characters + specs
}
if(askups){
    characters = characters + ups
}
if(asklows){
    characters = characters + lows
}
console.log(characters);

//function picking random element from appropriate string and iterating ## according to length prompt; random string is generated// 
function GeneratePassword(){
        let password = "";
        for(let i=0; i<length; i++){
        password = password + characters[Math.floor(Math.random() * characters.length)];
        };
        return password;}
    

let NewPassword = GeneratePassword()

document.getElementById("textArea").textContent = NewPassword



function MakePassword() {



}












