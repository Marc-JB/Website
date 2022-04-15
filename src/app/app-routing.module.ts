import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LicensesComponent } from './licenses/licenses.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'privacy', component: PrivacyPolicyComponent },
    { path: 'licenses', component: LicensesComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
