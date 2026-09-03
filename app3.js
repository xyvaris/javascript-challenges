const employees = [
  { name: "Luffy", department: "IT", salary: 30000 },
  { name: "Zoro", department: "HR", salary: 25000 },
  { name: "Nami", department: "IT", salary: 35000 },
  { name: "Sanji", department: "Finance", salary: 28000 },
  { name: "Robin", department: "IT", salary: 40000 }
];

// A
const deptIT = employees.filter(({department}) => department === 'IT');
// B
const employeesIT = deptIT.map(({name}) => name);
// C
const avgSalaryIT = deptIT.reduce((acc, {salary}) => acc + salary ,0) / deptIT.length;
// D
const salaryStatus = employees.map(employee => ({
  ...employee,
  salaryLevel: employee.salary >= 35000 ? 'High':'Normal'
}))
// E
const highestPaid = salaryStatus.reduce((max, employee) => max.salary > employee.salary ? max : employee);
// const maxPaid = Math.max(...salaryStatus.map(item => item.salary));
console.log(highestPaid);
