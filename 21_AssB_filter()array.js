console.log("Assignment B for filter() Method");

const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(`Array :  [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19] `);
const new_array = array_numbers.filter((element) => {
    return element > 50
})
console.log(`Numbers which greater than 50 : ${new_array}`);
const new_array1 = array_numbers.filter((element) => {
    return element % 2 == 0;
})
console.log(`All Even no.from Array :  ${new_array1}`);
const new_array2 = array_numbers.filter((element) => {
    return element % 2 != 0;
})
console.log(`All odd no.from Array :  ${new_array2}`);
const new_array3 = array_numbers.filter((element) => {
    return element % 5 == 0;
})
console.log(`All multiple of 5 :  ${new_array3}`);
console.log("Element between 20 to 50 :");
const new_array4 = array_numbers.filter((element) => {

    if (element>=20) {

        console.log(element);
    }
})