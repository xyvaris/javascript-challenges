const orders = [
  { product: "Keyboard", category: "Accessories", price: 1500 },
  { product: "Mouse", category: "Accessories", price: 800 },
  { product: "Monitor", category: "Display", price: 7000 },
  { product: "Headset", category: "Accessories", price: 2000 },
  { product: "Monitor", category: "Display", price: 5000 }
];

const result = orders.reduce((acc, current) => {

  if (acc[current.category]) {
    acc[current.category] = acc[current.category] + current.price;
  } else {
    acc[current.category] = current.price;
  }

  return acc;

}, {});

console.log(result);
