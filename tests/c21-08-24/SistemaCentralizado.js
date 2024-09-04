const TarjetaSube = require('./TarjetaSube');

class SistemaCentralizado {
    constructor () {
        this.recargasPendientes = [];
    }

    cargarTarjeta(TarjetaSube, saldoACargar) {
        TarjetaSube.agregarSaldoDeRecargaPendiente(saldoACargar);
        this.recargasPendientes.push(TarjetaSube);
    }

    cargasPendientes() {
        return this.recargasPendientes.length;
    }

    acreditarRecarga(TarjetaSube) {
        TarjetaSube.cargarSaldo(TarjetaSube.obtenerSaldoDeRecargaPendiente());
        TarjetaSube.removerSaldoDeRecargaPendiente(TarjetaSube.obtenerSaldoDeRecargaPendiente());
        this.recargasPendientes = this.recargasPendientes.filter(tarjeta => tarjeta !== TarjetaSube);
    }
}

module.exports = SistemaCentralizado;