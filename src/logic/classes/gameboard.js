import Ship from './ship.js';
export default class Gameboard {
    constructor() {
        this.board = new Map();
        this.missedAttacks = [];
        this.ships = [];
        this.gridSize = 10;  
       }

    // Place a ship at specific coordinates with bounds checking.
    placeShip(startCoord, ship, isHorizontal = true) {
        // Check if the ship placement is within the bounds of the board.
        if (isHorizontal) {
            if (startCoord.x + ship.length > this.gridSize || startCoord.y >= this.gridSize) {
                console.error('Ship placement is out of bounds.');
                return false; // Indicate unsuccessful placement.
            }
        } else {
            if (startCoord.y + ship.length > this.gridSize || startCoord.x >= this.gridSize) {
                console.error('Ship placement is out of bounds.');
                return false;
            }
        }

        // Check if the path is clear (no other ships in the way).
        for (let i = 0; i < ship.length; i++) {
            const key = isHorizontal ? `${startCoord.x + i},${startCoord.y}` : `${startCoord.x},${startCoord.y + i}`;
            if (this.board.has(key)) {
                console.error('Ship placement overlaps with another ship.');
                return false; // Indicate unsuccessful placement due to overlap.
            }
        }

        // Place the ship since it's within bounds and doesn't overlap.
        this.ships.push(ship);
        for (let i = 0; i < ship.length; i++) {
            const key = isHorizontal ? `${startCoord.x + i},${startCoord.y}` : `${startCoord.x},${startCoord.y + i}`;
            this.board.set(key, ship);
        }
        return true; // Indicate successful placement.
    }

    receiveAttack(coord) {
        const key = `${coord.x},${coord.y}`;
        if (this.board.has(key)) {
            const ship = this.board.get(key);
            ship.hit();
            if (ship.isSunk()) {
                console.log('Ship sunk!');
            }
        } else {
            this.missedAttacks.push(key);
        }
    }

    allShipsSunk() {
        return this.ships.every(ship => ship.isSunk());
    }
}
