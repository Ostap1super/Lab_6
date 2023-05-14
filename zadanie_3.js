function sprawdzPoprawnoscSymboli(symboli) {
  let stos = [];

  for (let i = 0; i < symboli.length; i++) {
    let symbol = symboli[i];

    if (symbol === '(' || symbol === '[' || symbol === '{') {
      stos.push(symbol);
    } else if (symbol === ')' || symbol === ']' || symbol === '}') {
      let symbolOtwierajacy = stos.pop();

      if ((symbol === ')' && symbolOtwierajacy !== '(') ||
          (symbol === ']' && symbolOtwierajacy !== '[') ||
          (symbol === '}' && symbolOtwierajacy !== '{')) {
        return false;
      }
    }
  }

  return stos.length === 0;
}

