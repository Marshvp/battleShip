export default function createBattleShipHTML() {
    // Create the container div
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    // Create the h1 element for the title
    const h1 = document.createElement('h1');
    h1.textContent = 'BattleShip';
    containerDiv.appendChild(h1);

    // Create the content div
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');

    // Create the player div
    const playerDiv = document.createElement('div');
    playerDiv.classList.add('player');
    const playerH2 = document.createElement('h2');
    playerH2.textContent = 'Player';
    const playerBoardDiv = document.createElement('div');
    playerBoardDiv.classList.add('playerBoard');
    playerDiv.appendChild(playerH2);
    playerDiv.appendChild(playerBoardDiv);

    // Create the computer div
    const computerDiv = document.createElement('div');
    computerDiv.classList.add('computer');
    const computerH2 = document.createElement('h2');
    computerH2.textContent = 'Computer';
    const computerBoardDiv = document.createElement('div');
    computerBoardDiv.classList.add('computerBoard');
    computerDiv.appendChild(computerH2);
    computerDiv.appendChild(computerBoardDiv);

    // Nesting the structures
    contentDiv.appendChild(playerDiv);
    contentDiv.appendChild(computerDiv);
    containerDiv.appendChild(contentDiv);

    // Append the containerDiv to the body
    document.body.appendChild(containerDiv);
}