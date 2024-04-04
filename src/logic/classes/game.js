import createBattleShipHTML from "../../Dom/renderBase.js";
import renderBoard from "../../Dom/renderBoard.js"
import Gameboard from "./gameboard.js";
import { Player, ComputerPlayer } from "./player.js";
import Ship from "./ship.js";

export default class Game {

    constructor() {
        this.playerGameboard = new Gameboard();
        this.computerGameboard = new Gameboard();
        this.player = new Player();
        this.computer = new ComputerPlayer();
        this.currentTurn = this.player;
    }

    init() {
        this.playerGameboard.placeShip({ x: 0, y: 0 }, new Ship(3), true);
        this.computerGameboard.placeShip({ x: 2, y: 2 }, new Ship(3), true);

        this.renderGameBoard();

        //console log the ships on the gameboard
        console.log('Player gameboard ships:', this.playerGameboard.ships);

        // this.setupAttackListeners();
    }

    renderGameBoard() {
        createBattleShipHTML();
        const playerBoard = document.querySelector('.playerBoard')
        const computerBoard = document.querySelector('.computerBoard')
        renderBoard(playerBoard)
        renderBoard(computerBoard)    
    }
}

//// Assuming Ship, Gameboard, Player, and ComputerPlayer classes are defined elsewhere
// This example does not include the actual implementation of these classes

// class Game {
//     constructor() {
//         this.player = new Player('Human');
//         this.computer = new ComputerPlayer();
//         this.playerGameboard = new Gameboard();
//         this.computerGameboard = new Gameboard();
//         this.currentTurn = this.player;
//     }

//     // Initialize the game with ships
//     init() {
//         // Setup ships at predetermined locations for simplicity
//         this.playerGameboard.placeShip({ x: 0, y: 0 }, new Ship(3), true);
//         this.computerGameboard.placeShip({ x: 2, y: 2 }, new Ship(3), true);
//         // Render gameboards
//         this.renderGameboards();
//         // Setup event listeners for player attacks
//         this.setupAttackListeners();
//     }

//     renderGameboards() {
//         // Render gameboards in the DOM
//         // This method should clear the gameboard areas and re-render them based on the Gameboard objects
//         // For simplicity, let's assume you have functions renderBoard(boardElement, gameboard) defined elsewhere
//         renderBoard(document.getElementById('playerBoard'), this.playerGameboard);
//         renderBoard(document.getElementById('computerBoard'), this.computerGameboard);
//     }

//     setupAttackListeners() {
//         // Add click event listeners to the computer's gameboard HTML element
//         // Each cell in the grid could have an ID corresponding to its coordinates, e.g., "cell-0-0" for (0, 0)
//         const computerBoardElement = document.getElementById('computerBoard');
//         computerBoardElement.addEventListener('click', (event) => {
//             const targetId = event.target.id;
//             if (targetId.startsWith('cell-')) {
//                 const [x, y] = targetId.split('-').slice(1).map(Number);
//                 this.playerAttack({ x, y });
//             }
//         });
//     }

//     playerAttack(coord) {
//         // Perform attack and switch turns
//         this.player.attack(this.computerGameboard, coord);
//         if (this.computerGameboard.allShipsSunk()) {
//             alert('Player wins!');
//             return;
//         }
//         this.computerTurn();
//     }

//     computerTurn() {
//         this.computer.makeRandomAttack(this.playerGameboard);
//         if (this.playerGameboard.allShipsSunk()) {
//             alert('Computer wins!');
//             return;
//         }
//         // Game continues, could update the UI to indicate whose turn it is
//     }
// }

// // Game initialization
// document.addEventListener('DOMContentLoaded', () => {
//     const game = new Game();
//     game.init();
// });