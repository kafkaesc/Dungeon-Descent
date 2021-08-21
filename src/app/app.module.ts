import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { E404Component } from './shared/components/e404/e404.component';
import { GameModule } from './game/game.module';
import { MainModule } from './main/main.module';

const routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: '**', component: E404Component }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        GameModule,
        MainModule,
        RouterModule.forRoot(routes),
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
