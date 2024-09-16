// const SistemaCentralizado = require("./SistemaCentralizado");
const sistemaCentralizado = require("./SistemaCentralizadoPrototypeLiteral");
const TarjetaSube = require("./TarjetaSubePrototype");

describe("Sistema Centralizado", () => {
    beforeEach(() => {
        // sistemaCentralizado = new SistemaCentralizado();
        sistemaCentralizado.recargasPendientes = [];
    });

    test("con una sube que fue cargada 1 vez, su saldo aumenta en la cantidad cargada", () => {
        const tarjetaSube = new TarjetaSube("Sid01");
        sistemaCentralizado.cargarTarjeta(tarjetaSube, 1000); // 1000 pesos
        sistemaCentralizado.acreditarRecarga(tarjetaSube);
        expect(tarjetaSube.obtenerSaldo()).toBe(1000);
    });

    test("con una sube que fue cargada 2 veces, su saldo aumenta en la cantidad cargada", () => {
        const tarjetaSube = new TarjetaSube("Sid01");
        sistemaCentralizado.cargarTarjeta(tarjetaSube, 1000); // 1000 pesos
        sistemaCentralizado.acreditarRecarga(tarjetaSube);
        sistemaCentralizado.cargarTarjeta(tarjetaSube, 2000); // 2000 pesos
        sistemaCentralizado.acreditarRecarga(tarjetaSube);
        expect(tarjetaSube.obtenerSaldo()).toBe(3000);
    });

    test("cuando una carga es acreditada, las recargas pendientes disminuyen", () => {
        const tarjetaSube = new TarjetaSube("Sid01");
        sistemaCentralizado.cargarTarjeta(tarjetaSube, 1000); // 1000 pesos
        sistemaCentralizado.acreditarRecarga(tarjetaSube);
        expect(sistemaCentralizado.cargasPendientes()).toBe(0);
    });

    test("cuando se cargan distintas tarjetas, solo se acreditan las cargas de la tarjeta que corresponde", () => {
        const tarjetaSube = new TarjetaSube("Sid01");
        const tarjetaSube2 = new TarjetaSube("Sid02");
        sistemaCentralizado.cargarTarjeta(tarjetaSube, 1000); // 1000 pesos
        sistemaCentralizado.cargarTarjeta(tarjetaSube2, 2000); // 2000 pesos
        sistemaCentralizado.acreditarRecarga(tarjetaSube);
        expect(tarjetaSube.obtenerSaldo()).toBe(1000);
        expect(tarjetaSube2.obtenerSaldo()).toBe(0);
    });
});