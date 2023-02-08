console.log("Assignment A map() method");
const array_numbers=[20,11,40,25,23,11,9,90,60,2,19];
let array_add=array_numbers.map((Element,index)=>{
    return Element+10;
})
console.log(`Array==>${array_numbers}`);
console.log("1.===Add 10 to Each element====");
console.log(array_add);
console.log("2.====Square to Each element====");

let array_add1=array_numbers.map((Element,index)=>{
    return Element*Element;
})
console.log( array_add1);
console.log("2.====Add index to Each element====");

let array_add2=array_numbers.map((Element,index)=>{
    return Element,index;
})
console.table( array_add2);