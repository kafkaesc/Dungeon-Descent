import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { MainMenuItemComponent } from './main-menu-item/main-menu-item.component';
import { RouterModule } from '@angular/router';

const routes = [
    { path: 'About', component: AboutComponent },
    { path: 'Home', component: HomeComponent },
    { path: 'Instructions', component: InstructionsComponent }
];

@NgModule({
    declarations: [
        AboutComponent, 
        HomeComponent, 
        InstructionsComponent,
        MainMenuItemComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class MainModule { }
