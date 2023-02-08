let variable_nam = "";
let objectSachin = {
    fullName: "Anis Maneri",
    city: "jath",
    age: 42,
    isMarried: true
}
console.log(objectSachin);
console.log("---------------------------");
let variable_name = "pune";
let person = {
    fullName: "Anis Maneri",
    city: "jath",
    age: 42,
    isMarried: true,
    address: {
        street: "AS CLUB",
        pin_code: 342456,
        city: "pune",
        state: "MH"
    },
    eat:function () {
        console.log("I am vegetarian");
        
    },walk: function () {
        console.log("I do walk everyday");
        
    },
    details:function () {
        let personDetails = 'Details are :${this.fullName}';
        return personDetails;
    }
}
let pDetail = person.details();
console.log(person.details());
console.log("-----------------------------------------------");
person.pincode = 416412;

person.professional = "Angular Developer";

person.fullName = "Anis Maneri";
person.pincode = 416412;

person.eat();
person.walk();
console.log(typeof person);
console.log(person.address);
console.log(person.address.street);
person.address.landmark =" Near main Road";
console.table(person);
console.log(person.city);
console.log(person['age']);
let personfullName = person.fullName;
console.log(personfullName);
console.log(person.fullName);
