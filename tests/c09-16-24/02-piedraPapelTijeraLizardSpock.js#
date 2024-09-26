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

    this.vsLizard = function() {
        return 1;
    }

    this.vsSpock = function() {
        return 0;
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

    this.vsLizard = function() {
        return 0;
    }

    this.vsSpock = function() {
        return 1;
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

    this.vsLizard = function() {
        return 1;
    }

    this.vsSpock = function() {
        return 0;
    }
}

const Lizard = function() {
    this.versus = function(against) {
        return against.vsLizard();
    }

    this.vsPiedra = function() {
        return 0;
    }

    this.vsPapel = function() {
        return 1;
    }

    this.vsTijera = function() {
        return 0;
    }

    this.vsLizard = function() {
        return null;
    }

    this.vsSpock = function() {
        return 1;
    }
}

const Spock = function() {
    this.versus = function(against) {
        return against.vsSpock();
    }

    this.vsPiedra = function() {
        return 1;
    }

    this.vsPapel = function() {
        return 0;
    }

    this.vsTijera = function() {
        return 1;
    }

    this.vsLizard = function() {
        return 0;
    }

    this.vsSpock = function() {
        return null;
    }
}

module.exports = { Piedra, Papel, Tijera, Lizard, Spock };
