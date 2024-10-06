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
    // puede rebasar por derecha: para ello hace desde 00 (lugar A) (D)-> 10 (lugar X) (W)-> 11 (lugar S) (W)-> 12 (lugar W) (A)-> llega a 02 (lugar Q)

    // Se que la posicion actual es 00
    // Si me quiero mover en W y el obstaculo esta en 01
    // Tengo que rodear, moviendome D, W, W, A


    this.comando = function(strComandos) {
        let counter = 0; // Se limita a 10 movimientos
        let obstaculoEncontrado = false;

        if (!this.verificacionGeneral(strComandos)) { // if == false
            return false;
        }

        strComandos.map((letra, index) => { // Se ejecuta el comando para cada letra, si se encuentra un comando inválido, se detiene la ejecución
            let penUltimoMovimiento = counter == strComandos.length - 1; // Se verifica si es el penúltimo movimiento para quedarse quieto en la posicion actual
            if (this.verificacionIndividualParaObstaculos(letra) == false) {
                obstaculoEncontrado = true;
    
                // Intentar rebasar si no es el penúltimo movimiento y en la dirección específica
                if (!penUltimoMovimiento) {
                    switch (strComandos[index + 1]) {
                        case 'W':
                            // Rebasar si el penúltimo movimiento es 'W'
                            if (!this.comando(['A', 'W', 'W', 'D'])) { // Intenta rebasar por la izquierda
                                this.comando(['D', 'W', 'W', 'A']); // Si falla, intenta rebasar por la derecha
                            }
                            break;
    
                        // case 'A': 
                        //     // Rebasar si el penúltimo movimiento es 'A'
                        //     if (!this.comando(['W', 'A', 'A', 'S'])) { // Intenta rebasar por arriba
                        //         this.comando(['S', 'A', 'A', 'W']); // Si falla, intenta rebasar por abajo
                        //     }
                        //     break;
    
                        // case 'S':
                        //     // Rebasar si el penúltimo movimiento es 'S'
                        //     if (!this.comando(['D', 'S', 'S', 'A'])) { // Intenta rebasar por la derecha
                        //         this.comando(['A', 'S', 'S', 'D']); // Si falla, intenta rebasar por la izquierda
                        //     }
                        //     break;
    
                        case 'D':
                            // Rebasar si el penúltimo movimiento es 'D'
                            if (!this.comando(['S', 'D', 'D', 'W'])) { // Intenta rebasar por abajo
                                this.comando(['W', 'D', 'D', 'S']); // Si falla, intenta rebasar por arriba
                            }
                            break;
    
                        default:
                            break;
                    }
                }
            }
            if (obstaculoEncontrado == false && counter < 10) {
                this.movimiento(letra, this.pos);
                counter++;
            }
        });

        return true;
    }
}

module.exports = {Robot, Obstaculo};