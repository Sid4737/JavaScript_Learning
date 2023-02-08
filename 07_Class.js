
class Employee {
  constructor(name, id, age, city) {
    this.name = name;
    this.id = id;          // this is reference variable which will point to the current object 
    this.age = age;        // this is a Data members
    this.city = city;
  }
    details(){
        console.log(this.name, this.id, this.city, this.age);  // This is Member function
    }
}
let empSmith = new Employee("Smith", 33, 26, "Delhi");
let empJay = new Employee("Jay", 3000, 21, "Pune");
let empBill = new Employee("Billgates", 5000, 58, "USA");
empSmith.details();
empJay.details();
empBill.details();


console.log(`===== Access the property of an object class =========`);
console.log(empBill.name, empBill.age, empBill.city, empBill.id);


console.log(`====   travers =========   ================`);
function traverseObject(empJay) {
    for (const key in empJay) {
        if (Object.hasOwnProperty.call(empJay, key)) {
            const element = empJay[key];
            console.log(key, element);
        }
    }
}
let emplJay = new Employee("Jay", 7000, 36, "Pune");
console.log(emplJay);