// Challenge #14 — Department Eligibility Report

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

const employeesData = activeEmployees.reduce((acc, {department, salary}) => {
  if (!acc[department]) {
    acc[department] = {
      employeeCount: 1,
      totalSalary: salary,
      averageSalary: salary
    }
  } else {
    acc[department].employeeCount += 1;
    acc[department].totalSalary += salary;
    acc[department].averageSalary = acc[department].totalSalary / acc[department].employeeCount;
  }

  return acc;
},{})


const eligibilityReport = Object.entries(employeesData).reduce((acc,[department, deptData]) => {
  acc[department] = {
    employeeCount: deptData.employeeCount,
    totalSalary: deptData.totalSalary,
    averageSalary: deptData.averageSalary,
    eligibility: deptData.employeeCount >= 2 && deptData.averageSalary >= 28000 ? "Eligible":"Not Eligible"
  }

  return acc;
},{});

console.log(eligibilityReport);




