const employees = [
  { name: "Luffy", department: "IT", salary: 30000, active: true },
  { name: "Zoro", department: "HR", salary: 25000, active: true },
  { name: "Nami", department: "IT", salary: 40000, active: false },
  { name: "Sanji", department: "Finance", salary: 28000, active: true },
  { name: "Robin", department: "IT", salary: 35000, active: true },
  { name: "Usopp", department: "HR", salary: 22000, active: false }
];

const employeeInfo = employees.reduce((acc, {department, salary, active, name}) => {
  if(!acc[department]) {
    acc[department] = {
      active: {
        employees: [],
        payroll: 0
      },
      inactive: {
        employees: [],
        payroll: 0
      }
    }
  }

  if (active) {
    acc[department].active.employees.push(name);
    acc[department].active.payroll += salary;
  } else {
    acc[department].inactive.employees.push(name);
    acc[department].inactive.payroll += salary;
  }

  return acc;
},{});

console.log(JSON.stringify(employeeInfo, null, 2));
