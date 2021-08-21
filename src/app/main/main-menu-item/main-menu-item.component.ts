import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'main-menu-item',
    templateUrl: './main-menu-item.component.html',
    styleUrls: ['./main-menu-item.component.css']
})
export class MainMenuItemComponent implements OnInit {
    @Input() text!: string;
    @Output('fn') fn: EventEmitter<any> = new EventEmitter();
  
    constructor() { }

    ngOnInit(): void {
    }

    runFn(): void {
        this.fn.emit();
    }
}
