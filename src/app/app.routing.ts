import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiveConsentComponent } from './consents/give-consent/give-consent.component';
import { CollectedConsentsComponent } from './consents/collected-consents/collected-consents.component';

export const AppRoutes: Routes = [
    { path: '', redirectTo: 'give-consent', pathMatch: 'full' },
    { path: 'give-consent', component: GiveConsentComponent },
    { path: 'collected-consents', component: CollectedConsentsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(AppRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
