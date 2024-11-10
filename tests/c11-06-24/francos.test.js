let {Calendario, Empleado} = require('./francos');

// 01 marcos

// 0101.1. specific date - every year
// 0102.1. specific date - every year
// 0103.2. specific week day - every week 
// 0104.3. specific week day - specific year
// 0105.4. specific month - specific year


// 02 paula

// 0201.1. specific date - every year
// 0202.1. specific date - every year
// 0203.1. specific date - every year
// 1. specific date - every year
// 2. specific week day - every week
// 5. specific month day - specific year


// Federico

// 1. specific date - every year
// 6. specific week day && specific month - every year
// 2. specific week day - every week
// 1. specific date - every year
// 1. specific date - every year

// Esas son las 6 reglas de negocio 

const crearFecha = function (day, month, year = 2024) {
    if (day < 10) {
        day = `0${day}`;
    } 
    if (month < 10) {
        month = `0${month}`;
    }
    return new Date(`${year}-${month}-${day}T10:30:00Z`);
}

const obtenerDiasEnRango = function (fechaInicial, fechaFinal) {
    let fechas = [];
    let fecha = new Date(fechaInicial);
    
    while(fecha <= fechaFinal) {
        fechas.push(new Date(fecha));
        fecha.setDate(fecha.getDate() + 1);
    }

    return fechas;
}

// const obtenerFechasFiltradas = function (fechaInicial, fechaFinal, tipoFiltro) {
//     if (tipoFiltro === "no-repeat") {
//         return [fechaInicial];
//     } else if (tipoFiltro === "every-year") {
//         const dia = fechaInicial.getDate();
//         const mes = fechaInicial.getMonth();
//         const año = fechaInicial.getFullYear();
//         let arrayFechas = obtenerDiasEnRango(fechaInicial, fechaFinal).filter(fecha => {
//             return fecha.getDate() === dia && fecha.getMonth() === mes && fecha.getFullYear() != año;
//         });
//         arrayFechas.push(fechaInicial);
//         return arrayFechas;
//     } else if (tipoFiltro === "specific-week-day-every-week") {
//         const diaDeLaSemana = fechaInicial.getDay();
//         let arrayFechas = obtenerDiasEnRango(fechaInicial, fechaFinal).filter(fecha => {
//             return fecha.getDay() === diaDeLaSemana;
//         });
//         return arrayFechas;
//     } else if (tipoFiltro === "specific-week-day-specific-year") {
//         const diaDeLaSemana = fechaInicial.getDay();
//         const año = fechaInicial.getFullYear();
//         let arrayFechas = obtenerDiasEnRango(fechaInicial, fechaFinal).filter(fecha => {
//             return fecha.getDay() === diaDeLaSemana && fecha.getFullYear() === año;
//         });
//         return arrayFechas;
//     } else if (tipoFiltro === "range-month-specific-year") {
//         const mesRangoInicial = fechaInicial.getMonth();
//         const mesRangoFinal = fechaFinal.getMonth();
//         const año = fechaInicial.getFullYear();
//         let arrayFechas = obtenerDiasEnRango(fechaInicial, fechaFinal).filter(fecha => {
//             return fecha.getMonth() === mesRangoInicial || fecha.getMonth() === mesRangoFinal && fecha.getFullYear() === año;
//         });
//         return arrayFechas;
//     } else if (tipoFiltro === "specific-month-day-specific-year") {
//         const diaDelMes = fechaInicial.getDate();
//         const año = fechaInicial.getFullYear();
//         let arrayFechas = obtenerDiasEnRango(fechaInicial, fechaFinal).filter(fecha => {
//             return fecha.getDate() === diaDelMes && fecha.getFullYear() === año;
//         });
//         return arrayFechas;
//     } else if (tipoFiltro === "specific-week-day&&specific-month-every year") {
//         const diaSemana = fechaInicial.getDay();
//         const mes = fechaInicial.getMonth();
//         let arrayFechas = obtenerDiasEnRango(fechaInicial, fechaFinal).filter(fecha => {
//             return fecha.getDay() === diaSemana && fecha.getMonth() === mes;
//         });
//         return arrayFechas;
//     }
// }


// 0 
let noRepeat = function (fechaInicial) {
    this.esTipo = function (tipoFiltro) {
        return tipoFiltro === "no-repeat";
    }

    this.arrayARetornar = function () {
        return [fechaInicial];
    }
}

// 1
let everyYear = function (fechaInicial, fechaFinal) {
    this.esTipo = function (tipoFiltro) {
        return tipoFiltro === "every-year";
    }

    this.arrayARetornar = function () {
        const dia = fechaInicial.getDate();
        const mes = fechaInicial.getMonth();
        const año = fechaInicial.getFullYear();
        let arrayFechas = obtenerDiasEnRango(fechaInicial, fechaFinal).filter(fecha => {
            return fecha.getDate() === dia && fecha.getMonth() === mes && fecha.getFullYear() != año;
        });
        arrayFechas.push(fechaInicial);
        return arrayFechas;
    }
}

// 2
let specificWeekDayEveryWeek = function (fechaInicial, fechaFinal) {
    this.esTipo = function (tipoFiltro) {
        return tipoFiltro === "specific-week-day-every-week";
    }

    this.arrayARetornar = function () {
        const diaDeLaSemana = fechaInicial.getDay();
        let arrayFechas = obtenerDiasEnRango(fechaInicial, fechaFinal).filter(fecha => {
            return fecha.getDay() === diaDeLaSemana;
        });
        return arrayFechas;
    }
}

// 3
let specificWeekDaySpecificYear = function (fechaInicial, fechaFinal) {
    this.esTipo = function (tipoFiltro) {
        return tipoFiltro === "specific-week-day-specific-year";
    }

    this.arrayARetornar = function () {
        const diaDeLaSemana = fechaInicial.getDay();
        const año = fechaInicial.getFullYear();
        let arrayFechas = obtenerDiasEnRango(fechaInicial, fechaFinal).filter(fecha => {
            return fecha.getDay() === diaDeLaSemana && fecha.getFullYear() === año;
        });
        return arrayFechas;
    }
}

// 4
let rangeMonthSpecificYear = function (fechaInicial, fechaFinal) {
    this.esTipo = function (tipoFiltro) {
        return tipoFiltro === "range-month-specific-year";
    }

    this.arrayARetornar = function () {
        const mesRangoInicial = fechaInicial.getMonth();
        const mesRangoFinal = fechaFinal.getMonth();
        const año = fechaInicial.getFullYear();
        let arrayFechas = obtenerDiasEnRango(fechaInicial, fechaFinal).filter(fecha => {
            return fecha.getMonth() === mesRangoInicial || fecha.getMonth() === mesRangoFinal && fecha.getFullYear() === año;
        });
        return arrayFechas;
    }
}

// 5
let specificMonthDaySpecificYear = function (fechaInicial, fechaFinal) {
    this.esTipo = function (tipoFiltro) {
        return tipoFiltro === "specific-month-day-specific-year";
    }

    this.arrayARetornar = function () {
        const diaDelMes = fechaInicial.getDate();
        const año = fechaInicial.getFullYear();
        let arrayFechas = obtenerDiasEnRango(fechaInicial, fechaFinal).filter(fecha => {
            return fecha.getDate() === diaDelMes && fecha.getFullYear() === año;
        });
        return arrayFechas;
    }
}

// 6
let specificWeekDaySpecificMonthEveryYear = function (fechaInicial, fechaFinal) {
    this.esTipo = function (tipoFiltro) {
        return tipoFiltro === "specific-week-day&&specific-month-every year";
    }

    this.arrayARetornar = function () {
        const diaSemana = fechaInicial.getDay();
        const mes = fechaInicial.getMonth();
        let arrayFechas = obtenerDiasEnRango(fechaInicial, fechaFinal).filter(fecha => {
            return fecha.getDay() === diaSemana && fecha.getMonth() === mes;
        });
        return arrayFechas;
    }
}

const obtenerFechasFiltradas = function (fechaInicial, fechaFinal, tipoFiltro) {
    let tipoRepeticionFactory = [
        new noRepeat(fechaInicial), // 0
        new everyYear(fechaInicial, fechaFinal), // 1
        new specificWeekDayEveryWeek(fechaInicial, fechaFinal), // 2
        new specificWeekDaySpecificYear(fechaInicial, fechaFinal), // 3
        new rangeMonthSpecificYear(fechaInicial, fechaFinal), // 4
        new specificMonthDaySpecificYear(fechaInicial, fechaFinal), // 5
        new specificWeekDaySpecificMonthEveryYear(fechaInicial, fechaFinal) // 6
    ];

    let resultado = tipoRepeticionFactory.find(posibleTipoRepeticion => posibleTipoRepeticion.esTipo(tipoFiltro));
    return resultado.arrayARetornar();
}

// ##########################################################################################################################################

test('Tipo input 0: specific date - no repeat', () => {
    let fechaInicial_25_11_2024 = crearFecha(25, 11, 2024);
    let fechaFinal_estandar = crearFecha(25, 11, 2026);

    let arrayFechas = obtenerFechasFiltradas(fechaInicial_25_11_2024, fechaFinal_estandar, "no-repeat");

    let calendario = new Calendario(arrayFechas);
    let empleado = new Empleado('Marcos', calendario);

    expect(empleado.esFranco(fechaInicial_25_11_2024)).toBe(true);
});

test('Tipo input 1: specific date - every year', () => {
    let fechaInicial_25_11_2024 = crearFecha(25, 11, 2024);
    let fechaInicial_25_11_2025 = crearFecha(25, 11, 2025);
    let fechaInicial_25_11_2026 = crearFecha(25, 11, 2026);
    let fechaFinal_estandar = crearFecha(25, 11, 2026);

    let arrayFechas = obtenerFechasFiltradas(fechaInicial_25_11_2024, fechaFinal_estandar, "every-year");

    let calendario = new Calendario(arrayFechas);
    let empleado = new Empleado('Marcos', calendario);

    expect(empleado.esFranco(fechaInicial_25_11_2024)).toBe(true);
    expect(empleado.esFranco(fechaInicial_25_11_2025)).toBe(true);
    expect(empleado.esFranco(fechaInicial_25_11_2026)).toBe(true);
});

test('Tipo input 2: specific week day - every weak', () => {
    let fechaInicial_25_11_2024 = crearFecha(25, 11, 2024);
    let fechaInicial_02_12_2024 = crearFecha(2, 12, 2024);
    let fechaInicial_09_12_2024 = crearFecha(9, 12, 2024);
    let fechaFinal_estandar = crearFecha(25, 11, 2026);

    let arrayFechas = obtenerFechasFiltradas(fechaInicial_25_11_2024, fechaFinal_estandar, "specific-week-day-every-week");

    let calendario = new Calendario(arrayFechas);
    let empleado = new Empleado('Marcos', calendario);

    expect(empleado.esFranco(fechaInicial_25_11_2024)).toBe(true);
    expect(empleado.esFranco(fechaInicial_02_12_2024)).toBe(true);
    expect(empleado.esFranco(fechaInicial_09_12_2024)).toBe(true);
});

test('Tipo input 3: specific week day - specific year', () => {
    let fechaInicial_26_11_2024 = crearFecha(26, 11, 2024);
    let fechaInicial_03_12_2024 = crearFecha(3, 12, 2024);
    let fechaInicial_10_12_2024 = crearFecha(10, 12, 2024);
    let fechaFinal_estandar = crearFecha(25, 11, 2026);

    let arrayFechas = obtenerFechasFiltradas(fechaInicial_26_11_2024, fechaFinal_estandar, "specific-week-day-specific-year");

    let calendario = new Calendario(arrayFechas);
    let empleado = new Empleado('Marcos', calendario);

    expect(empleado.esFranco(fechaInicial_26_11_2024)).toBe(true);
    expect(empleado.esFranco(fechaInicial_03_12_2024)).toBe(true);
    expect(empleado.esFranco(fechaInicial_10_12_2024)).toBe(true);
});

test('Tipo input 4: range month - specific year', () => {
    let fechaInicial_01_03_2024 = crearFecha(1, 3, 2025);
    let fechaInicial_15_03_2024 = crearFecha(15, 3, 2025);
    let fechaInicial_01_04_2024 = crearFecha(1, 4, 2025);
    let fechaInicial_15_04_2024 = crearFecha(15, 4, 2025);
    let fechaFinal_30_04_2024 = crearFecha(30, 4, 2025);

    let arrayFechas = obtenerFechasFiltradas(fechaInicial_01_03_2024, fechaFinal_30_04_2024, "range-month-specific-year");

    let calendario = new Calendario(arrayFechas);
    let empleado = new Empleado('Marcos', calendario);

    expect(empleado.esFranco(fechaInicial_01_03_2024)).toBe(true);
    expect(empleado.esFranco(fechaInicial_15_03_2024)).toBe(true);
    expect(empleado.esFranco(fechaInicial_01_04_2024)).toBe(true);
    expect(empleado.esFranco(fechaInicial_15_04_2024)).toBe(true);
    expect(empleado.esFranco(fechaFinal_30_04_2024)).toBe(true);
});

test('Tipo input 5: specific month day - specific year', () => {
    let fechaInicial_06_01_2025 = crearFecha(6, 1, 2025);
    let fechaInicial_06_02_2025 = crearFecha(6, 2, 2025);
    let fechaInicial_06_03_2025 = crearFecha(6, 3, 2025);
    let fechaFinal_estandar = crearFecha(25, 11, 2026);

    let arrayFechas = obtenerFechasFiltradas(fechaInicial_06_01_2025, fechaFinal_estandar, "specific-month-day-specific-year");

    let calendario = new Calendario(arrayFechas);
    let empleado = new Empleado('Marcos', calendario);

    expect(empleado.esFranco(fechaInicial_06_01_2025)).toBe(true);
    expect(empleado.esFranco(fechaInicial_06_02_2025)).toBe(true);
    expect(empleado.esFranco(fechaInicial_06_03_2025)).toBe(true);
});

test('Tipo input 6: specific week day && specific month - every year', () => {
    let fechaInicial_01_03_2025 = crearFecha(1, 3, 2025);
    let fechaInicial_08_03_2025 = crearFecha(8, 3, 2025);
    let fechaInicial_15_03_2025 = crearFecha(15, 3, 2025);
    let fechaFinal_estandar = crearFecha(25, 11, 2026);

    let arrayFechas = obtenerFechasFiltradas(fechaInicial_01_03_2025, fechaFinal_estandar, "specific-week-day&&specific-month-every year");

    let calendario = new Calendario(arrayFechas);
    let empleado = new Empleado('Marcos', calendario);

    expect(empleado.esFranco(fechaInicial_01_03_2025)).toBe(true);
    expect(empleado.esFranco(fechaInicial_08_03_2025)).toBe(true);
    expect(empleado.esFranco(fechaInicial_15_03_2025)).toBe(true);
});