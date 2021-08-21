import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GameComponent } from './game/game.component';
import { MinimapComponent } from './minimap/minimap.component';

const routes = [
    { path: 'Dungeon', component: GameComponent },
    { path: 'Minimap', component: MinimapComponent }
];

@NgModule({
    declarations: [
        GameComponent, 
        MinimapComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class GameModule { }
