import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IDungeon, IDungeonFloor, IDungeonRoom } from 'src/app/core/models/iDungeon';
import { DungeonGeneratorService } from 'src/app/core/services/dungeon-generator.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
    isFinished: boolean = false;
    isWon: boolean = false;
    isLost: boolean = false;

    dungeon!: IDungeon;
    activeFloor!: IDungeonFloor;
    activeRoom!: IDungeonRoom;
    nextFloor!: IDungeonFloor;
    nextRooms!: IDungeonRoom[];
    dungeonDepth: number = 0;

    flavorText: string = 'The smell of dust and decay fills the cold air. You see door(s) in front of you.'
    minimapString: string[] = [];

    constructor(private dgs: DungeonGeneratorService, private router: Router) { }

    ngOnInit(): void {
        this.startDungeon();
    }

    startDungeon(): void {
        this.dungeon = this.dgs.initiateDungeon();
        this.activeFloor = this.dungeon.dungeonMap[0];
        this.activeRoom = this.dungeon.dungeonMap[0].rooms[0];
        this.nextFloor = this.dgs.nextFloor(this.activeFloor);
        this.nextRooms = this.nextFloor.rooms;
        this.dungeonDepth++;
        this.appendMapString(this.activeFloor);
    }

    appendMapString(df: IDungeonFloor) {
        let st: string = 'Floor ' + this.dungeonDepth + ': ';
        for (let i = 0; i < df.rooms.length; i++) {
            if (df.rooms[i].width === 1)
                st += '[]';
            else if (df.rooms[i].width === 2)
                st += '[``]';
            else if (df.rooms[i].width === 3)
                st += '[````]';
        }
        this.minimapString.unshift(st);
    }

    gotoHome(): void {
        this.router.navigate(['Home']);
    }

    nextRoom(roomIndex: number): void {
        let newNextFloor = this.dgs.nextFloor(this.activeFloor);
        this.activeFloor = this.nextFloor;
        this.nextFloor = newNextFloor;
        this.nextRooms = this.nextFloor.rooms;
        this.dungeonDepth++;

        if (this.dungeonDepth === 10)
            this.isFinished = true;
 
        this.appendMapString(this.activeFloor);
    }
}
