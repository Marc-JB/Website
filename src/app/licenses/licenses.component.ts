import { Component, OnInit } from '@angular/core';
import { LicensesService } from '../licenses.service';

@Component({
    selector: 'app-licenses',
    templateUrl: './licenses.component.html',
    styleUrls: ['./licenses.component.scss'],
    standalone: false
})
export class LicensesComponent implements OnInit {
    public isLoading: boolean = true

    public text: string | undefined

    constructor(
        private licensesService: LicensesService
    ) { }

    ngOnInit(): void {
        this.licensesService.getOpenSourceLicenseText().subscribe({
            next: response => {
                this.isLoading = false
                this.text = response
            },
            error: _ => {
                this.isLoading = false
                this.text = "No open source licenses found."
            }
        })
    }
}
