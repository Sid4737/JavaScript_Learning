console.log('======  Nested object ==========');
const student = {
  name: " Stew Jobs",
  age: 50,
  mark: {
    science: 70,
    maths: 90, // here mark is property {}data is value
    english: 87,
    add : function () {
        return this.science + this.maths + this.english;
    }
  },
   familyMemberName : ['Tony', 'Lonny', 'Sony', 'Jenny']
}


console.log(`=== Accessing nested object property ======`);
const scienceMark = student.mark.science;
console.log(scienceMark);

console.log(`====== Updating an Nested object property ======`);
student.mark.english = 97;

console.log(`==== Adding an Nested object property =====`);
student.mark.programming = 100;

console.log(`===== Deleting an Nested object property =====`);
// delete student.mark.english;

console.log(`===== Accessing an Nested object function ======`);
const totalMarks = student.mark.add();
console.log( `Total marks is : ${totalMarks}`);

console.log(`==== Accessing an Array in the nested object =====`);
console.log(student.familyMemberName);

console.log(`==== object entries =====`);
const billGates = {
  height: 6,
  weight: 70,
  age: 23,
  name: "Bill Gates",
}
console.log(Object.entries(billGates));
console.log(Object.keys(billGates));
console.log(Object.values(billGates));