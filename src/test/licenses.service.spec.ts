import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { LicensesService } from '../app/licenses.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('LicensesService', () => {
    let service: LicensesService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
        });
        service = TestBed.inject(LicensesService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
