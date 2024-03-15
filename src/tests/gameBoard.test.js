// create test for gameboard.js

import GameBoard from '../logic/classes/gameboard';
import Ship from '../logic/classes/ship';

describe('GameBoard', () => {
  let gameBoard;

  beforeEach(() => {
    gameBoard = new GameBoard()
  });

  test('should place a ship at specified coordinates', () => {
    const shipLength = 3;
    const xCoord = 0;
    const yCoord = 0;
    const direction = 'horizontal';
    gameBoard.placeShip(shipLength, xCoord, yCoord, direction);

    expect(gameBoard.grid[0][0]).toBeInstanceOf(Ship);
    expect(gameBoard.grid[0][1]).toBeInstanceOf(Ship);
    expect(gameBoard.grid[0][2]).toBeInstanceOf(Ship);
  });

  test('should throw an error if ship is placed out of bounds', () => {
    const shipLength = 3;
    const xCoord = 8;
    const yCoord = 0;
    const direction = 'horizontal';

    expect(() => {
      gameBoard.placeShip(shipLength, xCoord, yCoord, direction);
    }).toThrow('Ship is out of bounds');
  });

  test('should throw an error if position is occupied', () => {
    gameBoard.placeShip(3, 0, 0, 'horizontal');
    
    expect(() => {
      gameBoard.placeShip(3, 0, 0, 'vertical');
    }).toThrow('Position is occupied');
  });

  test('should accurately report when no positions are occupied', () => {
    const positions = [[5,5], [5,6], [5,7]];
    expect(gameBoard.isOccupied(positions)).toBe(false);
  });

  test('should accurately report when positions are occupied', () => {
    gameBoard.placeShip(3, 5, 5, 'horizontal');
    const positions = [[5,5], [5,6], [5,7]];
    expect(gameBoard.isOccupied(positions)).toBe(true);
  });
});