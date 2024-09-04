// const SistemaCentralizado = require("./SistemaCentralizado");
const sistemaCentralizado = require("./SistemaCentralizadoPrototypeLiteral");
const TarjetaSube = require("./TarjetaSubePrototype");

describe("Sistema Centralizado", () => {
    // let sistemaCentralizado;

    beforeEach(() => {
        // sistemaCentralizado = new SistemaCentralizado();
        sistemaCentralizado.recargasPendientes = [];
    });

    test("al cargar una tarjeta por primera vez, las recargas pendientes son 1", () => {
        const tarjetaSube = new TarjetaSube(123);
        sistemaCentralizado.cargarTarjetaSube(tarjetaSube, 100);
        expect(sistemaCentralizado.cargasPendientes()).toBe(1);
    });

    test("al cargar una tarjeta sube por segunda vez, las recargas pendientes son 2", () => {
        const tarjetaSube = new TarjetaSube(123);
        sistemaCentralizado.cargarTarjetaSube(tarjetaSube, 100);
        sistemaCentralizado.cargarTarjetaSube(tarjetaSube, 200);
        expect(sistemaCentralizado.cargasPendientes()).toBe(2);
    });

    describe("al acreditar una recarga", () => {
        let tarjetaSube;
        const identificador = 123;

        beforeEach(() => {
        tarjetaSube = new TarjetaSube(identificador);
        });
        
        test("con una sube que no fue cargada, su saldo permanece igual", () => {
            sistemaCentralizado.acreditarRecarga(tarjetaSube);
            expect(tarjetaSube.obtenerSaldo()).toBe(0);
        });

        test("con una sube que fue cargada 1 vez, su saldo aumenta en la cantidad cargada", () => {
            sistemaCentralizado.cargarTarjetaSube(tarjetaSube, 100);
            sistemaCentralizado.acreditarRecarga(tarjetaSube);
            expect(tarjetaSube.obtenerSaldo()).toBe(100);
        });

        test("con una sube que fue cargada 2 veces, su saldo aumenta en la cantidad cargada", () => {
            sistemaCentralizado.cargarTarjetaSube(tarjetaSube, 100);
            sistemaCentralizado.cargarTarjetaSube(tarjetaSube, 200);
            sistemaCentralizado.acreditarRecarga(tarjetaSube);
            expect(tarjetaSube.obtenerSaldo()).toBe(300);
        });

        test("cuando una carga es acreditada, las recargas pendientes disminuyen", () => {
            sistemaCentralizado.cargarTarjetaSube(tarjetaSube, 100);
            sistemaCentralizado.acreditarRecarga(tarjetaSube);
            expect(sistemaCentralizado.cargasPendientes()).toBe(0);
        });

        test("cuando se cargan distintas tarjetas, solo se acreditan las cargas de la tarjeta que corresponde", () => {
            const tarjetaSube2 = new TarjetaSube(456);
            sistemaCentralizado.cargarTarjetaSube(tarjetaSube, 100);
            sistemaCentralizado.cargarTarjetaSube(tarjetaSube2, 200);
            sistemaCentralizado.acreditarRecarga(tarjetaSube);
            expect(tarjetaSube.obtenerSaldo()).toBe(100);
            expect(tarjetaSube2.obtenerSaldo()).toBe(0);
        });

        test("cuando se acreditan multiples recargas, la cantidad de recargas pendientes disminuye en igual cantidad", () => {
            sistemaCentralizado.cargarTarjetaSube(tarjetaSube, 100);
            sistemaCentralizado.cargarTarjetaSube(tarjetaSube, 200);
            sistemaCentralizado.cargarTarjetaSube(tarjetaSube, 300);
            sistemaCentralizado.acreditarRecarga(tarjetaSube);
            expect(sistemaCentralizado.cargasPendientes()).toBe(0);
        });
    });
});