const employees = [
  { name: "John", department: "IT", salary: 35000, status: "active" },
  { name: "Maria", department: "HR", salary: 28000, status: "active" },
  { name: "Pedro", department: "IT", salary: 42000, status: "inactive" },
  { name: "Anna", department: "Finance", salary: 38000, status: "active" },
  { name: "Mark", department: "IT", salary: 31000, status: "active" },
  { name: "Lisa", department: "HR", salary: 45000, status: "active" }
];

const isActiveEmployees = employees
  .filter(({status, department}) => status === 'active' && department === 'IT')
  .map(({name, salary}) => ({
    name, salary
  }));

const activeTotalSalary = employees.reduce((acc, {status, salary}) => status === 'active' ? acc + salary : acc,0);

const departmentSalaryTotals = employees.reduce((acc, {department, salary, status}) => {

  if (!acc[department]) {
    acc[department] = 0
  }

  if(status === 'active') {
    acc[department] += salary
  }
  return acc;
},{})

let highestSalary = 0;
let highestDepartment = ""

Object.keys(departmentSalaryTotals).forEach(dept => {

  let currentSalary = departmentSalaryTotals[dept]

  if (currentSalary > highestSalary) {
    highestSalary = currentSalary;
    highestDepartment = dept;
  }

})
console.log(highestDepartment);
