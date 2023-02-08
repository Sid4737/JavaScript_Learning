const array_numbers=[20,31,40,25,23,11,29,9,60,2,11];
array_numbers.length;
console.log(array_numbers.length);
console.log("2.===First & Last Element OF array========>>");
console.log (array_numbers);
console.log("First Element:",array_numbers[0]);
console.log("Second Element:",array_numbers[10]);
console.log("3.====Log 3rd last element===============>>");
console.log("3rd last Element of Array:",array_numbers[8]);

var array=[20,31,40,25,23,11,29,9,60,2,11];
console.log("4.All Even Numbers From List:",array);
for (var i = 0;i < array.length; i++) {
   if (array[i]%2==0) {
      console.log(array[i]);
   }

}
console.log("5.All Odd Numbers From List:",array);
for (var i = 0;i < array.length; i++) {
   if (array[i]%2!=0) {
      console.log(array[i]);
   }
}

for (let index = 0; index < array.length; index++) {

}
console.log("6.Even Position Element from array======>>");
var array=[20,31,40,25,23,11,29,9,60,2,11];
for (let index = 0; index < array.length; index=index+2) {

 console.log(array[index]);

}
console.log("7.Odd Position Element from array======>>");
var array=[20,31,40,25,23,11,29,9,60,2,11];
for (let index = 1; index < array.length; index=index+2) {

 console.log(array[index]);

}
console.log("8.Sum Of All elements in array=========>>");
var array=[20,31,40,25,23,11,29,9,60,2,11];
 let sum=0;
for (let index = 0; index < array.length; index++){
   sum+=array[index];

}

console.log( sum);



var array=[20,31,40,25,23,11,29,9,60,2,11];
console.log("9.Multiple of 5 From List=============>>");
for (var i = 0;i < array.length; i++) {
   if (array[i]%5==0) {
      console.log(array[i]);
   }
}

console.log("10.115 Is available in Array===========>>");
console.log(array.includes(115));
console.log("11.23 Is available in Array===========>>");
console.log(array.includes(23));
