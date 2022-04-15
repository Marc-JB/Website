import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    private static headerScrollTriggerPx: number = 48

    showFixedHeader: boolean = false

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.queryParams.subscribe((params: Params) => {
            if (params["page"] === 'privacy' || params["page"] === 'privacy-policy') {
                this.router.navigate(['/privacy-policy']);
            }
        });
    }

    @HostListener("window:scroll")
    onScroll() {
        this.showFixedHeader = document.body.scrollTop > HomeComponent.headerScrollTriggerPx
            || document.documentElement.scrollTop > HomeComponent.headerScrollTriggerPx
    }
}
