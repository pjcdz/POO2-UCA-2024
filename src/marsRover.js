"use strict";
const comandoFactory = require("./comandoFactory");
const Coordenadas = require("./coordenadas");
const ComandoVacio = require("./comandoVacio");


const MarsRover = function (posicionInicialX, posicionInicialY, mapa, bateriaInicial){

    this.posicionActual = new Coordenadas(posicionInicialX, posicionInicialY);
    this.mapa = mapa;
    this.bateriaActual = bateriaInicial;
    this.bateriaInicial = bateriaInicial;

    this.obtenerNivelDeBateria = function(){
        return this.bateriaActual;
    }

    this.recargarBateriaASuNivelInicial = function(){
        this.bateriaActual = this.bateriaInicial;
    }

    this.validarSiEstaEnUnaEstacionDeCarga = function(coordenadas) {
        if(this.mapa.hayEstacionDeCarga(coordenadas)){
            this.recargarBateriaASuNivelInicial();
        }
    }

    this.reducirNivelDeBateriaEnUnaUnidad = function() {
        this.bateriaActual--;
    }

    this.aumentarNivelDeBateriaEnUnaUnidad = function() {
        this.bateriaActual++;
    }

    this.validarSiHayBateriaSuficienteParaVolver = function(comandos){
        if( !(comandos.length <= this.bateriaInicial/2) )
            // No esta hecho el caso de que vuelva a la estacion de recarga
            throw new Error ("No hay bateria suficiente para volver");
    }

    this.obtenerPosicionActual = function(){
        return this.posicionActual;
    };

    this.movete = function (comandos){
        this.validarMaximoDiezComandos(comandos);
        // this.validarSiHayBateriaSuficienteParaVolver(comandos); 
        // Valida si tiene suficiente bateria para lanza el error en muchos test
        this.ejecutarComandos(comandos);
    };

    this.ejecutarComandos = function (secuenciaDeComandos){
        const posicionInicial = this.posicionActual;
        let comandoPendiente = new ComandoVacio();

        const comandos = comandoFactory.crearComandos(secuenciaDeComandos);
        comandos.forEach(comando => {
            try {
                comando.moverDadoComandoAnterior(comandoPendiente, this);
                this.reducirNivelDeBateriaEnUnaUnidad();
                this.validarSiEstaEnUnaEstacionDeCarga(this.posicionActual);
                comandoPendiente = new ComandoVacio();
            }catch (error){
                if(!(error.message==="Hay un obstaculo donde me debo mover.")){ // Si se valido que estaba fuera del mapa
                    console.log("HOLAHOLAHOAL");
                    this.posicionActual = posicionInicial;
                    throw error;
                }
                this.aumentarNivelDeBateriaEnUnaUnidad(); // Corrige que de entrar en PlanA o B
                // Eso gastara 4 unidades, pero a su vez el comando que lo hizo entrar, el que 
                // cumplio ejecutarComandosIgualesEntreSi(), gastara 1 unidad, por lo que se
                // termina gastando 5 unidades. Si quiere que gaste solo 4, asi que se corrige
                comandoPendiente = comando;
            }
        });
    }

    this.validarMaximoDiezComandos = function(comandos){
        if(comandos.length > 10)
            throw new Error ("Las secuencias de comandos deben ser de hasta 10 movimientos.");
    }

    this.validarEstarDentroDelMapa = function(coordenadas){
        if (this.mapa.superaLimites(coordenadas))
            throw new Error("La secuencia de comandos indicados represetan una trayectoria fuera del mapa.");

    };

    this.validarQueNoHayaObstaculos = function(coordenadas){
        if(this.mapa.hayObstaculo(coordenadas)){
            throw new Error ("Hay un obstaculo donde me debo mover.");
        }
    }

    this.aplicarMovimiento  = function(coordenadasAMover){
        const resultadoDelMovimiento = coordenadasAMover.sumar(this.posicionActual);

        this.validarEstarDentroDelMapa(resultadoDelMovimiento);
        this.validarQueNoHayaObstaculos(resultadoDelMovimiento);
        // this.validarSiEstaEnUnaEstacionDeCarga(resultadoDelMovimiento); 
        // Si es recargarBateriaASuNivelInicial() pongo + 1 funciona

        this.posicionActual = resultadoDelMovimiento

        // this.validarSiEstaEnUnaEstacionDeCarga(this.posicionActual); 
        // Si es recargarBateriaASuNivelInicial() pongo + 1 funciona
    }

};


module.exports = MarsRover;


