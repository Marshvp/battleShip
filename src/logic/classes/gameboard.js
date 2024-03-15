export default class gameBoard {
    constructor() {
        this.grid = []
        this.ships = []
        this.missedShots = new Set();

        for (let i = 0; i < 10; i++) {
            this.grid[i] = new Array(10).fill(null)
        }
    }

    placeShip(ship, startX, startY, direction) {
        const positions = [];
        let x = startX
        let y = startY
        if (direction === 'horizontal') {
            for (let i = 0; i < ship.length; i++) {
                positions.push([x, y]);
                x++;
            }
        }
        
    }

    receiveAttack(x, y) {
        const target = this.grid[x][y];
        if (target) {
            target.hit();
            return true;
        }
    }
}