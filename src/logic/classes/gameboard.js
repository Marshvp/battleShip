import ship from "./ship";

export default class GameBoard {
    constructor() {
        this.grid = []
        this.ships = []
        this.missedShots = new Set();

        for (let i = 0; i < 10; i++) {
            this.grid[i] = new Array(10).fill(null)
        }
    }

    isOutOfBounds(x,y) {
        return x < 0 || x > 9 || y < 0 || y > 9 
    }

    isOccupied(coordinates) {
        for (let [x, y] of coordinates) {
            if (this.grid[y][x]) {
                return true;
            }
        }
        return false;
    }

    placeShip(shipLength, xCoord, yCoord, direction) {
        const newship = new ship(shipLength);
        const positions = this.generatePositions(shipLength, xCoord, yCoord, direction);

        if (this.isOccupied(positions)) {
                throw new Error('Position is occupied');
            }      
        positions.forEach(([x, y]) => {
            this.grid[y][x] = newship;
        })
        
        this.ships.push({ ship: newship, positions });
    }

    generatePositions(length, x, y, direction) {
        const positions = [];
        const xAxis = x;
        const yAxis = y;

        for (let i = 0; i < length; i++) {
            const coord = direction === 'vertical' ? [xAxis, yAxis + i] : [xAxis + i, yAxis];
            if (this.isOutOfBounds(coord[0], coord[1])) {
                throw new Error('Ship is out of bounds');
            }
            
            positions.push(coord);
        }
        return positions;
    }
}