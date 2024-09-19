const Nodo = function(value) {
    this.value = value;
    let next = null;
};

const Cola = function() {
    let first = null;
    let last = null;

    this.queue = function(nodoToQueue) {
        if (!this.first) { // con el "!" == null
            this.first = nodoToQueue;
            this.first.next = nodoToQueue;
            this.last = nodoToQueue;
            // this.last.next = nodoToQueue;
            // this.last = nodoToQueue;
        } 
        else {
            this.last.next = nodoToQueue;
            this.last = nodoToQueue;
        }
        
        return "first: " + this.first.value + ", last: " + this.last.value;
    }

    this.dequeue = function() {
        if (!this.first) { // con el "!" == null
            return "error";
        } else if (this.first == this.last){
            this.first = null;
            this.last = null;
            return "first: null, last: null";
        } else { 
            // let outputValue = this.first.value;
            aux = this.first.next;
            // this.first = null;
            this.first = aux

            // this.first = this.first.next;
            return "first: " + this.first.value + ", last: " + this.last.value;
        }
    }
}

module.exports = { Nodo, Cola };

