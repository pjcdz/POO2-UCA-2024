const Empleado = require("./Empleado");

class EmpleadoConSueldo extends Empleado {
    constructor(nombre, apellido, sueldo) {
        super(nombre,apellido);
        this.sueldo = sueldo;
    }

    calcularMontoACobrar() {
        return this.sueldo;
    }
}

module.exports = EmpleadoConSueldo;