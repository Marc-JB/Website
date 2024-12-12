import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { LicensesComponent } from '../../app/licenses/licenses.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('LicensesComponent', () => {
    let component: LicensesComponent;
    let fixture: ComponentFixture<LicensesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LicensesComponent],
            imports: [],
            providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LicensesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
