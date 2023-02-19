import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatLegacyMenu as MatMenu } from '@angular/material/legacy-menu';
import { MatToolbar } from '@angular/material/toolbar';

export enum HeaderStyle {
    primary, primaryElevated, transparent, transparentDark
}

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
    @Input()
    headerStyle: HeaderStyle = HeaderStyle.primaryElevated;

    @Input()
    menuComponent: { menu: MatMenu | undefined } | undefined;

    @Input()
    maxWidth = 'auto';

    @ViewChild(MatToolbar)
    toolbarElement: MatToolbar | undefined;

    get matMenu(): MatMenu | undefined {
        return this.menuComponent === undefined ? undefined : this.menuComponent.menu
    }

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

    ngAfterViewInit(): void {
        if (this.toolbarElement !== undefined) {
            this.toolbarElement.color = this.toolbarColor
        }
    }
}
