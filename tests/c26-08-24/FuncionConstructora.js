function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

const juan = new Persona("Juan", 30);
const pedro = new Persona("Pedro", 35);

Persona.prototype.intereses = ["js","java"];

// juan.intereses.push("python");
// [ 'js', 'java', 'python' ]
// [ 'js', 'java', 'python' ]
// console.log(juan.intereses);
// console.log(pedro.intereses);

juan.intereses = [ 'js', 'java', 'python' ];

console.log(juan);
console.log(pedro);

juan.saludar = function () {
    return this.nombre;
}

// console.log(juan.saludar());
// console.log(pedro.saludar()); // Error

class PersonaClass{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

class PersonaConEdad extends PersonaClass{
    constructor (nombre, apellido, edad) {
        super(nombre, apellido);
        this.edad = edad;
    }
}

const fede = new PersonaConEdad("Fede", "Stulich", 60);
console.log(fede);