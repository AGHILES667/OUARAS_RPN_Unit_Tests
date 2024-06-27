export function mainFunction(expression) {
  if (!expression) return 0;
  const parts = expression.split(' ');
  const stack = [];

  parts.forEach(part => {
    if (!isNaN(part)) {
      stack.push(parseFloat(part));
    } else {
      const b = stack.pop();
      const a = stack.pop();
      switch (part) {
        case '+':
          stack.push(a + b);
          break;
        case '-':
          stack.push(a - b);
          break;
        case '*':
          stack.push(a * b);
          break;
        case '/':
          stack.push(a / b);
          break;
        default:
          throw new Error(`Unknown operator: ${part}`);
      }
    }
  });

  return stack.pop();
}
