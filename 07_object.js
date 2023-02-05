const person = {
  height: 6,               // if we does not write the key in ""(double code) then also it considered as a string
  weight: 70,
  age: 23,                // Always use if possible variable as "const" when u creating literal object
  name: "Bill Gates",
  speak: function () {
  console.log(`Hey I can speak English and Hindi`);          // here we add function as property in the object
  }
}
 console.log(typeof person);
 console.log(person);

console.log(`==== Accessing object properties using dot notation =======`);
 const personAge = person.age;                               // syntax for accessing object is 
 console.log(`Person age is : ${personAge}`);                //(objectName.property) this syntax is most used

 console.log(`==== Accessing object properties using square bracket notation =======`);
const personName =  person["name"];                         // this is one more syntax for accessing object 
console.log(personName);

console.log(`====== Adding an property into an object ======`);
person.company = "Microsoft";                          // in this way we can add more properties in object 
console.log(person);

console.log(`===== Updating an property into an object =====`);
person.age = 65;
console.log(person);

console.log(`===== Deleting an property into an object =====`);
delete person.weight;
console.log(person);

console.log(`======= Accessing function in an object =======`);
person.speak();

console.log(`===== Creating an empty object ======`);
const mobile = {
                        // empty object nothing but there is no any value inside the object
}
 mobile.company = "Micromax";
 mobile.camera = "20 px";
 console.log(mobile);


 person.walk = function () {
     console.log(`Hey i can walk and run man`);
 }
  console.log(person); // we adding function in object also