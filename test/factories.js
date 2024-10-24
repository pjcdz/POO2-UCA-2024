const MarsRover = require("../src/marsRover");
const Mapa = require("../src/mapa");
const Coordenadas = require("../src/coordenadas");

const crearMarsRover = function (posicionInicialX, posicionInicialY, mapa = crearMapa(100, 100, []), bateriaInicial) {
    return new MarsRover(posicionInicialX, posicionInicialY, mapa, bateriaInicial);
}

const crearMapa = function (limiteSuperiorX, limiteSuperiorY, obstaculos = [], estacionesDeCarga = []){
    return new Mapa(limiteSuperiorX, limiteSuperiorY, obstaculos, estacionesDeCarga);
}

const crearCoordenadas = function (x, y){
    return new Coordenadas(x, y);
}


module.exports = {
    crearMapa: crearMapa,
    crearMarsRover: crearMarsRover,
    crearCoordenadas: crearCoordenadas,
    crearObstaculo: crearCoordenadas,
    crearEstacionDeCarga: crearCoordenadas
}