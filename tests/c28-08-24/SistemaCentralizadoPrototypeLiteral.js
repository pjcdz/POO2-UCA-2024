// const tarjetaSube = require('./TarjetaSubePrototype');

const TASA_DE_CAMBIO = 1250; // 1 Libra = 1250 Pesos

const sistemaCentralizado = {
    recargasPendientes: [],

    cargarTarjeta: function(tarjeta, saldoACargar) {
        let saldoConvertido = saldoACargar;

        if (saldoACargar <= 100) {
            // Si el monto es de 0-100, se considera en libras y se convierte a pesos
            saldoConvertido = saldoACargar * TASA_DE_CAMBIO;
        }

        tarjeta.agregarSaldoDeRecargaPendiente(saldoConvertido);
        this.recargasPendientes.push(tarjeta);
    },

    cargasPendientes: function() {
        return this.recargasPendientes.length;
    },

    acreditarRecarga: function(tarjeta) {
        tarjeta.cargarSaldo(tarjeta.obtenerSaldoDeRecargaPendiente());
        tarjeta.removerSaldoDeRecargaPendiente(tarjeta.obtenerSaldoDeRecargaPendiente());
        this.recargasPendientes = this.recargasPendientes.filter(tarjetaARemover => tarjetaARemover !== tarjeta);
    }
}

module.exports = sistemaCentralizado;