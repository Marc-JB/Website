import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppMenuComponent } from '../../app/app-menu/app-menu.component';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';

describe('AppMenuComponent', () => {
    let component: AppMenuComponent;
    let fixture: ComponentFixture<AppMenuComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                MatMenuModule
            ],
            declarations: [
                AppMenuComponent,
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
