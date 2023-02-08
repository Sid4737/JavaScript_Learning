console.log("Q1.************");
function variable(num1) {
    console.log("given number :45");
    if (num1 = num1%2== 0){
        console.log("no Is Even");

    }
    else{
        console.log("No Is Even");
    }
}
variable(45);
variable(70);
variable(67);
variable(98)

//OR simple

var word1 =function (num2) {
    console.log("given number:70");
    var word1 = num2%2 == 0 ? "EVEN":"ODD"
    console.log(word1);
    
}
word1(70);

var word2 =function (num3) {
    console.log("given number:67");
    var word2 = num3%2 == 0 ? "EVEN":"ODD"
    console.log(word2);
    
}
word2(67);

var word3 =function (num4) {
    console.log("given number:98");
    var word3= num4%2 == 0 ? "EVEN":"ODD"
    console.log(word3);
    
}
word3(98);

console.log("Q2.==========================================");
var result = function () {
    var age =18;
    console.log("Age=18");
    if(age>=18){
        console.log("Eligible For Vote");
    }else{
        console.log("Not Eligible");
    }

var age =20;
console.log("Age=20");
if(age>=18){
    console.log("Eligible For Vote");
}else{
    console.log("Not Eligible");
}
var age =17;
console.log("Age=17");
if(age>=18){
    console.log("Eligible For Vote");
}else{
    console.log("Not Eligible");
}
var age =40;
console.log("Age=40");
if(age>=18){
    console.log("Eligible For Vote");
}else{
    console.log("Not Eligible");
}
}
result()  

console.log("Q3.*********");
 var home=function(){
    console.log("Given String: JavaScript-ES6");
    var string="JavaScript-ES6";
    console.log("String Length:", string.length);
    var stringlength=14
    if(stringlength>=10){
         console.log("String contain More than 10 character");
        }else{
            console.log("string has not more than 10 character");
        }
     }
      home()

console.log("Q4.======================================");

var length=function(){
    console.log("String Is: JavaScript Language");
    var value1=1;
    var value2=2
    if(value1<=value2){
        console.log(" string start with word java:yes");
    }
    
    else{
        console.log("no");
    }
     }
     length()