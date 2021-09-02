import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GameComponent } from './game/game.component';
import { MinimapComponent } from './minimap/minimap.component';
import { Minimap2Component } from './minimap2/minimap2.component';

const routes = [
    { path: 'Dungeon', component: GameComponent },
    { path: 'Minimap', component: MinimapComponent },
    { path: 'Minimap2', component: Minimap2Component }
];

@NgModule({
    declarations: [
        GameComponent, 
        MinimapComponent, Minimap2Component
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class GameModule { }
