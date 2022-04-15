import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LicensesService } from '../app/licenses.service';

describe('LicensesService', () => {
    let service: LicensesService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
        service = TestBed.inject(LicensesService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
