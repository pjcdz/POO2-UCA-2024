const tarjetaSube = require('./TarjetaSubePrototype');

const sistemaCentralizado = {
    recargasPendientes: [],

    cargarTarjetaSube: function(tarjeta, saldoACargar) {
        tarjeta.agregarSaldoDeRecargaPendiente(saldoACargar);
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