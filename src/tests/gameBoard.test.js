//create tests for gameboard.js

import Ship from '../logic/classes/ship';
import Gameboard from '../logic/classes/gameboard';


describe('Gameboard functionality', () => {
    let gameboard;

    beforeEach(() => {
        gameboard = new Gameboard();
    });

    test('should place a ship within bounds', () => {
        const ship = new Ship(3);
        expect(gameboard.placeShip({ x: 0, y: 0 }, ship, true)).toBe(true);
    });

    test('should not place a ship out of bounds', () => {
        const ship = new Ship(4);
        expect(gameboard.placeShip({ x: 8, y: 0 }, ship, true)).toBe(false); // Horizontal out of bounds
        expect(gameboard.placeShip({ x: 0, y: 8 }, ship, false)).toBe(false); // Vertical out of bounds
    });

    test('should detect a hit on a ship', () => {
        const ship = new Ship(3);
        gameboard.placeShip({ x: 2, y: 2 }, ship, true);
        gameboard.receiveAttack({ x: 3, y: 2 });
        expect(ship.hits).toBe(1);
    });

    test('should record a missed attack', () => {
        gameboard.receiveAttack({ x: 0, y: 0 });
        expect(gameboard.missedAttacks.includes('0,0')).toBe(true);
    });

    test('should report all ships sunk', () => {
        const ship1 = new Ship(1);
        gameboard.placeShip({ x: 0, y: 0 }, ship1, true);
        gameboard.receiveAttack({ x: 0, y: 0 });

        const ship2 = new Ship(1);
        gameboard.placeShip({ x: 1, y: 1 }, ship2, true);
        gameboard.receiveAttack({ x: 1, y: 1 });

        expect(gameboard.allShipsSunk()).toBe(true);
    });
});


