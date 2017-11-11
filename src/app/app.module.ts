import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NgReduxModule } from '@angular-redux/store/lib/src/ng-redux.module';

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
    CoreModule,
    SimpleNotificationsModule.forRoot(),
    NgReduxModule
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
