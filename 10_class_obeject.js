 console.log("=========== in operator================");
//let isAvailable = "fullName" in mohitPerson;
//console.log(isAvailable);
//console.log("city" in mohitPerson);
//console.log("===========================");
 const mohitPerson =  {
    fullName: "Sachin Tendulkar",
    age: 42,
    "isMarried": true
}
 class Person{
    constructor(fullName, city, age, gender){
      this.fullName =   fullName;
      this.city = city;
      this.age = age;
      this.gender = gender;
    }
    
}
let sachin = new Person("Sachin Tendulkar", "Pune", 45, "Male");
let rohit = new Person("Rohit Shram", "Mumbai", 32, "Male");
console.log(sachin);
console.log(rohit);

console.log("============================================");
