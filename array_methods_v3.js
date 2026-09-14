const employees = [
  { name: "John", salary: 35000, status: "active" },
  { name: "Maria", salary: 42000, status: "active" },
  { name: "Pedro", salary: 38000, status: "inactive" },
  { name: "Anna", salary: 45000, status: "active" }
];

let extractNames = [];

employees.forEach(({name, salary, status}) => {
  if (status === 'active' && salary >= 40000) {
    extractNames.push(name);
  }
})

console.log(extractNames);

console.log(Object.entries(employees));

