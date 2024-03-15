import createShip from "../logic/createShip";
import ship from '../logic/classes/ship';

describe('createShip function', () => {
    test('creates a ship of valid length', () => {
        const validLength = 3;
        const myShip = createShip(validLength);
        expect(myShip).toBeInstanceOf(ship);
        expect(myShip.length).toBe(validLength);
    });

    test('throws an error for invalid length less than 2', () => {
        const invalidLength = 1;
        expect(() => {
            createShip(invalidLength);
        }).toThrow('Ship length must be between 2 and 4');
    });

    test('throws an error for invalid length greater than 4', () => {
        const invalidLength = 5;
        expect(() => {
            createShip(invalidLength);
        }).toThrow('Ship length must be between 2 and 4');
    });
});