let arrayOfNames = []; //  Empty Array
console.log(arrayOfNames);
console.log(`========  ======= =========`);

let arrayOfNumbers = [5, 10, 4, 6, 7, 10, 9];
console.log(arrayOfNumbers);

console.log(`=====  Total number of elements available in array =====`);
let totalElements = arrayOfNumbers.length;
console.log(`Total elements in arrayOfNumbers ---> ${totalElements}`);
let typeOfArrayNumbers = typeof arrayOfNumbers;
console.log(`type of array --> arrayOfNumber --> ${typeOfArrayNumbers}`); //Non primitive data type hold more than 1 value

console.log(`======= Accessing array elements ======`);
let elementAtZeroIndex = arrayOfNumbers[0];
console.log(`Element at zero Index : ${elementAtZeroIndex}`);
console.log(`Element at five Index : ${arrayOfNumbers[5]}`);
console.log(`Total elements-1 : ${totalElements - 1}`);
console.log(
  `When provided value is greater than length = ${arrayOfNumbers[9]}`
);

arrayOfNumbers[2] = 100; // update or Modify value using index (UPDATED VALUE 100 instead of 4)
console.log(arrayOfNumbers);

let indexOf7 = arrayOfNumbers.indexOf(7);
console.log(`Index of element 7 is ---> ${indexOf7}`); // index number starts from 0

let indexOf10 = arrayOfNumbers.indexOf(10);
console.log(`Index of element 10 is ---> ${indexOf10}`); // if there are 2 value present then it takes
// first occurrence

console.log(`==== Traversing array by using for loop ===== `); // Index = 0,1,2
for (let index = 0; index < arrayOfNumbers.length; index++) {
  const element = arrayOfNumbers[index];
  console.log(element);
}

console.log(`==== Accessing only Even Indexed value ===== `); // Index = 0,1,2
for (let index = 0; index < arrayOfNumbers.length; index++) {
  if (index % 2 == 0) {
    const element = arrayOfNumbers[index];
    console.log(element);
  }
}

console.log(
  `======= Traversing array by using for loop in reverse order =========`
);
// Initialization    condition  update
let lastIndex = arrayOfNumbers.length - 1;
for (let index = lastIndex; index > 0; index--) {
  const element = arrayOfNumbers[index];
  console.log(element);
}

// Array of salaries
console.log(`=== Accessing salary of each employee =====`);
let arrayOfSalaries = [10000, 20000, 30000, 20000, 40000];
let sumOfSal = 0;
for (let index = 0; index < arrayOfSalaries.length; index++) {
  const element = arrayOfSalaries[index];
  console.log(element);
  sumOfSal = sumOfSal + element;
}
console.log(`Total salary of all employee is : ${sumOfSal}`);

console.log(`Update the array value`);
let arrayOfCount = [20, 40, 60, 80, 50, 10];
arrayOfCount[1] = 70; // 70 instead of 40 on index 1
console.log(arrayOfCount);

console.log(`========= Add element to the last by using Push method ()  =====`);
let arrayOfNum = [4, 5, 6, 8, 9, 1];
console.log(arrayOfNum);
arrayOfNum.push(3); // In this case we add 3,4 after 1 number
arrayOfNum.push(11, 22, 33); // In this way we can add multiple element 
console.log(arrayOfNum);

console.log(`====== adding element to starting by using unshift method() ======= `);
let arrayOfNu = [4, 5, 6, 8, 9, 1];
console.log(arrayOfNu);
arrayOfNu.unshift(99);
arrayOfNu.unshift(22 , 44, 55);
console.log(arrayOfNu);

console.log(`====== pop Method (removing last element)==== `);
var  arrayOfNumber = [4, 5, 6, 8, 9, 33];
let popResult = arrayOfNumber.pop();
console.log(popResult);
console.log(arrayOfNumber);

console.log(`======= shift method()===== used for removing start element ====`);
var  arrayOfNumber = [4, 5, 6, 8, 9, 33];
let shiftResult = arrayOfNumber.shift();
console.log(shiftResult);
console.log(arrayOfNumber);

console.log(`===== slice method()==== =======`);
var arrayOfNumber = [4, 5, 6, 8, 9, 33, 66];
let sliceResult = arrayOfNumber.slice(3);// slice method is used for print index number from 3 to end number
let sliceRes = arrayOfNumber.slice(2,6);// slice method takes the index number from 2 to 5 (in 2, 6)i.e it 
console.log(arrayOfNumber);             // does not take index number 6
console.log(sliceResult);
console.log(sliceRes);

console.log(`====== splice method =======`);
var arrayOfNumber = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNumber);
let spliceResult = arrayOfNumber.splice(3);// here in splice method deleted index 3 to end 
console.log(`==== After using splice(3) method ======`); // deleted number will be printed
console.log("Array after deleting elements", arrayOfNumber);
console.log("Total deleted elements :", spliceResult);

console.log(`====== after using splice(2, 3) method ====== `);
var arrayOfNumber = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNumber);
let sliceRest = arrayOfNumber.splice(2, 3);
console.log(`== After using splice(2, 3)method ==`);
console.log(arrayOfNumber);
console.log( `Total deleted elements :`, sliceRest);

console.log(`====== Inserting element in the Array =======`);
var arrayOfNumber = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNumber);
 let spliceR = arrayOfNumber.splice(2, 0, 88);// here we insert element 88 before index 2 & no replacement
 console.log(arrayOfNumber); //hence we written (2, 0, 88) hence we get empty array[]
 console.log(spliceR);
arrayOfNumber.splice(1, 0, 55, 99, 22);// inserting element (55,99,22) before index 1 in final Array.
console.log(arrayOfNumber);

console.log(`======  Replacing element in the Array ======`);
var arrayOfNumber = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNumber);
arrayOfNumber.splice(3, 1, 22);// here we replace element 8 by 22 by using splice as 
console.log(arrayOfNumber); //(Index 3 ,replace 1 element ,by 22 number hence we written splice(3, 1 , 22)

console.log(`====== Replacing element in the array when splice (2, 3, 99, 77)`);
var arrayOfNumber = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNumber);
arrayOfNumber.splice(2, 3, 99, 77);// here we replace on index 2 for 3 element(6,8,9) as (99,77)
console.log(arrayOfNumber);


console.log(`===============  for of loop ==================`);
var arrayOfNumber = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNumber);
for (const element of arrayOfNumber) {
    console.log(element);         // here we replace object by variable i.e arrayOfNumber

}                                      

console.log(`======= include() method ============`);
var arrayOfNumber = [4, 5, 6, 8, 9, 33, 66];
let isAvailable = arrayOfNumber.includes(9); // in this we check whether the value is present or not in
console.log(isAvailable);                    // in the Array (ex.if present then it print true if not it print false)


