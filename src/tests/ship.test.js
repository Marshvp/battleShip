// test if ship class works

import ship from '../logic/classes/ship'



test('ship length increases', () => {
    const ship1 = new ship(5)
    expect(ship1.length).toBe(5)
})

test('ship hits increase', () => {
    const ship1 = new ship(5)
    ship1.hit()
    expect(ship1.hits).toBe(1)
})

test('ship is sunk', () => {
    const ship1 = new ship(5)
    ship1.hit()
    ship1.hit()
    ship1.hit()
    ship1.hit()
    ship1.hit()
    expect(ship1.isSunk()).toBe(true)
})