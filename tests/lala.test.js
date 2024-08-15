// test(
//     "Soy un test :v",
//     () => {
//         const num = 5+5;
//         expect(num).toBe(10);
//     }
// )

const cuadrado_de = num => num * num;

test("ejercicio 1", () => {
    expect(cuadrado_de(2)).toBe(4);
    expect(cuadrado_de(3)).toBe(9);
    expect(cuadrado_de(4)).toBe(16);
});

const creaResta = x => y => y-x;

test("ejercicio 2", () => {
    const resta2 = creaResta(2);

    // Crear una variable llamada resta a partir de la función creaResta enviando como parámetro
    // un numero entero n.
    // Ejecutar la función resta enviándole un numero entero m.
    // ¿x toma el valor de n e y toma el valor de m, o es al revés?

    // RTA: El numero entero n sera y

    expect(resta2(2)).toBe(0);
    expect(resta2(3)).toBe(1);
    expect(resta2(10)).toBe(8);
});

const repeat = (functionToRepeat, n) => {
    // let result = [];
    // for (let i = 0; i < n; i++) {
    //     result.push(functionToRepeat(i + 1));
    // }
    // return result;

    // let arr = new Array(n).fill(0);
    let arr = Array.from({length: n});
    arr = arr.map( (_,i) => functionToRepeat(i+1) );
    return arr;
};

const printString = n => "Execution Number: " + n;

test("ejercicio 3", () => {
    const lista = repeat(printString, 4);

    expect(lista).toEqual([
        "Execution Number: 1",
        "Execution Number: 2",
        "Execution Number: 3",
        "Execution Number: 4",
    ]);
});

describe("ejercicio 4", () => {
    const pilotos = [
        "Verstappen",
        "Hamilton",
        "Russell",
        "Sainz",
        "Perez",
        "Leclerc",
        "Norris",
        "Alonso",
        "Ocon",
        "Vettel",
    ];
    test("inciso a", () => {
        const ejercicioA = nombre => pilotos.indexOf(nombre) + 1;
        expect(ejercicioA("Russell")).toEqual(3);
    });

    test("inciso b", () => {
        // const ejercicioB = posicion => pilotos.find( (_,i) => i === posicion - 1 );
        const ejercicioB = posicion => pilotos[posicion - 1];
        expect(ejercicioB(6)).toEqual("Leclerc");
    });

    test("inciso c", () => {
        const ejercicioC = (letraABuscar) => {
            letraABuscar = letraABuscar.toLowerCase();
            return pilotos.filter( nombre => nombre.toLowerCase().includes(letraABuscar) );
        };

        expect(ejercicioC("a")).toEqual([
        "Verstappen",
        "Hamilton",
        "Sainz",
        "Alonso",
        ]);
    });

    test("inciso d", () => {
        const ejercicioD = arrPilotos => {
            let arrPilotosBooleano = [];
            arrPilotos.map( nombre => arrPilotosBooleano.push( pilotos.includes(nombre) ) );
            return arrPilotosBooleano;
        };
        expect(ejercicioD(["Russell", "Bottas", "Perez"])).toEqual([
        true,
        false,
        true,
        ]);
    });
    test("inciso e", () => {
        const corregirPilotos = arrPilotosOriginal => {
            let arrPilotosModificado = [...arrPilotosOriginal];
            arrPilotosModificado.splice(1, 1, "Perez");
            arrPilotosModificado.splice(4, 1, "Hamilton");
            // arrPilotosModificado[1] = "Perez";
            // arrPilotosModificado[4] = "Hamilton";
            return arrPilotosModificado;
        };

        expect(corregirPilotos(pilotos)).toEqual([
        "Verstappen",
        "Perez",
        "Russell",
        "Sainz",
        "Hamilton",
        "Leclerc",
        "Norris",
        "Alonso",
        "Ocon",
        "Vettel",
        ]);
    });
});

let howManyTimesAppear = (arr, num) => {
    let count = 0;
    arr.map( numero => numero === num ? count++ : null );
    return count;
}

test("ejercicio 5", () => {
    const array = [3, 6, 9, 3, 1, 5, 2, 10];

    expect(howManyTimesAppear(array, 3)).toEqual(2);
    expect(howManyTimesAppear(array, 5)).toEqual(1);
    expect(howManyTimesAppear(array, 7)).toEqual(0);
});

test("ejercicio 6", () => {
    const array1 = [4, 8, 2, 13, 20];
    const array2 = [4, 8, 2, -5, 20];
    const ejercicio6 = arr => {
        // let numeroMasBajo = Math.min(...arr);
        let numeroMasBajo = 999;
        arr.map( numero => numero < numeroMasBajo ? numeroMasBajo = numero : null );
        return arr.map( numero => numero + numeroMasBajo);
    };

    expect(ejercicio6(array1)).toEqual([6, 10, 4, 15, 22]);
    expect(ejercicio6(array2)).toEqual([-1, 3, -3, -10, 15]);
});

describe("ejercicio 7", () => {
    test("inciso a", () => {
        const personas = [
        "Lionel Messi",
        "Rodrigo Depaul",
        "Emiliano Martinez",
        "Angel Dimaria",
        "Soledad Jaimes",
        "Yamila Rodriguez",
        "Florencia Bonsegundo",
        ];

        personas.sort();

        expect(personas).toEqual([
        "Angel Dimaria",
        "Emiliano Martinez",
        "Florencia Bonsegundo",
        "Lionel Messi",
        "Rodrigo Depaul",
        "Soledad Jaimes",
        "Yamila Rodriguez",
        ]);
    });

    test("inciso b", () => {
        const personas = [
        "Lionel Messi",
        "Rodrigo Depaul",
        "Emiliano Martinez",
        "Angel Dimaria",
        "Soledad Jaimes",
        "Yamila Rodriguez",
        "Florencia Bonsegundo",
        ];
        const ejercicioB = arr => {
            return arr.map( nombre => {
                let nombreArray = nombre.split(" ");
                return nombreArray[1] + " " + nombreArray[0];
            })
        };
        expect(ejercicioB(personas)).toEqual([
        "Messi Lionel",
        "Depaul Rodrigo",
        "Martinez Emiliano",
        "Dimaria Angel",
        "Jaimes Soledad",
        "Rodriguez Yamila",
        "Bonsegundo Florencia",
        ]);
    });

    test("inciso c", () => {
        const personas = [
        "Messi Lionel",
        "Depaul Rodrigo",
        "Martinez Emiliano",
        "Dimaria Angel",
        "Jaimes Soledad",
        "Rodriguez Yamila",
        "Bonsegundo Florencia",
        ];

        //resolucion
        personas.forEach( nombre => { // ForEach no devuelve nada sino que modifica cada elemento
            let nombreArray = nombre.split(" ");
            return nombreArray[1] + " " + nombreArray[0];
        });
        personas.sort();
        //fin resolucion

        expect(personas).toEqual([
        "Bonsegundo Florencia",
        "Depaul Rodrigo",
        "Dimaria Angel",
        "Jaimes Soledad",
        "Martinez Emiliano",
        "Messi Lionel",
        "Rodriguez Yamila",
        ]);
    });
});
