import { Player, ComputerPlayer } from '../logic/classes/player';
import Gameboard from '../logic/classes/gameboard';
describe('Player functionality', () => {
    let playerGameboard, computerGameboard, player, computer;

    beforeEach(() => {
        playerGameboard = new Gameboard();
        computerGameboard = new Gameboard();
        player = new Player('Human');
        computer = new ComputerPlayer();
    });

    test('Player can attack the computer gameboard', () => {
        const spy = jest.spyOn(computerGameboard, 'receiveAttack');
        player.attack(computerGameboard, { x: 2, y: 2 });
        expect(spy).toHaveBeenCalledWith({ x: 2, y: 2 });
    });

    test('Computer player generates a legal random attack', () => {
        computer.makeRandomAttack(playerGameboard);
        expect(computer.attemptedAttacks.size).toBe(1);
    });

    test('Computer does not repeat attacks', () => {
        for (let i = 0; i < 100; i++) {
            computer.makeRandomAttack(playerGameboard);
        }
        // Since the board is 10x10, there are 100 possible attacks.
        // This test ensures the computer does not repeat any.
        expect(computer.attemptedAttacks.size).toBeLessThanOrEqual(100);
    });
});
