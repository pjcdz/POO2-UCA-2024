const Posicion = function (x, y) {
    this.x = x;
    this.y = y;

    this.obtenerPosicionX = function () {
        return this.x;
    }

    this.obtenerPosicionY = function () {
        return this.y;
    }

    this.actualizarPosicionX = function (nuevaX) {
        this.x = nuevaX;
    }

    this.actualizarPosicionY = function (nuevaY) {
        this.y = nuevaY;
    }
}

const Robot = function (posX, posY, obstaculo) {
    this.pos = new Posicion(posX, posY);
    this.obstaculo = obstaculo;

    this.movimientoEnW = function (letra, posGenerica) {
        if (letra === 'W' && posGenerica.obtenerPosicionY() < 100) {
            posGenerica.actualizarPosicionY(posGenerica.obtenerPosicionY() + 1);
            return true;
        }
        return false;
    }

    this.verificacionObstaculoMovimientoEnW = function (letra, posGenerica) {
        let obstaculoObstruyendoSiguienteMovimientoW = this.obstaculo &&
        posGenerica.obtenerPosicionY() + 1 === this.obstaculo.pos.obtenerPosicionY() &&
        posGenerica.obtenerPosicionX() === this.obstaculo.pos.obtenerPosicionX();

        if (letra === 'W' && !obstaculoObstruyendoSiguienteMovimientoW) {
            return true;
        }
        return false;
    }

    this.movimientoEnA = function (letra, posGenerica) {
        if (letra === 'A' && posGenerica.obtenerPosicionX() > 0) {
            posGenerica.actualizarPosicionX(posGenerica.obtenerPosicionX() - 1);
            return true;
        }
        return false;
    }

    this.movimientoEnS = function (letra, posGenerica) {
        if (letra === 'S' && posGenerica.obtenerPosicionY() > 0) {
            posGenerica.actualizarPosicionY(posGenerica.obtenerPosicionY() - 1);
            return true;
        }
        return false;
    }

    this.movimientoEnD = function (letra, posGenerica) {
        if (letra === 'D' && posGenerica.obtenerPosicionX() < 100) {
            posGenerica.actualizarPosicionX(posGenerica.obtenerPosicionX() + 1);
            return true;
        }
        return false;
    }

        this.verificacionGeneral = function(strComandos) {
        let posicionAux = new Posicion(this.pos.obtenerPosicionX(), this.pos.obtenerPosicionY());
        const resultados = strComandos.map((letra) => {
            return this.movimientoEnW(letra, posicionAux) ||
                this.movimientoEnA(letra, posicionAux) ||
                this.movimientoEnS(letra, posicionAux) ||
                this.movimientoEnD(letra, posicionAux);
        });
    
        if (resultados.includes(false)) {
            return false;
        } else {
            return true;
        }
    }

    this.verificacionIndividualParaObstaculos = function(letra) {
        let posicionAux = new Posicion(this.pos.obtenerPosicionX(), this.pos.obtenerPosicionY());
        let movimientoValido = this.verificacionObstaculoMovimientoEnW(letra, posicionAux) ||
            this.movimientoEnA(letra, posicionAux) ||
            this.movimientoEnS(letra, posicionAux) ||
            this.movimientoEnD(letra, posicionAux);
    
        if (movimientoValido == false) {
            return false;
        } else {
            return true;
        }
    }

    this.comando = function(strComandos) {
        let counter = 0; // Se limita a 10 movimientos
        let obstaculoEncontrado = false;

        if (this.verificacionGeneral(strComandos) == false) {
            return;
        }

        strComandos.map((letra) => { // Se ejecuta el comando para cada letra, si se encuentra un comando inválido, se detiene la ejecución
            let penUltimoMovimiento = counter == strComandos.length - 2; // Se verifica si es el penúltimo movimiento para quedarse quieto en la posicion actual
            if (this.verificacionIndividualParaObstaculos(letra) == false && !penUltimoMovimiento) {
                obstaculoEncontrado = true;
            }
            if (obstaculoEncontrado == false && counter < 10) {
                this.movimientoEnW(letra, this.pos);
                this.movimientoEnA(letra, this.pos);
                this.movimientoEnS(letra, this.pos);
                this.movimientoEnD(letra, this.pos);
                counter++;
            }
        });
    }
}

const Obstaculo = function(posX, posY) {
    this.pos = new Posicion(posX, posY);
}

module.exports = {Robot, Obstaculo};