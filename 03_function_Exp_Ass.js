console.log("Que.1_____________________");
var square = function(arg1){
    console.log("Square of",arg1," = ", arg1*arg1);
}
square(5);
square(6);
square(25);
square(100);
console.log("Que.2_____________________");
console.log("Type of function is:",typeof square);
console.log("Que.3_____________________");
var areaOfTriangle =function(arg1,arg2){
    var aot = (1/2)* arg1 * arg2;
    console.log(" Area of  triangle: 1/2 *", arg1," * ",arg2,"=",aot);
}
areaOfTriangle(45,34);
console.log("Que.4________________________");
var areaOfRectangle = function(arg1,arg2){
    var aor = arg1* arg2;
    console.log(" Area of rectangle:", arg1," * ",arg2,"=",aor);
}
areaOfRectangle(499,917);

console.log("Que.5________________________");
var swap_values = function (arg1,arg2){
    var temp;
    console.log("values_before_swapping");
    console.log("",arg1,arg2);
    temp = arg1;
    arg1 = arg2;
    arg2 =temp;
    console.log("values_after_swapping");
    console.log("",arg1,arg2);
}
swap_values("Virat", "Anushka");

swap_values(1000,2000);

console.log("Que.6________________________");

var given_string="JavaScript the most popular language";
console.log("JavaScript the most popular language");

var count=given_string.length;
console.log("Total character available in given string-:",count);
console.log("============================================");

var char=given_string.indexOf('S');
console.log("index character S-:",char);

console.log("============================================");

var index_lang =given_string .indexOf("lang");
console.log("The index of string 'lang'",index_lang);
console.log("============================================"); 



console.log("============================================");
var last_character =given_string.charAt(given_string.length-1);
console.log("Last character of string",last_character);

console.log("============================================");

var last_third =given_string .charAt(36-3)
console.log("Third last character is ",last_third);

console.log("============================================");
