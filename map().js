
const array=[1,3,5,7,8,7]
const newarray=array.map((element)=>{
    if (element<=2) {
        return element+5;
    }
})
console.log(newarray);