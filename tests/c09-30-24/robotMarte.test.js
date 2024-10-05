const {Robot, Obstaculo} = require('./robotMarte');

describe('Movimiento en W', () => {
    test('Movimiento en W comenzando en 0,0', () => {
        let robot = new Robot(0, 0);
        robot.comando(['W']);
        expect(robot.pos.obtenerPosicionY()).toBe(1);
    });

    test('Movimiento en W desde 1,1', () => {
        let robot = new Robot(1, 1);
        robot.comando(['W']);
        expect(robot.pos.obtenerPosicionY()).toBe(2);
    });

    test('Movimiento en W desde 2,2', () => {
        let robot = new Robot(2, 2);
        robot.comando(['W', 'W']);
        expect(robot.pos.obtenerPosicionY()).toBe(4);
    });

    test('Movimiento en W desde 1,0', () => {
        let robot = new Robot(1, 0);
        robot.comando(['W']);
        expect(robot.pos.obtenerPosicionY()).toBe(1);
    });

    test('Movimiento en W desde 0,1', () => {
        let robot = new Robot(0, 1);
        robot.comando(['W']);
        expect(robot.pos.obtenerPosicionY()).toBe(2);
    });
});

describe('Movimiento en A', () => {
    test('Movimiento en A comenzando en 0,0', () => {
        let robot = new Robot(0,0);
        robot.comando(['A']);
        expect(robot.pos.obtenerPosicionX()).toBe(0);
    });

    test('Movimiento en A desde 1,1', () => {
        let robot = new Robot(1,1);
        robot.comando(['A']);
        expect(robot.pos.obtenerPosicionX()).toBe(0);
    });

    test('Movimiento en A desde 2,2', () => {
        let robot = new Robot(2,2);
        robot.comando(['A', 'A']);
        expect(robot.pos.obtenerPosicionX()).toBe(0);
    });

    test('Movimiento en A desde 1,0', () => {
        let robot = new Robot(1,0);
        robot.comando(['A']);
        expect(robot.pos.obtenerPosicionX()).toBe(0);
    });

    test('Movimiento en A desde 0,1', () => {
        let robot = new Robot(0,1);
        robot.comando(['A']);
        expect(robot.pos.obtenerPosicionX()).toBe(0);
    });
});


describe('Movimiento en S', () => {
    test('Movimiento en S comenzando en 0,0', () => {
        let robot = new Robot(0,0);
        robot.comando(['S']);
        expect(robot.pos.obtenerPosicionY()).toBe(0);
    });

    test('Movimiento en S desde 1,1', () => {
        let robot = new Robot(1,1);
        robot.comando(['S']);
        expect(robot.pos.obtenerPosicionY()).toBe(0);
    });

    test('Movimiento en S desde 2,2', () => {
        let robot = new Robot(2,2);
        robot.comando(['S', 'S']);
        expect(robot.pos.obtenerPosicionY()).toBe(0);
    });

    test('Movimiento en S desde 1,0', () => {
        let robot = new Robot(1,0);
        robot.comando(['S']);
        expect(robot.pos.obtenerPosicionY()).toBe(0);
    });

    test('Movimiento en S desde 0,1', () => {
        let robot = new Robot(0,1);
        robot.comando(['S']);
        expect(robot.pos.obtenerPosicionY()).toBe(0);
    });
});

describe('Movimiento en D', () => {
    test('Movimiento en D comenzando en 0,0', () => {
        let robot = new Robot(0, 0);
        robot.comando(['D']);
        expect(robot.pos.obtenerPosicionX()).toBe(1);
    });

    test('Movimiento en D desde 1,1', () => {
        let robot = new Robot(1, 1);
        robot.comando(['D']);
        expect(robot.pos.obtenerPosicionX()).toBe(2);
    });

    test('Movimiento en D desde 2,2', () => {
        let robot = new Robot(2, 2);
        robot.comando(['D', 'D']);
        expect(robot.pos.obtenerPosicionX()).toBe(4);
    });

    test('Movimiento en D desde 1,0', () => {
        let robot = new Robot(1, 0);
        robot.comando(['D']);
        expect(robot.pos.obtenerPosicionX()).toBe(2);
    });

    test('Movimiento en D desde 0,1', () => {
        let robot = new Robot(0, 1);
        robot.comando(['D']);
        expect(robot.pos.obtenerPosicionX()).toBe(1);
    });
});

describe('Pruebas de movimiento del robot con comandos válidos e inválidos', () => {
    test('Movimiento con comandos válidos e inválidos', () => {
        let robot = new Robot(0, 0);
        robot.comando(['W', 'W', 'A', 'A', 'W']); // 'A' es un comando inválido en la posición (0, 2)
        expect(robot.pos.obtenerPosicionX()).toBe(0);
        expect(robot.pos.obtenerPosicionY()).toBe(0);
    });

    test('Movimiento con todos los comandos válidos', () => {
        let robot = new Robot(0, 0);
        robot.comando(['W', 'W', 'D', 'D', 'S']); // Todos los comandos son válidos
        expect(robot.pos.obtenerPosicionX()).toBe(2);
        expect(robot.pos.obtenerPosicionY()).toBe(1);
    });

    test('Movimiento con todos los comandos inválidos', () => {
        let robot = new Robot(0, 0);
        robot.comando(['A', 'A', 'S', 'S', 'A']); // Todos los comandos son inválidos
        expect(robot.pos.obtenerPosicionX()).toBe(0);
        expect(robot.pos.obtenerPosicionY()).toBe(0);
    });

    test('Movimiento con comandos válidos e inválidos', () => {
        let robot = new Robot(0, 0);
        robot.comando(['W', 'A', 'W', 'D', 'S']); // 'A' es un comando inválido en la posición (0, 1)
        expect(robot.pos.obtenerPosicionX()).toBe(0);
        expect(robot.pos.obtenerPosicionY()).toBe(0);
    });

    test('Movimiento con 15 comandos, deteniéndose en el número 10', () => {
        let robot = new Robot(0, 0);
        robot.comando(['W', 'W', 'D', 'D', 'S', 'S', 'A', 'A', 'W', 'W', 'D', 'D', 'S', 'S', 'A']);
        expect(robot.pos.obtenerPosicionX()).toBe(0);
        expect(robot.pos.obtenerPosicionY()).toBe(2);
    });
});

describe('Obstaculos', () => {
    test('Movimiento WW y obstaculo, queda en 0,1', () => {
        let obstaculo = new Obstaculo(0, 3);
        let robot = new Robot(0, 0, obstaculo);
        robot.comando(['W', 'W', 'W']); 
        expect(robot.pos.obtenerPosicionX()).toBe(0);
        expect(robot.pos.obtenerPosicionY()).toBe(2);
    });

});
