"use strict";
const Coordenadas = require("./coordenadas");

const Mapa = function (limiteSuperiorX, limiteSuperiorY, obstaculos, estacionesDeCarga) {
    
    const limiteSuperior = new Coordenadas(limiteSuperiorX, limiteSuperiorY);
    const origen = new Coordenadas(0, 0);
    this.obstaculos = obstaculos;
    this.estacionesDeCarga = estacionesDeCarga;

    this.hayEstacionDeCarga = function(coordenadas){
        return this.estacionesDeCarga.find(estacion => estacion.en(coordenadas)) ? true : false;
    }

    this.superaLimites = function (posicion) {
        return !posicion.dentroDe(origen, limiteSuperior)
    }

    this.hayObstaculo = function(coordenadas){
        return this.obstaculos.find(obstaculo => obstaculo.en(coordenadas)) ? true : false;
    }

}

module.exports = Mapa;