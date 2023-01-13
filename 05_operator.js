console.log(10 + 10);
console.log(10 + 100.23);

var num1 = 200, num2 = 400;
var result = num1 + num2;
console.log(`Addition Result is : ${result}`);
var result = num2 - num1;
console.log(`Substraction Result is : ${result}`);
var result = num1 * num2;
console.log(`Multiplication Result is : ${result}`);
var result = num2 / num1;
console.log(`Division Result is : ${result}`);

console.log("========Module operator======");
var num1 = 100;
var num2 = 50;
var result = num1 % num2;
console.log(`Remainder result is : ${result}`); 

console.log("==========Incrementoperator========" );
var num1 = 10;
var num2 = 4;
var incr = ++ num1;
var decr = -- num2;
console.log(`Increment result : ${incr} & Decrement result : ${decr} `);

console.log("=======Compound substaction=======");
var num1 = 100;
var num2 = 50;
num1-=num2; //num1 = num1 - num2
console.log(`Compound substaction : -= ${num1}`);
console.log("==================");
var num1 = 100;
var num2 = 50;
num1+=num2;
console.log(`Compound addition : += ${num1}`);
console.log("==================");
var num1 = 100;
var num2 = 50;
num1*=num2;
console.log(`Compound multiplication : *= ${num1}`);
console.log("==================");
var num1 = 100;
var num2 = 50;
num1/=num2;
console.log(`Compound division : /= ${num1}`);
console.log("==================");
var num1 = 100;
var num2 = 50;
num1%=num2;
console.log(`Compound modulus : %= ${num1}`);

console.log("===========Unary operator==========");
var num3 = 10;
var result =  num3++;  // num3 = num3 +1;
console.log(`Increment operator result is ${result}`);

var num5 = 5;
var result = --num5 //num5 - 1;
console.log(`Decrement operator is ${result}`);

console.log("========= Comparison operator ==========");

var num1 = 10;
var num2 = 5;
var num3 = 10;
var result = num1 > num2;
 console.log(`> operator greater than ${result}`);

 console.log(`> operator greater than ${num1 > num3}`);

 var result = num1 < num2;
 console.log(` < operator less than ${result}`);

 var result = num1 >= num3;
 console.log(`>= operator greater than or equal to is ${result}`);

console.log(` <= operator less than or qual to is ${num1 <= num3}`);

console.log(` whether the given number is even or odd : ${11 % 2}`);






