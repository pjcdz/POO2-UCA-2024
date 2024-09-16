const numeroRomano = require('./numeroRomano.js');

test('Conversion of 7 to Roman numeral should be "VII"', () => {
    expect(numeroRomano(7)).toBe("VII");
});

test('Conversion of 9 to Roman numeral should be "IX"', () => {
    expect(numeroRomano(9)).toBe("IX");
});

test('Conversion of 14 to Roman numeral should be "XIV"', () => {
    expect(numeroRomano(14)).toBe("XIV");
});

test('Conversion of 5 to Roman numeral should be "V"', () => {
    expect(numeroRomano(5)).toBe("V");
});

