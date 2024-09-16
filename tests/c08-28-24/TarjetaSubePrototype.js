function TarjetaSube(id) {
    this.id = id;
    this.saldo = 0;
    this.saldoDeRecargaPendiente = 0;
    this.SALDO_MINIMO = -600;

    this.obtenerIdentificador = function() {
        return this.id;
    }

    this.obtenerSaldoDeRecargaPendiente = function() {
        return this.saldoDeRecargaPendiente;
    }

    this.agregarSaldoDeRecargaPendiente = function(saldoDeRecarga) {
        this.saldoDeRecargaPendiente += saldoDeRecarga;
    }

    this.removerSaldoDeRecargaPendiente = function(saldoDeRecargaAcreditado) {
        this.saldoDeRecargaPendiente -= saldoDeRecargaAcreditado;
    }

    this.obtenerSaldo = function() {
        return this.saldo;
    }

    this.cargarSaldo = function(saldoACargar) {
        return this.saldo += saldoACargar;
    }

    this.pagarViaje = function(precioViaje) {
        this.validarSaldoSuficienteParaViajar(precioViaje); 
        return this.saldo -= precioViaje;
    }

    this.validarSaldoSuficienteParaViajar = function(precioViaje) {
        if ( this.elSaldoRestanteEsMenorQueElSaldoMinimo(precioViaje) ) {
            throw new Error("Saldo insuficiente.");
        }
    }

    this.elSaldoRestanteEsMenorQueElSaldoMinimo = function(precioViaje) {
        return this.saldo - precioViaje < this.SALDO_MINIMO;
    }
}

module.exports = TarjetaSube;