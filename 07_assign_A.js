console.log("Q1.string:===========================>");

console.log("String:I am very Good IT Developer");

var mystring = "I am very Good IT Developer"
var vowelsLoweCase = "aeiou";
var vowelUpperCase = "AEIOU";
var vowelsCount = 0;
for (let index = 0; index < mystring.length; index++) {
    var char = mystring.charAt(index);
    var isLowerAvailable = vowelsLoweCase.includes(char);
    var isUpperAvailable = vowelUpperCase.includes(char);
    if (isLowerAvailable || isUpperAvailable) {
        vowelsCount = vowelsCount + 1;
    }

} console.log(`vowels count: ${vowelsCount}`);


console.log("Q2.sum of cube from 1 to 5==========================>");
function word() {
    var sum = 0;
    for (let index = 1; index <= 5; index++) {
        var cube = index * index * index;

        sum += index * index * index;

    }
    console.log(sum);
}
word()

console.log("Q3.odd positon char and remove empty spaces========================>");
function oddPositionChar(argument){
console.log("String Is:",argument);
for (let index = 0; index < argument.length; index++) {
    var chh = argument.charAt(index);
       if (index%2!=0 && chh!=" ") {
        console.log(chh);
       
         }
}

}
oddPositionChar("Hard Work Always Pays Back")
oddPositionChar("Soon I Will be Angular It champ")