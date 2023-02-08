console.log("Name:Anis Maneri");
console.log("Assignment:2");
console.log("Q1======Write Arrow Function========");
let show=() =>{
    console.log("Good Evening,Today is Sunday");
}
show();
console.log("Q2.a=====pass 3 Argument with no return Value do Multiplication =====");
console.log("value is 5,5,2");
let multilpy=(num1,num2,num3)=>{
console.log(num1*num2*num3);
}
multilpy(5,5,2)
console.log("Q2.b==== assign one arg. as a default value=====");
console.log("value is 10,4,5");
let multilple=(num1,num2,num3=5)=>{
    console.log(num1*num2*num3);
    }
    multilple(10,4)

   console.log("Q3======add 100,100,200,349,756 andgiven string====="); 
   let sum1=(v1,v2,v3,v4,v5)=>{
    return v1+v2+v3+v4+v5;

   }
   console.log(sum1 (100,100,200,349,756));
   console.log(sum1("Iam","learning","ES6","features","in depth"));