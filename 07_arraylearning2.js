console.log('======= Join method ========');
var arrayOfNumber = [4, 5, 6, 8, 9, 33, 66];
let joinResult = arrayOfNumber.join("|");// here we use (coma,pipe operator |,spaces to separate the array element)
console.log(joinResult);
console.log(typeof joinResult);

console.log(`===== two Array concatenation ======= `);
var arrayOfNumber = [4, 5, 6, 8, 9, 33, 66];
let arrayOfNames = ["Mony", "Jenny", "Shenny", "Tommy"];
const concatArray = arrayOfNumber.concat(arrayOfNames);
console.log(concatArray);

console.log(`===== three Array concatenation (Multiple array concatenation )======= `);
var arrayOfNumber = [4, 5, 6, 8, 9, 33, 66];
let arrayOfNams = ["Mony", "Jenny", "Shenny", "Tommy"];
let arrayOfCity = ["Pune", "Mumbai", "Bangalore", "Delhi"]
const concatenationOfArray = arrayOfNumber.concat(arrayOfNams,arrayOfCity );
console.log(concatenationOfArray);// In this way we cancat multiple array
console.log(typeof concatenationOfArray);

console.log(`====== Resize an Array =============`);
var arrayOfNumber = [4, 5, 6, 8, 9, 33, 66];
console.log(arrayOfNumber.length);
arrayOfNumber.length = 5; // we can increase or decrease the array length by using this formula.
console.log(arrayOfNumber);
console.log(arrayOfNumber.length);