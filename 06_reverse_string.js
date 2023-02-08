var myName="Mohit";

//10 to 0
var lengthStr = myName.length-1;//
var reverseStr ="";
for (let index =  lengthStr; index >=0; index--) {
    console.log(myName.charAt(index));
    reverseStr= reverseStr + myName.charAt(index)
    
}
console.log(reverseStr);

// 0+1+2+3+4+5+6
var add =0;// 0 1 3 6
for (let index = 0; index <= 5; index++) {
    add = add + index; // 3+3=6

    
}
console.log(`Addition is :${add}`);