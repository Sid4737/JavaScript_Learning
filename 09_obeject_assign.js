let variable= "";
let teachers={
    fullName: "Anis Maneri",
    city: "jath",
    age: 42,
    professional:" Teacher",
    pincode : 416412,
    degrees:{
        Engineerig:"B.E Mechanical",

    },
    degree:function() {
        let teacherDegree = 'Teacher Degree are :CSC, Adv Computing';
        return teacherDegree;
    },
    Certificate:{
        certificate1:"Hacker Rank Participation",
        certificate2:"IFE Course",
        certificate3:"Adv Pgrogramming",
      },

}

let tDegree = teachers.degree();
console.log(teachers.degree());
console.log("=================================================================");
console.log(teachers);
console.table(teachers);
teachers.FullName="Anis Babu Maneri";
console.log(teachers.FullName);

console.log("contents write in function with Return:");
console.log(teachers.degrees);
console.table(teachers.degrees);
console.log(teachers. Certificate);

console.log("After Deleting One certificate:");
delete teachers.Certificate.certificate1;
console.table(teachers.Certificate);
console.log("After Adding New Property in certificate:");
teachers.Certificate.certificate3="Me First Rank"
console.table(teachers.Certificate);