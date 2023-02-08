console.log("Assignment on filter() and reduce() Method");
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;

    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS")
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro")
const emp_Rushi = new Employee(55, "Rushi", "Finance", 47000, "TCS");
const emp_Sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const  emp_Monika  = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_Vinayak = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_Mahesh = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_emps=[emp_anil,emp_radha,emp_Rushi, emp_Sonali , emp_Monika , emp_Vinayak ,emp_Mahesh]
console.log("1.Employees From Wipro : ");
const new_array=array_emps.filter((Employee)=>{
    if (Employee.emp_company=="Wipro") {
        console.log(`Name : ${Employee.emp_name}  Company : ${Employee.emp_company}`);
    }
})
console.log("2.Employees From IT OR HR : ");
const new_array1=array_emps.filter((Employee)=>{
    if (Employee.emp_dept=="IT"||Employee.emp_dept=="HR") {
        console.log(`Name : ${Employee.emp_name}   Company : ${Employee.emp_dept}`);
    }
})
console.log("3.Employees whose id greater than 50 : ");
const new_array2=array_emps.filter((Employee)=>{
    if (Employee.emp_id>50) {
        console.log(`Name : ${Employee.emp_name}  Company : ${Employee.emp_id}`);
    }
})
console.log("4.Employees whose name statrs with A , V , M : ");
const new_array3=array_emps.filter((Employee)=>{
    if (Employee.emp_name.startsWith("A")||Employee.emp_name.startsWith("V")||Employee.emp_name.startsWith("M")) {
        console.log(`Name : ${Employee.emp_name} `);
    }
})

console.log("5.Average Salary Of All Employess: ");
const new_array4=array_emps.reduce((Employee,emp_salary)=>{
    return Employee.emp_salary+Employee.emp_salary;
})
  console.log();