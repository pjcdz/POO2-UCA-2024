const { Robot, Posicion } = require('./robotMarte');

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
