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

// Challenge #2 Active Salary Total

const activeTotalSalary = activeEmployees.reduce((acc, {salary}) => acc + salary,0);

console.log(activeTotalSalary);

// Challenge #3 — Active Salary Per Department

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

// Challenge #4 Count Active Department

const countActiveDepartment = activeEmployees.reduce((acc, {department}) => {

  if (!acc[department]) {
    acc[department] = 1;
  } else {
    acc[department] += 1;
  }

  return acc;
}, {});

console.log(countActiveDepartment);

// Challenge #5 Highest Active Department

const highestDepartmentCount = Object.entries(countActiveDepartment)
  .reduce((acc,[department, count]) => {
    if(count > acc.count) {
      acc.department = department;
      acc.count = count;
    }

    return acc;
  },{department: '', count: 0});

console.log(highestDepartmentCount);

// Challenge #6 Count and Total Salary

const countNTotalSalaryDept = activeEmployees.reduce((acc, {department, salary}) => {
  if (!acc[department]) {
    acc[department] = {
      count: 1,
      totalSalary: salary
    }
  } else {
    acc[department].count += 1;
    acc[department].totalSalary += salary
  }

  return acc;

},{})

console.log(countNTotalSalaryDept);

// Challenge #7 Department Payroll Report

const payrollReport = activeEmployees.reduce((acc, {department, salary}) => {
  if (!acc[department]) {
    acc[department] = {
      count: 1,
      totalSalary: salary,
      totalAvgSalary: salary
    }
  } else {
    acc[department].count += 1;
    acc[department].totalSalary += salary
    acc[department].totalAvgSalary = acc[department].totalSalary / acc[department].count ; 
  }

  return acc;

},{})

console.log(payrollReport);

// Challenge #8 — Highest Average Salary Department

const highestAvgSalaryDept = Object.entries(payrollReport)
  .reduce((acc, [department,departmentData]) => {
    if(departmentData.totalAvgSalary > acc.averageSalary) {
      acc.department = department;
      acc.averageSalary = departmentData.totalAvgSalary;
    }

    return acc;
  },{
        department: '',
        averageSalary: 0
      })

  console.log(highestAvgSalaryDept);

  // Challenge #9 — Department Salary Classification
  
const deptSalaryClassification = Object.entries(payrollReport).reduce((acc, [department,deptData]) => {
   
    acc[department] = {
      averageSalary: deptData.totalAvgSalary,
      salaryLevel: deptData.totalAvgSalary >= 30000 ? "High":"Normal"
    }

  //  if(deptData.totalAvgSalary >= 30000) acc[department].salaryLevel = 'High'
  //  else acc[department].salaryLevel = 'Normal';
   

   return acc;
},{})

console.log(deptSalaryClassification);

// Challenge #10 — Department Payroll Status

const payrollStatus = Object.entries(payrollReport).reduce((acc,[department,deptData]) => {
  
    acc[department] = {
      totalSalary: deptData.totalSalary,
      employeeCount: deptData.count,
      status: deptData.count >= 3 ? 'Large Payroll':'Small Payroll'
    }

  return acc;
},{})

console.log(payrollStatus);


