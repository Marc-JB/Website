import { Component, Input, ViewChild } from '@angular/core';
import { MatLegacyMenu as MatMenu } from '@angular/material/legacy-menu';

@Component({
    selector: 'app-menu',
    templateUrl: './app-menu.component.html',
    styleUrls: ['./app-menu.component.scss']
})
export class AppMenuComponent {
    @Input()
    showHome: boolean = true

    @ViewChild(MatMenu)
    menu: MatMenu | undefined
}
