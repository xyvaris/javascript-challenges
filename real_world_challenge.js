const employees = [
  { name: "John", department: "IT", salary: 35000, status: "active" },
  { name: "Maria", department: "HR", salary: 42000, status: "active" },
  { name: "Pedro", department: "IT", salary: 38000, status: "inactive" },
  { name: "Anna", department: "Finance", salary: 45000, status: "active" },
  { name: "Mark", department: "IT", salary: 50000, status: "active" },
  { name: "Lisa", department: "HR", salary: 32000, status: "inactive" }
];

const activeEmployees = employees
  .filter(({salary, status}) => salary >= 40000 && status === 'active')
  .map(({name}) => name);

console.log(activeEmployees);

const totalSalaryDeptIT = employees.reduce((acc, {department, salary, status}) => {
  if(department === 'IT' && status === 'active') {
    acc += salary;
  }

  return acc;
},0)

console.log(totalSalaryDeptIT);

// Object Accumalator

const totalSalaryPerDeptActive = employees
  .reduce((acc, {department, salary, status}) => {
  if(!acc[department]) {
    acc[department] = 0

  }

  if (status === 'active') {
    acc[department] += salary;
  }

  return acc;
},{})

console.log(totalSalaryPerDeptActive);


const countActiveDept = employees
  .reduce((acc, {department, status}) => {
  if(!acc[department]) {
    acc[department] = 0
    
  }

  if (status === 'active') {
    acc[department] += 1;
  }

  return acc;
},{})


console.log(countActiveDept);

// Get the hight count of active using Object.entries and forEach

let currentActive = 0;
let dept = '';
Object.entries(countActiveDept).forEach(([department, count]) => {

  if(count > currentActive) {
    currentActive = count;
    dept = department;
  }

})

console.log(dept);

console.log(currentActive,dept);

// Get the hight count of active using Object.entries and reduce

const highestDepartment = Object.entries(countActiveDept)
  .reduce((highest, [department, count]) => {

    // ikaw dito

  }, []);

console.log(highestDepartment);
