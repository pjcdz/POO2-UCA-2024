const Calendario = function(fechasDiasFrancos) {
    this.fechasDiasFrancos = fechasDiasFrancos.map(fecha => fecha.toISOString());

    this.obtenerFechasDiasFrancos = function() {
        return this.fechasDiasFrancos;
    }
}

const Empleado = function(nombre, calendario) {
    this.nombre = nombre;
    this.calendario = calendario;

    this.esFranco = function(fecha) {
        if ( this.calendario.obtenerFechasDiasFrancos().includes(fecha.toISOString()) ) {
            return true;
        } 
        return false;
    }
}

module.exports = {Calendario, Empleado};