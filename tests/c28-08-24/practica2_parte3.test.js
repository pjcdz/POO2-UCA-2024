// Con intención de fomentar el turismo se desea agregar nuevos medios de pago para turistas, se
// comenzará soportando el pago de viajes en pesos con la Oyster Card (cuyo saldo está en Libras).
// Para lograrlo se pretende:
// I. Crear el objeto OysterCard, que tiene un funcionamiento similar a la SUBE pero en Libras.
// A. Está tarjeta no posee saldo mínimo.
// II. Integrar el sistema centralizado con la OysterCard
// A. Ahora se puede utilizar el identificador de una OysterCard para cargarTarjeta
// B. El monto de la recarga se puede aceptar tanto en pesos Argentinos, como en
// Libras esterlinas.
// C. Si un turista tiene una sube debe poder cargarla tanto en Libras como en Pesos.
// III. A su vez Reino Unido permitirá pagar su transporte local con la SUBE, para ello la SUBE
// debe poder pagar viajes en Libras.
// IV. Agregar los test necesarios que validen este nuevo comportamiento del sistema.
// Se deberá asumir:
// ● Por condiciones externas a nuestro sistema NO existe una SUBE y Oyster Card con el
// mismo identificador, es decir, no debemos realizar ninguna validación en cuanto a esto.
// ● El peso y la libra poseen un cambio fijo de 1250 pesos por 1 Libra.


// Si una persona carga de 0-100 sera tomada como libras, todo monto mayor a 100 sera tomado como pesos

const TarjetaOyster = require('./TarjetaOysterPrototype');
const TarjetaSube = require('./TarjetaSubePrototype');
const sistemaCentralizado = require('./SistemaCentralizadoPrototypeLiteral');

describe("Identificadores de TarjetaOyster y TarjetaSube", () => {
    test("El identificador de la TarjetaOyster debe ser igual al parámetro 'id' pasado al crear la instancia", () => {
        const oysterCard = new TarjetaOyster("Oid01");
        expect(oysterCard.obtenerIdentificador()).toEqual("Oid01");
    });

    test("El identificador de la TarjetaSube debe ser igual al parámetro 'id' pasado al crear la instancia", () => {
        const subeCard = new TarjetaSube("Sid01");
        expect(subeCard.obtenerIdentificador()).toEqual("Sid01");
    });
});

describe("Sistema Centralizado con OysterCard y TarjetaSube", () => {
    test("Cargar una OysterCard con su identificador", () => {
        const oysterCard = new TarjetaOyster("Oid01");
        sistemaCentralizado.cargarTarjeta(oysterCard, 50, 'LIBRAS');
        expect(oysterCard.obtenerSaldoDeRecargaPendiente()).toEqual(62500); // 50 libras * 1250
    });

    test("Cargar una OysterCard en pesos y libras", () => {
        const oysterCard = new TarjetaOyster("Oid02");
        sistemaCentralizado.cargarTarjeta(oysterCard, 1000, 'PESOS');
        expect(oysterCard.obtenerSaldoDeRecargaPendiente()).toEqual(1000);

        sistemaCentralizado.cargarTarjeta(oysterCard, 10, 'LIBRAS');
        expect(oysterCard.obtenerSaldoDeRecargaPendiente()).toEqual(13500); // 1000 pesos + (10 libras * 1250)
    });

    test("Cargar una TarjetaSube en pesos y libras", () => {
        const subeCard = new TarjetaSube("Sid01");
        sistemaCentralizado.cargarTarjeta(subeCard, 2000, 'PESOS');
        expect(subeCard.obtenerSaldoDeRecargaPendiente()).toEqual(2000);

        sistemaCentralizado.cargarTarjeta(subeCard, 20, 'LIBRAS');
        expect(subeCard.obtenerSaldoDeRecargaPendiente()).toEqual(27000); // 2000 pesos + (20 libras * 1250)
    });

    test("Pagar viajes en libras con una TarjetaSube", () => {
        const subeCard = new TarjetaSube("Sid02");
        sistemaCentralizado.cargarTarjeta(subeCard, 50, 'LIBRAS');
        sistemaCentralizado.acreditarRecarga(subeCard);
        expect(subeCard.obtenerSaldo()).toEqual(62500); // 50 libras * 1250

        subeCard.pagarViaje(1250); // Pagar 1 libra
        expect(subeCard.obtenerSaldo()).toEqual(61250); // 62500 - 1250
    });
});