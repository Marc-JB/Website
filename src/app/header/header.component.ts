import { Component, OnInit, Input } from '@angular/core';

export enum HeaderStyle {
  primary, primaryElevated, transparent, transparentDark
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() headerStyle: HeaderStyle = HeaderStyle.primaryElevated;
  @Input() menu: any = null;
  @Input() maxWidth = 'auto';

  constructor() {}

  get isTransparent(): boolean {
    return this.headerStyle === HeaderStyle.transparent || this.headerStyle === HeaderStyle.transparentDark;
  }

  get maximumWidth(): string {
    return `max-width: ${this.maxWidth};`;
  }

  ngOnInit(): void {}
}
