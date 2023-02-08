console.log(1);
console.log(2);
console.log(3);
console.log(4);

console.log(10);

//initialization:1    update by 1;      condition<=10


for (var test = 1; test <=10;  test++) { //test=1 2 3
    console.log(test); // 1 2 3
    
}
// 0 2 4 6 8 10
for (let index = 0; index <=10; index = index+2) {   //index++....index=index+2
   console.log(index);
   
    
}
// WAP to print number from 50 to 40 by decrementing by 1
for ( index = 50; index > 40; index--) {  // 51 52 53
    console.log(index); // 50 51 52
    
    
}
console.log("===================================================");
//WAP to find first 15 odd number 
// initialization .index=1; condition index<30; update index=index+2

for (let index = 1; index < 30; index= index+2) {
    console.log(index);
    
}
for (let index = 1; index < 15; index= index+2) {
    console.log(index);
    
}
console.log("===================================================");
//WAP to find first 43 odd numbers
var countEven = 0;// 2
for (let index = 1; index < 1000; index++) {//1 2
    if (index%2!=0) {
        console.log(index);
        countEven= countEven + 1;
        if (countEven==43) {
            break;
        }
        
    }
    
}