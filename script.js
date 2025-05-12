/**
 * Converts an integer to a Roman numeral.
 *
 * @param {number} num The integer to convert.
 * @returns {string} The Roman numeral representation of the integer.
 *
 * Input range: 0 <= num <= 100000
 */
function intToRoman(num) {
  // Define the mapping of Roman numerals to their integer values, including subtractive cases.
  const romanMap = [
    ['M', 1000],
    ['CM', 900], // Added for optimization
    ['D', 500],
    ['CD', 400], // Added for optimization
    ['C', 100],
    ['XC', 90], // Added for optimization
    ['L', 50],
    ['XL', 40], // Added for optimization
    ['X', 10],
    ['IX', 9],  // Added for optimization
    ['V', 5],
    ['IV', 4],  // Added for optimization
    ['I', 1]
  ];

  let result = '';

  // Iterate through the mapping and subtract the largest possible values from the input number.
  for (let i = 0; i < romanMap.length; i++) {
    const [symbol, value] = romanMap[i];
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
}
