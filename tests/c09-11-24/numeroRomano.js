function numeroRomano(num) {
    let num5 = Math.floor(num / 5);
    let num1 = num % 5;
    
    return 'V'.repeat(num5) + 'I'.repeat(num1);
}   

module.exports = numeroRomano;