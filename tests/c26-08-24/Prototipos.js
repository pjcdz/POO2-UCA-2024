const juan = {
    nombre: "Juan",
    edad: 30,
};

juan.saludar = function () {
    return this.nombre;
};

console.log(juan);
console.log(juan.saludar());

const pedro = Object.create(juan);

pedro.nombre = "Pedro";
pedro.edad = 35;

juan.obtenerEdad = function () {
    return this.edad;
}

console.log(juan.obtenerEdad());
console.log(pedro.obtenerEdad());

// console.log(juan);
// console.log(pedro);
// console.log(pedro.saludar());