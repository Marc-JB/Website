import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatToolbar } from '@angular/material/toolbar';

export enum HeaderStyle {
    primary, primaryElevated, transparent, transparentDark
}

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input() headerStyle: HeaderStyle = HeaderStyle.primaryElevated;
    @Input() menu: any = null;
    @Input() maxWidth = 'auto';

    @ViewChild(MatToolbar)
    toolbarElement: MatToolbar | undefined;

    get isTransparent(): boolean {
        return this.headerStyle === HeaderStyle.transparent || this.headerStyle === HeaderStyle.transparentDark;
    }

    get hasElevation(): boolean {
        return this.headerStyle === HeaderStyle.primaryElevated
    }

    get isDarkThemed(): boolean {
        return this.headerStyle === HeaderStyle.transparentDark
    }

    get maximumWidth(): string {
        return `max-width: ${this.maxWidth};`;
    }

    get toolbarColor(): ThemePalette {
        return this.isTransparent ? undefined : "primary"
    }

    constructor() { }

    ngOnInit(): void { }

    ngAfterViewInit(): void {
        if (this.toolbarElement !== undefined) {
            this.toolbarElement.color = this.toolbarColor
        }
    }
}
