let arrayOfNames = [];//  Empty Array
console.log(arrayOfNames);
console.log(`========  ======= =========`);

let arrayOfNumbers = [5, 10, 4, 6, 7, 10, 9];
console.log(arrayOfNumbers); 

console.log(`=====  Total number of elements available in array =====`);
let totalElements = arrayOfNumbers.length;
console.log(`Total elements in arrayOfNumbers ---> ${totalElements}`);
let typeOfArrayNumbers = typeof arrayOfNumbers;
console.log(`type of array --> arrayOfNumber --> ${typeOfArrayNumbers}`);//Non primitive data type hold more than 1 value

console.log(`======= Accessing array elements ======`);
let elementAtZeroIndex = arrayOfNumbers[0];
console.log(`Element at zero Index : ${elementAtZeroIndex}`);
console.log(`Element at five Index : ${arrayOfNumbers[5]}`);
console.log(`Total elements-1 : ${totalElements-1}`);
console.log(`When provided value is greater than length = ${arrayOfNumbers[9]}`);

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
    if (index%2==0) {
        const element = arrayOfNumbers[index];
        console.log(element);
        }
}