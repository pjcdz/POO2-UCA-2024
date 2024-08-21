const Empleado = require("./Empleado");

class EmpleadoPorHora extends Empleado {
    constructor(nombre, apellido, montoPorHora) {
        super(nombre, apellido);
        this.montoPorHora = montoPorHora;
    }

    calcularMontoACobrar(horasTrabajadas) {
        return this.montoPorHora * horasTrabajadas
    }
}

module.exports = EmpleadoPorHora;