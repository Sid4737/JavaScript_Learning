
var numAdd = 10 + 40; // 50
var strAdd = "Pooja " +  70;
console.log(`strAdd is : ${strAdd}`);

console.log(` + operator can do the type conversion as well from string to number `);

var numStr = "100";
var num = + numStr;  // Explicit conversion
console.log(`typeof numStr is : ${typeof numStr}` );
console.log(`typeof num  is : ${typeof num}` );

var numStr = "Rahul";
var num = + numStr;
console.log(`typeof ${numStr} is : ${typeof numStr}`);
console.log(`typeof ${num} is : ${typeof num}`);


console.log(`== comparison of ${20 == "20"}`); // Implicit conversion
var myNumber = 77;
console.log(`myNumber value is ${myNumber} & its type is : ${typeof myNumber}`);
var strMyNumber = myNumber.toString();
console.log(`strMyNumber value is ${strMyNumber} & its type is : ${typeof strMyNumber}`);
