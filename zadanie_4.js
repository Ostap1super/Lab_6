function calculateONP(expression) {
  const stack = [];
  const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
    '^': (a, b) => Math.pow(a, b),
  };

  expression.split(' ').forEach((token) => {
    if (token in operators) {
      const [b, a] = [stack.pop(), stack.pop()]; // kolejność argumentów jest ważna!
      stack.push(operators[token](a, b));
    } else {
      stack.push(parseFloat(token));
    }
  });

  return stack.pop();
}

// przykładowe użycie:
const expression = '3 2 5 * +';
const result = calculateONP(expression);
console.log(result); // 13