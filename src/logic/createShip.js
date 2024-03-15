import ship from './classes/ship'

export default function createShip(length) {
    if (length < 2 || length > 4) {
        throw new Error('Ship length must be between 2 and 4')
    }
    return new ship(length)
}