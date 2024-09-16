function numeroRomano(numero) {
    // let num5 = Math.floor(num / 5);
    // let num1 = num % 5;
    
    // return 'V'.repeat(num5) + 'I'.repeat(num1);

    let romano = '';

    // Definir los valores romanos y sus equivalentes numéricos
    const valoresRomanos = [
        { valor: 10, simbolo: 'X' },
        { valor: 9, simbolo: 'IX' },
        { valor: 5, simbolo: 'V' },
        { valor: 4, simbolo: 'IV' },
        { valor: 1, simbolo: 'I' }
    ];

    // Iterar sobre los valores romanos
    for (let i = 0; i < valoresRomanos.length; i++) {
        let valorActual = valoresRomanos[i].valor;
        let simboloActual = valoresRomanos[i].simbolo;

        // Calcular cuántas veces el número puede ser dividido por el valor actual
        let cociente = Math.floor(numero / valorActual);

        // Añadir el símbolo romano correspondiente tantas veces como sea necesario
        romano += simboloActual.repeat(cociente);

        // Reducir el valor del número
        numero %= valorActual;
    }

    return romano;
}

module.exports = numeroRomano;