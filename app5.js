// const employees = [
//   { name: "Luffy", department: "IT", salary: 30000 },
//   { name: "Zoro", department: "HR", salary: 25000 },
//   { name: "Nami", department: "IT", salary: 40000 },
//   { name: "Sanji", department: "Finance", salary: 28000 },
//   { name: "Robin", department: "IT", salary: 35000 }
// ];

// const deptIT = employees.filter(({department}) => department === 'IT');
// const deptItName = deptIT.map(({name}) => name);
// const totalItPayroll = deptIT.reduce((acc, {salary}) => acc + salary, 0);

// console.log(totalItPayroll);

const orders = [
  { customer: "Luffy", category: "Food", amount: 500 },
  { customer: "Zoro", category: "Equipment", amount: 1200 },
  { customer: "Nami", category: "Food", amount: 800 },
  { customer: "Sanji", category: "Equipment", amount: 700 },
  { customer: "Robin", category: "Books", amount: 300 },
  { customer: "Usopp", category: "Food", amount: 200 }
];

const result = orders.reduce((acc, current) => {
  if (acc[current.category]) {
    acc[current.category] = acc[current.category] + current.amount;
  } else {
    acc[current.category] = current.amount;
  }

  return acc;
},{});

console.log(result);
