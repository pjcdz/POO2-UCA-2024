const { Nodo, Cola } = require('./03-colas');

let cola;
let nodo1;
let nodo2;
let nodo3;

beforeEach(() => {
    nodo1 = new Nodo("a");
    nodo2 = new Nodo("b");
    nodo3 = new Nodo("c");
    cola = new Cola();
});

test('1. dequeue empty should be: error', () => {
    expect(cola.dequeue(nodo1)).toBe("error");
});

test('2. queue "a" should be: first: a, last: a', () => {
    expect(cola.queue(nodo1)).toBe("first: a, last: a");
});

test('3. queue "a" then "b" should be: first: a, last: b', () => {
    expect(cola.queue(nodo1)).toBe("first: a, last: a");
    expect(cola.queue(nodo2)).toBe("first: a, last: b");
});

test('4. queue "a" then "b" then "c" should be: first: a, last: c', () => {
    expect(cola.queue(nodo1)).toBe("first: a, last: a");
    expect(cola.queue(nodo2)).toBe("first: a, last: b");
    expect(cola.queue(nodo3)).toBe("first: a, last: c");
});

test('5. dequeue "a" when it was "a" should be: first: null, last: null', () => {
    expect(cola.queue(nodo1)).toBe("first: a, last: a");
    expect(cola.dequeue()).toBe("first: null, last: null");
});

test('6. dequeue "a" when it was "ab" should be: first: b, last: b', () => {
    expect(cola.queue(nodo1)).toBe("first: a, last: a");
    expect(cola.queue(nodo2)).toBe("first: a, last: b");
    expect(cola.dequeue()).toBe("first: b, last: b");
});

test('7. dequeue "a" when it was "abc" should be: first: b, last: c', () => {
    expect(cola.queue(nodo1)).toBe("first: a, last: a");
    expect(cola.queue(nodo2)).toBe("first: a, last: b");
    expect(cola.queue(nodo3)).toBe("first: a, last: c");
    expect(cola.dequeue()).toBe("first: b, last: c");
});

