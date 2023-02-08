let arrayOfFruits = ["Banana", "Orange", "Apple", "Mango", "water Melon"];
console.log(arrayOfFruits);
console.log(arrayOfFruits.shift());
console.log(arrayOfFruits.pop());
console.log("========Q.2 add element papaya before the element banana and then log array on console===============");
const arrayOfFruits1 = ["Banana", "Orange", "Apple", "Mango", "water Melon"];
arrayOfFruits1.unshift("papaya");
console.log(arrayOfFruits1);
console.log("========Q.3 Remove mango from array ==============");
//delete arrayOfFruits[3];
 const previousFourElementOfTheArray = arrayOfFruits1.splice(4, 1); 
console.log(arrayOfFruits1); // [1, 3, 4] console.log(previousSecondElementOfTheArray); // [2]
console.log("========Q.4 add element or insert an element pineapple at last position ==============");
arrayOfFruits1.push(" pineapple");

console.log(arrayOfFruits1);
console.log("5.======Insert Dragon Fruit before Water melon====>>");
arrayOfFruits1.splice(4,0,"Dragon Fruit");
console.log(arrayOfFruits1);
console.log("6.======Replace Orange with Kiwi===================>>");
arrayOfFruits1.splice(2,1,"Kiwi");
console.log(arrayOfFruits1);
console.log("7.====Log Elements starting FromPositin 1 to 4========>>");
arrayOfFruits1.splice(4,3);
console.log(arrayOfFruits1);
console.log("8.======Last 3 elements=====================>>")

let arrayOfFruits2=["Banana","Orange","Apple","Mango","Water Melon"];
arrayOfFruits2.splice(0,2);
//arrayOfFruits1.splice(0,3,4);
console.log(arrayOfFruits2);``