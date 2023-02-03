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