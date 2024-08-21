class TarjetaSube {
    constructor(id) {
        this.id = id;
        this.saldo = 0;
        this.saldoMinimo = -600;
    }

    // #testt

    obtenerSaldo() {
        return this.saldo;
    }

    cargarSaldo(saldoACargar) {
        return this.saldo = this.saldo + saldoACargar;
    }

    pagarViaje(precioViaje) {
        if ( !((this.saldo - precioViaje) >= this.saldoMinimo) ) {
            throw new Error("Saldo insuficiente.");
        } 

        return this.saldo = this.saldo - precioViaje;
    }
}

module.exports = TarjetaSube;