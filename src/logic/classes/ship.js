export default class ship {
    constructor(length) {
        this.length = length
        this.hits = 0
        this.sunk = false
    }

    hit() {
        this.hits++
        this.isSunk()
    }

    isSunk() {
        if (this.hits === this.length) {
            return true
        } 
        return false    
    }
}
