import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { GiveConsentComponent } from './give-consent/give-consent.component';
import { CollectedConsentsComponent } from './collected-consents/collected-consents.component';
import { AppRoutingModule } from './app.routing';


@NgModule({
    declarations: [
        AppComponent,
        SlidebarComponent,
        GiveConsentComponent,
        CollectedConsentsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
