const person ={
    name:"mohit",
    rollNo:1234
}
Object.freeze(person);
person.name="mohit sharma";//modification not considered as person object is freezed
person.street= "AS CLUB";//adding new property is not considered  as person object is freezed
console.log(person);

const arrayNumbers =[2,4,5,6,7];
//arrayNumbers =[]
Object.freeze(arrayNumbers);//immutable : we can not change the array values after creation or defining
//arrayNumber.push(99);//not allowed as object freezed
console.log(arrayNumbers);


const student ={
    name:"mohit",
    rollNo:1234
}
const address = {
    city:"pune",
    street:"AS CLUB"
}
let studentclone = Object.assign({}, student);// deep cloning will be performed
studentclone.name ="mohit sharma"
console.log( studentclone);
console.log(student);

let mergedObject = Object.assign({},student,address);
console.log( mergedObject);