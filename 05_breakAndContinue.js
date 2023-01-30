var index = 0;
while (index <= 10) {
  console.log(index);
  if (index == 5) {
    break;
  }
  index = index+1;
}

console.log(`======== break statement used in for loop =====`);
for (let index = 0; index < 20; index++) {
    console.log(index);
    if (index>=12) {
        break;
    }
}

console.log(`======== continue statement  ====== in for loop  ====`);
for (let index = 0; index < 6; index++) {
  if (index==3) {
    continue;
  }
  console.log(index);
}
console.log(`======== continue statement  ====== in while loop  ====`);
var index = 0;
while (index <=10) {
  console.log(index);
  index++;

  if (index==5) {
    continue;         // this statement does not affect on the output because it is written after log statement
  }
}