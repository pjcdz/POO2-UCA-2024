const numeroRomano = require('./numeroRomano.js');

test('Conversion of 1 to Roman numeral should be "I"', () => {
    expect(numeroRomano(1)).toBe("I");
});

test('Conversion of 6 to Roman numeral should be "VI"', () => {
    expect(numeroRomano(6)).toBe("VI");
});

// test('Conversion of 9 to Roman numeral should be "IX"', () => {
//     expect(numeroRomano(9)).toBe("IX");
// });

// test('Conversion of 40 to Roman numeral should be "XL"', () => {
//     expect(numeroRomano(40)).toBe("XL");
// });

// test('Conversion of 90 to Roman numeral should be "XC"', () => {
//     expect(numeroRomano(90)).toBe("XC");
// });

// test('Conversion of 3999 to Roman numeral should be "MMMCMXCIX"', () => {
//     expect(numeroRomano(3999)).toBe("MMMCMXCIX");
// });