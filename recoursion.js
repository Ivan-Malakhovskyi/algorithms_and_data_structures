const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

const fibonacci = (n) => {
  if (n <= 1) return n;
  //   debugger;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// console.log(fibonacci(6));

//! WRONG
function wrongRec() {
  wrongRec();
}

function factorial1(n) {
  console.log("Виклик функції factorial з n = ", n);
  if (n === 1) {
    console.log("Базовий випадок, n = 1, повернення 1");
    return 1;
  } else {
    const result = n * factorial1(n - 1);
    console.log("Повернення результату для n = ", n, ": ", result);
    return result;
  }
}

// console.log(factorial1(5));

function fibonacciIterative(n) {
  if (n <= 1) {
    return n;
  }
  let a = 0,
    b = 1;

  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}

// Тестуємо функцію
console.log(fibonacciIterative(10)); // Виведе: 55
