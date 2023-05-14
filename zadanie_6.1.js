function graWGoracegoZiemniaka(uczestnicy, element) {
  let kolejka = [];
  for (let i = 0; i < uczestnicy.length; i++) {
    kolejka.push(uczestnicy[i]);
  }

  while (kolejka.length > 1) {
    for (let i = 0; i < element; i++) {
      kolejka.push(kolejka.shift());
    }
    let odpada = kolejka.shift();
    console.log(`${odpada} odpada z gry.`);
  }

  console.log(`Zwycięzcą jest ${kolejka[0]}.`);
}

// przykładowe użycie
graWGoracegoZiemniaka(['Jan', 'Karol', 'Barbara', 'Anna', 'Zbigniew'], 3);