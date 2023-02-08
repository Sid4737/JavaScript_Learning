const array=[1,4,3,6,4,3]
let newarray=array.filter((element)=>{
return element>=4;
})
console.log(newarray);

console.log("====== reduce()=====");
let sum =  array.reduce( (value, runningTotal) => {
    return  value + runningTotal;
} );
console.log(sum);
let sum1 =  array.reduce( (value, runningTotal) => {
    return  value + runningTotal;
} );
console.log(sum1);