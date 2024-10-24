"use strict";
const {crearMapa, crearMarsRover, crearObstaculo, crearCoordenadas, crearEstacionDeCarga} = require("./factories");

test("Se consume 1 unidad de bateria con un movimiento", () => {
    const mapa = crearMapa(100, 100, []);
    const marsRover = crearMarsRover(50, 50, mapa, 10);

    marsRover.movete("W");

    expect(marsRover.obtenerPosicionActual()).toEqualObject(crearCoordenadas(50, 51));
    expect(marsRover.obtenerNivelDeBateria()).toEqual(9);
});


test("Se consume 2 unidades de bateria con dos movimientos", () => {
    const mapa = crearMapa(100, 100, []);
    const marsRover = crearMarsRover(50, 50, mapa, 10);

    marsRover.movete("WW");

    expect(marsRover.obtenerPosicionActual()).toEqualObject(crearCoordenadas(50, 52));
    expect(marsRover.obtenerNivelDeBateria()).toEqual(8);
});

test("Al ejecutar WWWW consume 4 unidades de batería.", () => {
    const mapa = crearMapa(100, 100, []);
    const marsRover = crearMarsRover(50, 50, mapa, 10);

    marsRover.movete("WWWW");

    expect(marsRover.obtenerPosicionActual()).toEqualObject(crearCoordenadas(50, 54));
    expect(marsRover.obtenerNivelDeBateria()).toEqual(6);
});


test("Al ejecutar “DDSAA” consume 5 unidades de batería.", () => {
    const mapa = crearMapa(100, 100, []);
    const marsRover = crearMarsRover(50, 50, mapa, 10);

    marsRover.movete("DDSAA");

    expect(marsRover.obtenerPosicionActual()).toEqualObject(crearCoordenadas(50, 49));
    expect(marsRover.obtenerNivelDeBateria()).toEqual(5);
});

test("Al ejecutar “WSDA” se consumirán 4 unidades de batería.", () => {
    const mapa = crearMapa(100, 100, []);
    const marsRover = crearMarsRover(50, 50, mapa, 10);

    marsRover.movete("WSDA");

    expect(marsRover.obtenerPosicionActual()).toEqualObject(crearCoordenadas(50, 50));
    expect(marsRover.obtenerNivelDeBateria()).toEqual(6);
});


test("Suponiendo que al realizar el primer comando se encuentra con un obstáculo y puede bordearlo, al ejecutar “WW” consumirá 4 unidades de batería.", () => {
    const obstaculos = [crearObstaculo(50, 51)];
    const mapa = crearMapa(100, 100, obstaculos);
    const marsRover = crearMarsRover(50, 50, mapa, 10);

    marsRover.movete("WW");

    expect(marsRover.obtenerPosicionActual()).toEqualObject(crearCoordenadas(50, 52));
    expect(marsRover.obtenerNivelDeBateria()).toEqual(6);
});

test("Suponiendo que al realizar el primer comando se encuentra con un obstáculo y la secuencia de comandos es “WS” entonces no se consumirá energía dado que no se mueve del lugar.", () => {
    const obstaculos = [crearObstaculo(50, 51)];
    const mapa = crearMapa(100, 100, obstaculos);
    const marsRover = crearMarsRover(50, 50, mapa, 10);

    marsRover.movete("WS");

    expect(marsRover.obtenerPosicionActual()).toEqualObject(crearCoordenadas(50, 50));
    expect(marsRover.obtenerNivelDeBateria()).toEqual(10);
});

test("Suponiendo que al realizar el primer comando se encuentra con un obstáculo y la secuencia de comandos es  “AD” entonces no se consumirá energía dado que no se mueve del lugar.", () => {
    const obstaculos = [crearObstaculo(49, 50)];
    const mapa = crearMapa(100, 100, obstaculos);
    const marsRover = crearMarsRover(50, 50, mapa, 10);

    marsRover.movete("AD");

    expect(marsRover.obtenerPosicionActual()).toEqualObject(crearCoordenadas(50, 50));
    expect(marsRover.obtenerNivelDeBateria()).toEqual(10);
});

test("Suponiendo que al realizar el primer comando se encuentra con un obstáculo y la secuencia de comandos es  “DA” entonces no se consumirá energía dado que no se mueve del lugar.", () => {
    const obstaculos = [crearObstaculo(51, 50)];
    const mapa = crearMapa(100, 100, obstaculos);
    const marsRover = crearMarsRover(50, 50, mapa, 10);

    marsRover.movete("DA");

    expect(marsRover.obtenerPosicionActual()).toEqualObject(crearCoordenadas(50, 50));
    expect(marsRover.obtenerNivelDeBateria()).toEqual(10);
});

test("Suponiendo que al realizar el primer comando se encuentra con un obstáculo y la secuencia de comandos es  “SW” entonces no se consumirá energía dado que no se mueve del lugar.", () => {
    const obstaculos = [crearObstaculo(50, 49)];
    const mapa = crearMapa(100, 100, obstaculos);
    const marsRover = crearMarsRover(50, 50, mapa, 10);

    marsRover.movete("SW");

    expect(marsRover.obtenerPosicionActual()).toEqualObject(crearCoordenadas(50, 50));
    expect(marsRover.obtenerNivelDeBateria()).toEqual(10);
});

test("Si recibe el comando “AAAA” con el cuál sale del mapa no se debe consumir ninguna unidad de batería ya que no se ejecutaron movimientos.", () => {
    const mapa = crearMapa(100, 100, []);
    const marsRover = crearMarsRover(0, 0, mapa, 10);
    
    expect(() => marsRover.movete("AAAA")).toThrow(new Error("La secuencia de comandos indicados represetan una trayectoria fuera del mapa."));
    expect(marsRover.obtenerNivelDeBateria()).toEqual(10);
});

test("Se mueve DDDD, gasta 4 de unidades de bateria pero en su ultima hay una estacion de carga, por lo que termina con la bateria recargada a como la tenia inicialmente", () => {
    const estacionesDeCarga = [crearEstacionDeCarga(54,50)];
    const mapa = crearMapa(100, 100, [], estacionesDeCarga);
    const marsRover = crearMarsRover(50, 50, mapa, 10);
    

    marsRover.movete("DDDD");

    expect(marsRover.obtenerPosicionActual()).toEqualObject(crearCoordenadas(54, 50));
    expect(marsRover.obtenerNivelDeBateria()).toEqual(10);
});

test("Se mueve DDDD, gasta 4 de unidades de bateria pero en su ultima hay una estacion de carga, por lo que termina con la bateria recargada a como la tenia inicialmente", () => {
    const estacionesDeCarga = [crearEstacionDeCarga(54,50)];
    const mapa = crearMapa(100, 100, [], estacionesDeCarga);
    const marsRover = crearMarsRover(50, 50, mapa, 99);
    

    marsRover.movete("DDDD");

    expect(marsRover.obtenerPosicionActual()).toEqualObject(crearCoordenadas(54, 50));
    expect(marsRover.obtenerNivelDeBateria()).toEqual(99);
});
