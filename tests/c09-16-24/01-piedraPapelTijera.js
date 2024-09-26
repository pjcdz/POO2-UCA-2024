const Piedra = function() {

    this.versus = function(against) {
        return against.vsPiedra();
    }

    this.vsPiedra = function() {
        return null;
    }

    this.vsPapel = function() {
        return 0;
    }

    this.vsTijera = function() {
        return 1;
    }
}

const Papel = function() {

    this.versus = function(against) {
        return against.vsPapel();
    }

    this.vsPiedra = function() {
        return 1;
    }

    this.vsPapel = function() {
        return null;
    }

    this.vsTijera = function() {
        return 0;
    }
}

const Tijera = function() {

    this.versus = function(against) {
        return against.vsTijera();
    }

    this.vsPiedra = function() {
        return 0;
    }

    this.vsPapel = function() {
        return 1;
    }

    this.vsTijera = function() {
        return null;
    }
}

module.exports = { Piedra, Papel, Tijera};