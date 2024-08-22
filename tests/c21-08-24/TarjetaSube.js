class TarjetaSube {
    static SALDO_MINIMO = -600;
    constructor(id) {
        this.id = id;
        this.saldo = 0;
    }

    // #testt

    obtenerSaldo() {
        return this.saldo;
    }

    cargarSaldo(saldoACargar) {
        return this.saldo += saldoACargar;
    }

    pagarViaje(precioViaje) {
        this.validarSaldoSuficienteParaViajar(precioViaje); 

        return this.saldo -= precioViaje;
    }

    validarSaldoSuficienteParaViajar(precioViaje) {
        if ( this.elSaldoRestanteEsMenorQueElSaldoMinimo(precioViaje) ) {
            throw new Error("Saldo insuficiente.");
        }
    }

    elSaldoRestanteEsMenorQueElSaldoMinimo(precioViaje) {
        return this.saldo - precioViaje < TarjetaSube.SALDO_MINIMO;
    }   
}

module.exports = TarjetaSube;