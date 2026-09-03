function squareSum(numbers){
  const newNum = numbers.map(n => n * n);
  // const total = newNum.forEach( n => n + n);

  return newNum;
  // if (total === num) return true; else return false;
}

console.log(squareSum([1,2]));
