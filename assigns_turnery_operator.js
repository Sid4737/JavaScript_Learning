
 var num1 = 10;
 var num2 = 20;

var greaterThanResult = function (){
 var result = num1 > num2 ? "greater" : "smaller";
 return result;
}

 console.log( `Result is ===> ${greaterThanResult(num1 > num2)}`);
 console.log("===== ====== ====== ====== ====== ");

var isEvenOrOdd = function (value) {
      var evenOrOdd = value%2==0 ? "True" : "False";
      return evenOrOdd;
}
 console.log(`Result is ===> ${isEvenOrOdd(34)}`);
 console.log(`Result is ===> ${isEvenOrOdd(41)}`);
 console.log(`Result is ===> ${isEvenOrOdd(171)}`);
 console.log(`Result is ===> ${isEvenOrOdd(0)}`);