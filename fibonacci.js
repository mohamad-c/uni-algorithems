
// const calculateFibonacci = (n) =>{
//   let a = 0, b = 1, c = n;

//   for(let i = 2; i<= n; i++){
//     c = a + b;
//     a = b;
//     b = c;
//   }

//   return c;

// }

// const f = calculateFibonacci(10)
// console.log(f);

const fibonacci = n => {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(40));