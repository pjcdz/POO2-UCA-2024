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

const Robot = function (posX, posY) {
    this.pos = new Posicion(posX, posY);

    this.movimientoEnW = function (letra, posGenerica) {
        if (letra === 'W') {
            posGenerica.actualizarPosicionY(posGenerica.obtenerPosicionY() + 1);
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
        if (letra === 'D') {
            posGenerica.actualizarPosicionX(posGenerica.obtenerPosicionX() + 1);
            return true;
        }
        return false;
    }

    this.verificacion = function(letra) {
        let posicionAux = new Posicion(this.pos.obtenerPosicionX(), this.pos.obtenerPosicionY());
        let resultado = this.movimientoEnW(letra, posicionAux) ||
            this.movimientoEnA(letra, posicionAux) ||
            this.movimientoEnS(letra, posicionAux) ||
            this.movimientoEnD(letra, posicionAux);
    
        if (resultado == false) {
            return false;
        } else {
            return true;
        }
    }

    this.comando = function(strComandos) {
        let comandoInvalidoEnStrComandos = false;
        strComandos.map((letra) => { // Se ejecuta el comando para cada letra, si se encuentra un comando inválido, se detiene la ejecución
            if (this.verificacion(letra) == false) {
                comandoInvalidoEnStrComandos = true;
            }
            if (comandoInvalidoEnStrComandos == false) {
                this.movimientoEnW(letra, this.pos);
                this.movimientoEnA(letra, this.pos);
                this.movimientoEnS(letra, this.pos);
                this.movimientoEnD(letra, this.pos);
            }
        });
    }
}

module.exports = Robot;