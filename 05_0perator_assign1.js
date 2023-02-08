console.log("=================================");
console.log("word length of javascript:");
var greet=("javascript");
console.log(greet.length);
console.log("word length of google:");
var greet=("google");
console.log(greet.length);
console.log("word length of developer");
var greet=("developer");
console.log(greet.length);


 WordLengthSquare = function (word) {
    var wordLength =word.length;
    return wordLength *wordLength;
}

console.log("Square of word length javascript is===",WordLengthSquare("javaScript"));
console.log("Square of word length google is===",WordLengthSquare("Google"));
console.log("Square of word length developer is===",WordLengthSquare("Developer"));

console.log("I am angular developer");
var string ="I am angular developer";
var abc =(string.length);
console.log("length of given string",abc);
var result = string.split(" ");
//console.log(result);
var xyz = result.length;
console.log("length of given string==",xyz);
var resultDivide = abc/xyz;
console.log("Result of -- length of string divides number of words",resultDivide);

var product = abc*xyz
console.log("Result of--length of string*number of words string is",product);

console.log("===========================================================");
console.log("string:I Am Angular Developer");
var givenstringLength=function(){
    var givenstringLength="I Am Angular Developer".length;
    var result="I Am Angular Developer".split(" ")

    console.log(givenstringLength);
    console.log(result);
    console.log("word in string===========>".length);
    console.log(" word length divide by total in string .....>", givenstringLength/result.length);
    console.log(" string length multiply by total word .....>", givenstringLength*result.length);
}
givenstringLength()