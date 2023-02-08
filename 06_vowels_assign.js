console.log("Q.1____________________________________________");
var givenString = "Good Morning IT Camp";
var vowelsLowerCase = "aeiou";
var vowelsUpperCase = "AEIOU";
var vowelsCount = 0;
for (let index = 0; index < givenString.length; index++) {
    var char = givenString.charAt(index);
    var isLowerAvailable = vowelsLowerCase.includes(char);
    var isUpperAvailable = vowelsUpperCase.includes(char);
    if (isLowerAvailable || isUpperAvailable) {
        vowelsCount = vowelsCount + 1;
    }
}
console.log(`Total Vowels count: ${vowelsCount}`);

console.log("Q.2_____________________________________________");

var countVowels = function (myString) {
    var myString = "I Love Javascript"
    var vowelsLowerCase = "aeiou";
    var vowelsUpperCase = "AEIOU";
    var vowelsCount = 0;
    for (let index = 0; index < givenString.length; index++) {
        var char = givenString.charAt(index);
        var isLowerAvailable = vowelsLowerCase.includes(char);
        var isUpperAvailable = vowelsUpperCase.includes(char);
        if (isLowerAvailable || isUpperAvailable) {
            vowelsCount = vowelsCount + 1;
        }
    }
    console.log(`Total Number of Vowels This string: ${vowelsCount}`);

}
countVowels("I Love Javascript");

console.log("Q.3_____________________________________________");

var rest = function () {
    var total = 0;
    for (let i = 0; i <= 10; i++) {
        total += i;
        console.log(total);

    }

}
rest()
console.log("Q.4_____________________________________________");
var function_add = function () {
    var sum = 0;
    var number = 5;
    for (let index = 1; index <= number; index++) {
        sum += index * index;
        console.log(sum);
    }

}
function_add()
console.log("Q.5_____________________________________________");
function evenPositionedChars(myString) {
    for (let index = 0; index < myString.length; index++) {
      //   console.log(index%2==0);
      if (index%2==0) {
        var chh = myString.charAt(index);
        console.log(chh);

      }
    

    }
    


}
evenPositionedChars("Hard work always pays back");
