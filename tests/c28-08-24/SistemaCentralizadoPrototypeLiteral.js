const tarjetaSube = require('./TarjetaSubePrototype');

const sistemaCentralizado = {
    recargasPendientes: [],

    cargarTarjetaSube: function(tarjetaSube, saldoACargar) {
        tarjetaSube.agregarSaldoDeRecargaPendiente(saldoACargar);
        this.recargasPendientes.push(tarjetaSube);
    },

    cargasPendientes: function() {
        return this.recargasPendientes.length;
    },

    acreditarRecarga: function(tarjetaSube) {
        tarjetaSube.cargarSaldo(tarjetaSube.obtenerSaldoDeRecargaPendiente());
        tarjetaSube.removerSaldoDeRecargaPendiente(tarjetaSube.obtenerSaldoDeRecargaPendiente());
        this.recargasPendientes = this.recargasPendientes.filter(tarjeta => tarjeta !== tarjetaSube);
    }
}

module.exports = sistemaCentralizado;