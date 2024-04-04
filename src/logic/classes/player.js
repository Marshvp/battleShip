class Player {
    constructor(name) {
        this.name = name;
    }

    attack(gameboard, coord) {
        gameboard.receiveAttack(coord);
    }
}

class ComputerPlayer extends Player {
    constructor() {
        super('Computer');
        this.attemptedAttacks = new Set();
    }

    // Generate a random, legal move
    makeRandomAttack(gameboard) {
        let x, y, key;
        do {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
            key = `${x},${y}`;
        } while (this.attemptedAttacks.has(key));
        
        this.attemptedAttacks.add(key);
        gameboard.receiveAttack({ x, y });
    }
}
//export both classes
export { Player, ComputerPlayer };