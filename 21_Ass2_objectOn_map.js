console.log("Assignment on forEach() Method");
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) }
 const emp_Sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_Monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_Vinayak = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_Mahesh = new Employee(99, "Mahesh", "HR", 85000, "Infy");
console.log("==============on map=========");
const map_Employees=new Map();
map_Employees.set(22,emp_anil);map_Employees.set(33,emp_radha)
map_Employees.set(55,emp_Rushi);map_Employees.set(66,emp_Sonali)
map_Employees.set(77,emp_Monika);map_Employees.set(88,emp_Vinayak)
map_Employees.set(99,emp_Mahesh )
map_Employees.forEach((key,value)=>{
    console.log(key,value);
})

 array=[emp_anil, emp_radha ,emp_Rushi,emp_Sonali,emp_Monika,emp_Vinayak, emp_Mahesh]
array.forEach(Employee=>{
    console.log(`${Employee.emp_id}====>  Name:${Employee.emp_name}  Dept:${Employee.emp_id}   Company:${Employee.emp_company}   Salary:${Employee.emp_salary}`);
})