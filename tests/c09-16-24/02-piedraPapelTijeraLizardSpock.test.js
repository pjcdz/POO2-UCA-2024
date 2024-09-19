const { Piedra, Papel, Tijera, Lizard, Spock } = require('./02-piedraPapelTijeraLizardSpock');

let piedra;
let papel;
let tijera;
let lizard;
let spock;

beforeEach(() => {
    piedra = new Piedra();
    papel = new Papel();
    tijera = new Tijera();
    lizard = new Lizard();
    spock = new Spock();
});

describe('... vs Piedra', () => {
    test('Piedra vs Piedra', () => {
        expect(piedra.versus(piedra)).toBe(null);
    });

    test('Papel vs Piedra', () => {
        expect(piedra.versus(papel)).toBe(1); // Papel gana a Piedra
    });

    test('Tijera vs Piedra', () => {
        expect(piedra.versus(tijera)).toBe(0); // Piedra gana a Tijera
    });

    test('Lizard vs Piedra', () => {
        expect(piedra.versus(lizard)).toBe(0); // Piedra gana a Lizard
    });

    test('Spock vs Piedra', () => {
        expect(piedra.versus(spock)).toBe(1); // Spock gana a Piedra
    });
});

describe('... vs Papel', () => {
    test('Piedra vs Papel', () => {
        expect(papel.versus(piedra)).toBe(0); // Papel gana a Piedra
    });

    test('Papel vs Papel', () => {
        expect(papel.versus(papel)).toBe(null);
    });

    test('Tijera vs Papel', () => {
        expect(papel.versus(tijera)).toBe(1); // Tijera gana a Papel
    });

    test('Lizard vs Papel', () => {
        expect(papel.versus(lizard)).toBe(1); // Lizard gana a Papel
    });

    test('Spock vs Papel', () => {
        expect(papel.versus(spock)).toBe(0); // Papel gana a Spock
    });
});

describe('... vs Tijera', () => {
    test('Piedra vs Tijera', () => {
        expect(tijera.versus(piedra)).toBe(1); // Piedra gana a Tijera
    });

    test('Papel vs Tijera', () => {
        expect(tijera.versus(papel)).toBe(0); // Tijera gana a Papel
    });

    test('Tijera vs Tijera', () => {
        expect(tijera.versus(tijera)).toBe(null);
    });

    test('Lizard vs Tijera', () => {
        expect(tijera.versus(lizard)).toBe(0); // Tijera gana a Lizard
    });

    test('Spock vs Tijera', () => {
        expect(tijera.versus(spock)).toBe(1); // Spock gana a Tijera
    });
});

describe('... vs Lizard', () => {
    test('Piedra vs Lizard', () => {
        expect(lizard.versus(piedra)).toBe(1); // Piedra gana a Lizard
    });

    test('Papel vs Lizard', () => {
        expect(lizard.versus(papel)).toBe(0); // Lizard gana a Papel
    });

    test('Tijera vs Lizard', () => {
        expect(lizard.versus(tijera)).toBe(1); // Tijera gana a Lizard
    });

    test('Lizard vs Lizard', () => {
        expect(lizard.versus(lizard)).toBe(null);
    });

    test('Spock vs Lizard', () => {
        expect(lizard.versus(spock)).toBe(0); // Lizard gana a Spock
    });
});

describe('... vs Spock', () => {
    test('Piedra vs Spock', () => {
        expect(spock.versus(piedra)).toBe(0); // Spock gana a Piedra
    });

    test('Papel vs Spock', () => {
        expect(spock.versus(papel)).toBe(1); // Papel gana a Spock
    });

    test('Tijera vs Spock', () => {
        expect(spock.versus(tijera)).toBe(0); // Spock gana a Tijera
    });

    test('Lizard vs Spock', () => {
        expect(spock.versus(lizard)).toBe(1); // Lizard gana a Spock
    });

    test('Spock vs Spock', () => {
        expect(spock.versus(spock)).toBe(null);
    });
});
