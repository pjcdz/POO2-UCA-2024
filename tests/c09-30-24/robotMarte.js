const Posicion = function (x, y) {
    this.x = x;
    this.y = y;

    this.obtenerPosicionX = function () {
        return this.x;
    }

    this.obtenerPosicionY = function () {
        return this.y;
    }

    this.actualizarPosicionY = function (nuevaY) {
        this.y = nuevaY;
    }
}

const Robot = function (posX, posY) {
    this.pos = new Posicion(posX, posY);

    this.movimientoEnS = function (letra) {
        if (letra === 'S' && this.pos.obtenerPosicionY() > 0) {
            this.pos.actualizarPosicionY(this.pos.obtenerPosicionY() - 1);
            return true;
        }
        return false;
    }

    this.verificacion = function(strComandos) {
        let posicionAux = new Posicion(this.pos.obtenerPosicionX(), this.pos.obtenerPosicionY());
        return strComandos.every((letra) => {
            if (letra === 'S' && posicionAux.obtenerPosicionY() > 0) {
                posicionAux.actualizarPosicionY(posicionAux.obtenerPosicionY() - 1);
                return true;
            }
            return false;
        });
    }

    this.comando = function(strComandos) {
        if (this.verificacion(strComandos)) { // if verificacion == true
            strComandos.map( (letra) => {
                this.movimientoEnS(letra);
            });
        }
    }
}

module.exports = { Robot, Posicion };