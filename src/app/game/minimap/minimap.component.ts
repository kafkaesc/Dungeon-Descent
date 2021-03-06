import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { IDungeon } from 'src/app/core/models/iDungeon';

@Component({
    selector: 'minimap',
    templateUrl: './minimap.component.html',
    styleUrls: ['./minimap.component.css']
})
export class MinimapComponent implements OnInit {
    @Input() dungeon!: IDungeon;

    constructor() { }

    ngOnInit(): void {
        
    }
}
