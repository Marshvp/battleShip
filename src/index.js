import './assets/style.css'
import createGrid from './Dom/creategrid.js';
import createBattleShipHTML from './Dom/renderBase.js';
import renderBoard from './Dom/renderBoard.js';
import Game from './logic/classes/game.js';
document.addEventListener('DOMContentLoaded', () => {
  const game = new Game();
  game.init();
})