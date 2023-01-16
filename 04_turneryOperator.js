
// If SSC Marks greater than or equal to 35 then pass or fail

var sscMarks = 34;
var resultPassOrFail = sscMarks>=35 ?  "Pass"  : "Fail";
console.log(`Result is ${resultPassOrFail}`);

console.log("======== Conditional check with Function Expression========");
      
    var sscResult = function(sscMarks) {
        //var resultPassOrFail = (sscMarks>=35  &&  !(sscMarks>100))  ?  "Pass"  : "Fail";
        //var resultPassOrFail = (sscMarks>=35  &&  (sscMarks<100))   ?  "Pass"  : "Fail";
        var resultPassOrFail = (sscMarks < 0 || sscMarks > 100) ? "Invalide data" : (sscMarks>35) ? "Pass" : "Fail";
        return resultPassOrFail;
     }
       console.log(`Result is 39 ${sscResult(39)}`); // valid value
       console.log(`Result is 30 ${sscResult(30)}`); // valid value
       console.log(`Result is 45 ${sscResult(45)}`);
       console.log(`Result is 65 ${sscResult(65)}`);
       console.log(`Result is 1200 ${sscResult(1200)}`);// Invalid value
       console.log(`Result is "Ten" ${sscResult("Ten")}`);// Invalid value
       console.log(`Result is -10 ${sscResult(-10)}`);// Invalid value
       console.log(`Result is null ${sscResult(null)}`);
       console.log(`Result is undefined ${sscResult(undefined)}`);
       console.log("=============== Invalid data & valid data ================");
       var hscMarks = 200;
       var resultPassOrFail = (hscMarks < 0 || hscMarks > 100) ? "Invalid data" : ((hscMarks>=35) ? "Pass" : "Fail")
       console.log(`Result of 200 is ${resultPassOrFail}`);

       console.log(`=========== Duble equal(==) =====`);
      var num1 = 10;
      var num2 = "10";
      console.log(typeof num1);
      console.log(typeof num2);
      console.log(typeof '100');

      var result = num1==num2 ? "Equal" : "Not equal";
      console.log(`num1==num2 result is ==> ${result}`);// Result is equal because it converts string to number 
      console.log(`========== Triple equal (===) ===`);
      var res = num1===num2 ? "Equal" : "Not equal";
      console.log(`num1===num2 result is ===> ${res}`);// because it requires same datatype to conclude the result



      