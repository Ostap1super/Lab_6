function checkBrackets(str) {
  const stack = [];
  const openBrackets = ['(', '[', '{'];
  const closeBrackets = [')', ']', '}'];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const openIndex = openBrackets.indexOf(char);

    if (openIndex !== -1) {
      stack.push(char);
    } else {
      const closeIndex = closeBrackets.indexOf(char);
      if (closeIndex !== -1 && stack.length > 0) {
        const lastOpen = stack.pop();
        if (openBrackets.indexOf(lastOpen) !== closeIndex) {
          return false;
        }
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}




