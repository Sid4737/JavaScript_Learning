console.log("Name: Anis Maneri");
console.log("Assignment :2");
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;

    }

}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_Radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_Rushi = new Employee(55, "Rushi", "Finance", 47000, "TCS");
const emp_Sonali= new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_Monika= new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_Vinayak= new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_Mahesh = new Employee(99, "Mahesh", "HR", 85000, "Infy");
console.log("1.========working in TCS========");
const array_Employess=[emp_anil,emp_Radha, emp_Rushi,emp_Sonali, emp_Monika,emp_Vinayak,emp_Mahesh]
for (const Employee of array_Employess) {
    if (Employee.emp_company=="TCS") {
        console.log(`Employee Name: ${Employee.emp_name}   company: ${Employee.emp_company}`);
    }
}
console.log("2.=======Working In Finance Dept.========");
for (const Employee of array_Employess) {
    if (Employee.emp_dept=="Finance") {
        console.log(`Employee Name: ${Employee.emp_name}   company: ${Employee.emp_company}`);
    }
}
console.log("=========Name start with R=========");
for (const Employee of array_Employess) {
    if (Employee.emp_name.startsWith('R')) {
        console.log(`Employee Details: ${Employee. emp_id} ${Employee.emp_name} ${Employee.emp_dept} ${Employee.emp_salary} ${Employee. emp_company} `);
    }
}
console.log("=====salary Greater than 70000========");

for (const Employee of array_Employess) {
    if (Employee.emp_salary>70000) {
        console.log(`Employee Name: ${Employee.emp_name}    company: ${Employee.emp_company}   salary:${Employee.emp_salary}`);
    }
}
console.log("=====salary Greater than equal to  50000======");

for (const Employee of array_Employess) {
    if (Employee.emp_salary>=50000 && Employee.emp_dept=="IT") {
        console.log(` Emp Id: ${ Employee.emp_id} Employee Name: ${Employee.emp_name}    company: ${Employee.emp_company}   salary:${Employee.emp_salary}`);
    }
}
console.log("======from Company Infy======");
for (const Employee of array_Employess) {
    if (Employee.emp_company=="Infy") {
        console.log(` Emp Id: ${ Employee.emp_id} Employee Name: ${Employee.emp_name}    company: ${Employee.emp_company}   salary:${Employee.emp_salary}`);
    }
}
 