class Empleado {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    nombreCompleto() {
        return this.apellido + ", " + this.nombre;
    }

    calcularMontoACobrar() {
        throw new Error("Este es un metodo abstracto");
    }
}

module.exports = Empleado;