const employees = [
  { name: "Luffy", department: "IT", status: "active", salary: 30000 },
  { name: "Zoro", department: "HR", status: "active", salary: 25000 },
  { name: "Nami", department: "IT", status: "active", salary: 35000 },
  { name: "Sanji", department: "Finance", status: "inactive", salary: 40000 },
  { name: "Robin", department: "HR", status: "active", salary: 28000 },
  { name: "Usopp", department: "IT", status: "inactive", salary: 22000 },
  { name: "Franky", department: "Finance", status: "active", salary: 32000 },
  { name: "Brook", department: "IT", status: "active", salary: 27000 }
];

const activeEmployees = employees.filter(({status}) => status === 'active');

console.log(activeEmployees);

const payrollReport = activeEmployees.reduce((acc, {department, salary}) => {
  if(!acc[department]) {
    acc[department] = {
      employeeCount: 1,
      totalSalary: salary,
      averageSalary: salary
    }
  }else {
    acc[department].employeeCount += 1;
    acc[department].totalSalary += salary
    acc[department].averageSalary = acc[department].totalSalary / acc[department].employeeCount;
  }

  return acc;
},{})

console.log(payrollReport);

// Challenge #12 — Department Salary Analysis

const deptSalaryAnalysis = Object.entries(payrollReport).reduce((acc, [department, deptData]) => {
  if (deptData.totalSalary > acc.totalSalary) {
    acc.department = department;
    acc.totalSalary = deptData.totalSalary
  }

  return acc;
},{
  department: '',
  totalSalary: 0
})

console.log(deptSalaryAnalysis);
