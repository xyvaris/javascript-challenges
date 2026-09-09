const employees = [
  { name: "Luffy", department: "IT", salary: 30000, active: true },
  { name: "Zoro", department: "HR", salary: 25000, active: true },
  { name: "Nami", department: "IT", salary: 40000, active: false },
  { name: "Sanji", department: "Finance", salary: 28000, active: true },
  { name: "Robin", department: "IT", salary: 35000, active: true },
  { name: "Usopp", department: "HR", salary: 22000, active: false }
];

const payrollActive = employees.reduce((acc, {department, active, salary}) => {
  if(!acc[department]) {

    acc[department] = {
      count: 0,
      payroll: 0
    }

  }

  if(active) {
      acc[department].count += 1;
      acc[department].payroll += salary;
  }

  return acc;
},{})

console.log(payrollActive);
