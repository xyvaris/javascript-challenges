const products = [
  { id: 1, name: "Keyboard", price: 1500, stock: 5 },
  { id: 2, name: "Mouse", price: 800, stock: 0 },
  { id: 3, name: "Monitor", price: 7000, stock: 3 },
  { id: 4, name: "Headset", price: 2000, stock: 10 }
];

const stock = products.filter(({stock}) => stock > 0);
const productName = stock.map(({name}) => name);
const inStock = products.map(product => ({
  ...product,
  inStock: product.stock > 0
}));
const totalProducts = products.reduce((acc, {price}) => acc + price,0);

console.log(stock);
console.log(productName);
console.log(inStock);
console.log(totalProducts);




