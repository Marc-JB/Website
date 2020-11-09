import { Component, OnInit, Input } from '@angular/core';

export enum HeaderStyle {
  PRIMARY, PRIMARY_ELEVATED, TRANSPARENT, TRANSPARENT_DARK
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() style: HeaderStyle = HeaderStyle.PRIMARY_ELEVATED;
  @Input() menu: any = null;
  @Input() maxWidth = 'auto';

  get isTransparent() {
    return this.style === HeaderStyle.TRANSPARENT || this.style === HeaderStyle.TRANSPARENT_DARK;
  }

  get maximumWidth() {
    return `max-width: ${this.maxWidth};`;
  }

  constructor() {}

  ngOnInit() {}
}
