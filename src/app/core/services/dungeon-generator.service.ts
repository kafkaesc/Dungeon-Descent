import { Injectable } from '@angular/core';
import { IDungeon, IDungeonFloor, IDungeonRoom } from '../models/iDungeon';
import { RollService } from './roll.service';

@Injectable({
    providedIn: 'root'
})
export class DungeonGeneratorService {
    roomTypes: string[] = [ 'loot', 'enemy', 'prisoners' ];

    constructor(private roll: RollService) { }

    initiateDungeon(): IDungeon {
        let dun: IDungeon = {
            id: this.roll.r(1000, 10000),
            dungeonMap: [this.generateFirstFloor()]
        };
        return dun;
    }

    seededFloor(seed: any): void {

    }

    seededRoom(seed: any): void {

    }

    nextFloor(): IDungeonFloor {
        let _id = 0;
        let _exits: boolean[] = Array.from({length: 3}, bo => bo = false);
        let _type = '';
        let _width = 0;
        let _rooms: IDungeonRoom[] = [];
        
        let i = 0;
        while (i < 3) {
            _id = this.roll.r(1000, 10000)
            _type = this.generateRoomType();
            _width = this.roll.d(3 - i);
            _exits = this.generateExits(_width),

            _rooms.push({
                id: _id,
                active: false,
                type: _type,
                exits: _exits,
                visited: false,
                width: _width
            });
            i += _width;
        }

        let df: IDungeonFloor = {
            id: this.roll.r(1000, 10000),
            rooms: _rooms,
            tier: 1
        }
        return df;
    };

    private generateFirstFloor(): IDungeonFloor {
        let df: IDungeonFloor = {
            id: this.roll.r(1000, 10000),
            rooms: [this.generateFirstRoom()],
            tier: 1
        }
        return df;
    }

    private generateFirstRoom(): IDungeonRoom {
        let dr: IDungeonRoom = {
            id: this.roll.r(1000, 10000),
            active: true,
            exits: [ true, true, true ],
            type: this.generateRoomType(),
            visited: false,
            width: 3
        };
        return dr;
    }

    private generateExits(width: number): boolean[] {
        let exits = Array.from({length: 3}, bo => bo = false);
        for (let i = 0; i < width; i++)
            exits[i] = (this.roll.d(i + 1) === i + 1);
        return exits;
    }

    private generateRoomType(): string {
        let res = this.roll.r(1, this.roomTypes.length + 1) - 1;
        return this.roomTypes[res];
    }
}
