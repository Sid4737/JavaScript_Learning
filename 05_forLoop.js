// Print the numbers from 1 to 10
// Initialization     update     condition
console.log(`===== for loop statement =====`)
for (let index = 1; index <= 10; index = index + 1) {
  console.log(index);
}
// Print the numbers from 2 to 20
console.log(`======= print the number from 2 to 20 ====`);
for (let index = 2; index <=20; index = index + 1) {
  console.log(index);
}
// Print the numbers from 5 to 50
console.log(`======= print the number from 5 to 50 ====`);
for (let index = 5; index <= 50; index = index + 5) {
  console.log(index);
}
// Print the numbers from 45 to 5
console.log(`======= print the number from 45 to 5 ====`);
for (let index = 45; index >= 5; index = index - 5) {
  console.log(index);
}

console.log(`====== While loop =====================================`);
// print the number from 0 to 10
// Initialization = 0   condition <=10   update expression ++
var i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

console.log(`===  print the number from 50 to 5 by using while loop ====`);
// Initialization = 50    condition >=5     update expression = i-5
var i = 50;
while (i >= 5) {
  console.log(i);
  i = i - 5;
}

console.log(`===== Print the 7 table by using while loop =====`);
// initialization = 7     condition i<=70    update expression = (i= i+7) 
var i = 7;
while (i <= 70) {
  console.log(i);
  i = i + 7;
}

console.log(`===== print the number from 100 to 10 by using while loop  =====`);
// initialization i=100      condition = (i>=10)      update expression = (i = i-10)
var i = 100;
while (i >= 10) {
  console.log(i);
  i = i - 10;
}

console.log(`========  do while statement ==============`);
// print the number from 0 to 10
// Initialization = 0   condition <=10   update expression = ++
var index = 0;
  do {
     console.log(index);
     index = index + 1;
   } while (index <= 10);

   console.log(`====== print the reverse table from 70 to 7 by using do while statement by decrement 7 for each time =====`);
//print the number from 70 to 7
  var index = 70;
  do {
    console.log(index);
    index = index - 7;
  } while (index >= 7);

  