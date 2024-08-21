const EmpleadoConSueldo = require("./EmpleadoConSueldo");
const EmpleadoPorHora = require("./EmpleadoPorHora");

test("Nombre completo de empleado", () => {
    const juan = new EmpleadoConSueldo("Juan","Perez",1000);
    expect(juan.nombreCompleto()).toBe("Perez, Juan");
})

test("Empleado calcula monto a cobrar", () => {
    const juan = new EmpleadoConSueldo("Juan","Perez",1000);
    expect(juan.calcularMontoACobrar()).toBe(1000);
})

test("Nombre completo de empleado por hora", () => {
    const pedro = new EmpleadoPorHora("Pedro","Gonzales",1000);
    expect(pedro.nombreCompleto()).toBe("Gonzales, Pedro");
})

test("Empleado calcula monto a cobrar", () => {
    const pedro = new EmpleadoPorHora("Pedro","Gonzales",1000);
    expect(pedro.calcularMontoACobrar(50)).toBe(50000);
})
