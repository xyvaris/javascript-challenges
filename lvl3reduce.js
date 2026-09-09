const employees = [
  { name: "Luffy", department: "IT", salary: 30000, active: true },
  { name: "Zoro", department: "HR", salary: 25000, active: true },
  { name: "Nami", department: "IT", salary: 40000, active: false },
  { name: "Sanji", department: "Finance", salary: 28000, active: true },
  { name: "Robin", department: "IT", salary: 35000, active: true },
  { name: "Usopp", department: "HR", salary: 22000, active: false }
];

const getActiveInactive = employees.reduce((acc, {department, active, name}) => {
  if (acc[department]) {
    acc[department] = {
      active: [],
      inactive: []
    }
  }

  if(active) {
    acc[department].active.push(name);
  } else {
    acc[department].inactive.push(name);
  }

  return acc;

},{});

console.log(getActiveInactive);
