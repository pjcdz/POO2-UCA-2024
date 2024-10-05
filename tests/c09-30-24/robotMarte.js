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

const Obstaculo = function(posX, posY) {
    this.pos = new Posicion(posX, posY);
}

const Robot = function (posX, posY, obstaculo) {
    this.pos = new Posicion(posX, posY);
    this.obstaculo = obstaculo;

    this.movimiento = function (letra, posGenerica) {
        switch (letra) {
            case 'W':
                if (posGenerica.obtenerPosicionY() < 100) {
                    posGenerica.actualizarPosicionY(posGenerica.obtenerPosicionY() + 1);
                    return true;
                }
                break;
            case 'A':
                if (posGenerica.obtenerPosicionX() > 0) {
                    posGenerica.actualizarPosicionX(posGenerica.obtenerPosicionX() - 1);
                    return true;
                }
                break;
            case 'S':
                if (posGenerica.obtenerPosicionY() > 0) {
                    posGenerica.actualizarPosicionY(posGenerica.obtenerPosicionY() - 1);
                    return true;
                }
                break;
            case 'D':
                if (posGenerica.obtenerPosicionX() < 100) {
                    posGenerica.actualizarPosicionX(posGenerica.obtenerPosicionX() + 1);
                    return true;
                }
                break;
        }
        return false;
    }

    this.verificacionObstaculoMovimiento = function (letra, posGenerica) {
        let obstaculoObstruyendoSiguienteMovimiento = false;
    
        if (this.obstaculo) {
            switch (letra) {
                case 'W':
                    obstaculoObstruyendoSiguienteMovimiento = 
                        posGenerica.obtenerPosicionY() + 1 === this.obstaculo.pos.obtenerPosicionY() &&
                        posGenerica.obtenerPosicionX() === this.obstaculo.pos.obtenerPosicionX();
                    break;
                case 'A':
                    obstaculoObstruyendoSiguienteMovimiento = 
                        posGenerica.obtenerPosicionY() === this.obstaculo.pos.obtenerPosicionY() &&
                        posGenerica.obtenerPosicionX() - 1 === this.obstaculo.pos.obtenerPosicionX();
                    break;
                case 'S':
                    obstaculoObstruyendoSiguienteMovimiento = 
                        posGenerica.obtenerPosicionY() - 1 === this.obstaculo.pos.obtenerPosicionY() &&
                        posGenerica.obtenerPosicionX() === this.obstaculo.pos.obtenerPosicionX();
                    break;
                case 'D':
                    obstaculoObstruyendoSiguienteMovimiento = 
                        posGenerica.obtenerPosicionY() === this.obstaculo.pos.obtenerPosicionY() &&
                        posGenerica.obtenerPosicionX() + 1 === this.obstaculo.pos.obtenerPosicionX();
                    break;
            }
        }
    
        if (!obstaculoObstruyendoSiguienteMovimiento) {
            return true;
        }
        return false;
    }

    this.verificacionGeneral = function(strComandos) {
        let posicionAux = new Posicion(this.pos.obtenerPosicionX(), this.pos.obtenerPosicionY());
        const resultados = strComandos.map((letra) => {
            return this.movimiento(letra, posicionAux);
        });
    
        if (resultados.includes(false)) {
            return false;
        } else {
            return true;
        }
    }

    this.verificacionIndividualParaObstaculos = function(letra) {
        let posicionAux = new Posicion(this.pos.obtenerPosicionX(), this.pos.obtenerPosicionY());
        let movimientoValido = this.verificacionObstaculoMovimiento(letra, posicionAux);
        if (movimientoValido == false) {
            return false;
        } else {
            return true;
        }
    }

// De estar en 00 (lugar A), comando WW, obstaculo en 01 (lugar S), simula sus movimiento para rebasar el obstaculo y llegar a 02 (lugar Q)
// puede rebasar por derecha: para ello hace desde 00 (lugar A) -> 10 (lugar X) -> 11 (lugar S) -> 12 (lugar W) -> llega a 02 (lugar Q)

    this.comando = function(strComandos) {
        let counter = 0; // Se limita a 10 movimientos
        let obstaculoEncontrado = false;

        if (this.verificacionGeneral(strComandos) == false) {
            return;
        }

        strComandos.map((letra) => { // Se ejecuta el comando para cada letra, si se encuentra un comando inválido, se detiene la ejecución
            let penUltimoMovimiento = counter == strComandos.length - 1; // Se verifica si es el penúltimo movimiento para quedarse quieto en la posicion actual
            if (this.verificacionIndividualParaObstaculos(letra) == false && penUltimoMovimiento) {
                obstaculoEncontrado = true;
            }
            if (obstaculoEncontrado == false && counter < 10) {
                this.movimiento(letra, this.pos);
                counter++;
            }
        });
    }
}

module.exports = {Robot, Obstaculo};