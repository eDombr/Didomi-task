import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GiveConsentComponent } from './give-consent/give-consent.component';
import { CollectedConsentsComponent } from './collected-consents/collected-consents.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

const components = [
    AppComponent,
    SidebarComponent,
    GiveConsentComponent,
    CollectedConsentsComponent
];

const modules = [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    CoreModule
];

@NgModule({
    declarations: [
        ...components
    ],
    imports: [
        ...modules
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
