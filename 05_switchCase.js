// get the day name by passing day number
// 1 - Monday
// 2 - Tuesday
// 3 - wednesday
// 7 - Sunday
console.log(`=========== By using If statement  ======`);
var dayNumber = 5;
if (dayNumber == 1) {
  console.log(`Today is Monday`);
}
if (dayNumber == 2) {
  console.log(`Today is Tuesday`);
}
if (dayNumber == 3) {
  console.log(`Today is Wednesday`);
}
if (dayNumber == 4) {
  console.log(`Today is Thursday`);
}
if (dayNumber == 5) {
  console.log(`Today is Friday`);
}
if (dayNumber == 6) {
  console.log(`Today is Saturday`);
}
if (dayNumber == 7) {
  console.log(`Today is Sunday`);
}  

console.log(`======= By using switch case statement =====`);
var dayNumber = 5;
switch (dayNumber) {
  case 1:
    console.log(`Today is Monday`);
    console.log(`Monday is the start day of the week`);
    break;
  case 2:
    console.log(`Today is Tuesday`);
    break;
  case 3:
    console.log(`Today is Wednesday`);
    break;
  case 4:
    console.log(`Today is Thursday`);
    break;
  case 5:
    console.log(`Today is Friday`);
    console.log(`Friday is my favorite day`);
    console.log(`Friday is good day for working`);
    break;
  case 6:
    console.log(`Today is Saturday`);
    break;
  case 7:
    console.log(`Today is Sunday`);
    console.log(`Sunday is weakly of day`);
    break;
  default:
    console.log(`Not valid value provided`);
    break;
}
console.log(`========= switch case statement by using function expression ======= `);

var monthData = function (monthNumber) {
  switch (monthNumber) {
    case 1:
      console.log(`This is January month`);
      break;
    case 2:
      console.log(`This is February month`);
      break;
    case 3:
      console.log(`This is March month`);
      break;
    case 4:
      console.log(`This is April month`);
      console.log(`My birthday is came in this month`);
      break;
    case 5:
      console.log(`This is May month`);
      break;
    case 6:
      console.log(`This is Jun month`);
      break;
    case 7:
      console.log(`This is July month`);
      console.log(`Heavy rainy season are there in this month `);
      break;
    default:
      console.log(`This is not valid data`);
      break;
  }
};
monthData(4);
monthData(7);
monthData(5); 
monthData(3);
monthData(9);               
