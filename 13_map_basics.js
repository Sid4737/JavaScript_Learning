let map= new Map();
map.set(22,"Anis");
map.set(11,"Saddam");
map.set(33,"Anil");
map.set(44,"Arif");

console.log("----------adding duplicate key-----------");
map.set(11,"Amir");
console.log(map);

console.log("---------Retrieving value-----------");
let value = map.get(33);
console.log(value);
console.log(map.get(99));


console.log("---------deleting record-----------");
map.delete(11);
console.log(map);


console.log("---------is key available-----------");
map.has(77);
console.log(map);


console.log("---------traversing over map collection-----------");
let setOfKeys =map.keys();
console.log(setOfKeys);
for (const key of setOfKeys){
    console.log(map.get(key));
}

class Person {
    constructor(rollNo, fullName, city, age, gender){
        this.rollNo = rollNo;
      this.fullName =   fullName;
      this.city = city;
      this.age = age;
      this.gender = gender;
    }
    details(){
        console.log(`Person Details: ${this.rollNo}  ${this.fullName}  ${this.city}  ${this.age}  ${this.gender}`);
    }
}
let personAnil = new Person(22,"Anil Mohite", "Pune", 31, "Male");
let personAnita = new Person(33, "Anita Golate", "Mumbai", 22, "Female");
let personBill = new Person(44, "Billgates", "USA", 67, "Male");

let mapOfPersons = new Map();
mapOfPersons.set(22, personAnil);
mapOfPersons.set(33, personAnita);
mapOfPersons.set(44, personBill);

let mapKeys = mapOfPersons.keys(); // 22   33   44
for (const key of mapKeys) {
     let personObject = mapOfPersons.get(key);
     personObject.details();

}