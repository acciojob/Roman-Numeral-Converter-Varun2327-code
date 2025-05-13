function romanNumeralConverter(num) {
  const romanMap = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let ans = "";

  while (num !== 0) {
    for (let i in romanMap) {
      let [symbol, value] = romanMap[i];
      if (value <= num) {
        ans += symbol;
        num -= value;
        break;
      }
    }
  }

  return ans;
}
console.log(romanNumeralConverter(798));