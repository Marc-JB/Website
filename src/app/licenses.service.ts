import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LicensesService {
    constructor(
        private http: HttpClient
    ) { }

    getOpenSourceLicenseText() {
        return this.http.get("3rdpartylicenses.txt", { responseType: 'text' })
            .pipe(
                catchError(_ => this.http.get("https://marc-apps.nl/3rdpartylicenses.txt", { responseType: 'text' }))
            )
    }
}
