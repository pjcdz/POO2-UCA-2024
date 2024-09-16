function TarjetaOyster(idOyster) {
    this.idOyster = idOyster;
    this.saldoLibras = 0;
    this.saldoLibrasDeRecargaPendiente = 0;
    this.SALDO_MINIMO = 0;

    this.obtenerIdentificador = function() {
        return this.idOyster;
    }

    this.obtenerSaldoDeRecargaPendiente = function() {
        return this.saldoLibrasDeRecargaPendiente;
    }

    this.agregarSaldoDeRecargaPendiente = function(saldoDeRecarga) {
        this.saldoLibrasDeRecargaPendiente += saldoDeRecarga;
    }

    this.removerSaldoDeRecargaPendiente = function(saldoDeRecargaAcreditado) {
        this.saldoLibrasDeRecargaPendiente -= saldoDeRecargaAcreditado;
    }

    this.obtenerSaldo = function() {
        return this.saldoLibras;
    }

    this.cargarSaldo = function(saldoACargar) {
        return this.saldoLibras += saldoACargar;
    }

    this.pagarViaje = function(precioViaje) {
        this.validarSaldoSuficienteParaViajar(precioViaje); 
        return this.saldoLibras -= precioViaje;
    }

    this.validarSaldoSuficienteParaViajar = function(precioViaje) {
        if ( this.elSaldoRestanteEsMenorQueElSaldoMinimo(precioViaje) ) {
            throw new Error("Saldo insuficiente.");
        }
    }

    this.elSaldoRestanteEsMenorQueElSaldoMinimo = function(precioViaje) {
        return this.saldoLibras - precioViaje < this.SALDO_MINIMO;
    }
}

module.exports = TarjetaOyster;