console.log("Q.1========Assignment==========");

var greatest_number= function (num1,num2) {
    var result =num1>num2 ? num1:num2
    return console.log(result);
}
//compare=greatest_numbe(10,10);
//console.log(greatest_number());
console.log("greatest number is");
greatest_number(10,-10);
console.log("greatest number is");
greatest_number(800,899);
console.log("========================================================");
var number_odd_even = function(num1){
    var result = num1%2==0   ? true : false
    console.log(result);
}
console.log("Result for no.29 is");
number_odd_even(29);
console.log("Result for no.44 is");
number_odd_even(44);
console.log("Result for no.0 is");
number_odd_even(0);
console.log("Result for no.101 is");
number_odd_even(101);

console.log("Q.2================================================");
var word_odd_even = function(arg1){
    var result= arg1.length%2==0 ? "even":"odd"
    //  value= arg1.length%2==0 ? "even":"odd"
    console.log(result);
}
console.log("1.Length of number of word in javascript is");
word_odd_even("javascript")

console.log("2.Length of number of word in developer is");
word_odd_even("developer")

console.log("2.Length of number of word in google is");
word_odd_even("google")