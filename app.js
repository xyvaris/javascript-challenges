const users = [
  { id: 1, name: "Luffy", age: 22 },
  { id: 2, name: "Zoro", age: 25 },
  { id: 3, name: "Nami", age: 20 },
  { id: 4, name: "Sanji", age: 24 }
];

const age = users.filter(({age}) => age >= 23);
console.log(age);
const name = users.map(({name}) => name);
console.log(name);
const newProperty = users.map(user => ({
  ...user,
  isAdult: user.age >= 20
}))
console.log(newProperty);

