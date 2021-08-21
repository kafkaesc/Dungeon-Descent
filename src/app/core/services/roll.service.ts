import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RollService {
    constructor() { }

    /* Return true or false */
    coinflip(): boolean {
        return (this.d(2) - 1) === 1;
    }

    /* Basic dice rolls */
    d2(): number {
        return this.d(2);
    }

    d4(): number {
        return this.d(4);
    }

    d6(): number {
        return this.d(6);
    }

    d8(): number {
        return this.d(8);
    }

    d10(): number {
        return this.d(10);
    }

    d12(): number {
        return this.d(12);
    }

    d20(): number {
        return this.d(20);
    }

    d100(): number {
        return this.d(100);
    }

    // Rolls a custom-sided die
    // d: sides on the die, must be >= 1
    d(d: number): number {
        if (d < 1) 
            return 0;

        return Math.floor(Math.random() * d) + 1;
    }

    // Rolls multiple dice and returns the results in an array
    // count: The number of dice to roll, must be >= 1
    // sides: The amount of sides on the dice, must be >= 1
    multiRoll(count: number, sides: number): number[] {
        if (count < 1 || sides < 1)
            return [];

        return Array.from({length: count}, () => this.d(sides));
    }

    // Returns a random integer on the range [floor, ceiling),
    // floor must be < ceiling
    r(floor: number, ceiling: number): number {
        if (floor >= ceiling) 
            return 0;

        return Math.floor(Math.random() * (ceiling - floor) + floor);
    }
}
