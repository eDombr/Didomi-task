import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http } from '@angular/http';

import { ConsentService } from './services/consent.service';
import { ExtendedHttpService } from './services/extended-http.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        ConsentService,
        ExtendedHttpService,
        { provide: Http, useClass: ExtendedHttpService }
    ]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
