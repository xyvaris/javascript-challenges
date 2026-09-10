const employees = [
  { id: 1, name: "Luffy", department: "IT", salary: 30000, active: true },
  { id: 2, name: "Zoro", department: "HR", salary: 25000, active: true },
  { id: 3, name: "Nami", department: "IT", salary: 40000, active: false },
  { id: 4, name: "Sanji", department: "Finance", salary: 28000, active: true },
  { id: 5, name: "Robin", department: "IT", salary: 35000, active: true },
  { id: 6, name: "Usopp", department: "HR", salary: 22000, active: false }
];

const findActive = employees.filter(({active}) => active === true);

console.log(findActive);

const highSalary = employees
  .filter(({salary}) => salary >= 30000)
  .map(({name}) => name);

console.log(highSalary);

const someInactive = employees.some(({active}) => active === true);

console.log(someInactive);

