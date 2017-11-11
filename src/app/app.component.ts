import { Component } from '@angular/core';
import { NgRedux, DevToolsExtension  } from '@angular-redux/store';
import { NotificationsService } from 'angular2-notifications';

import { notificationOptions } from './shared/config/app.conf';
import { StoreReducer, INITIAL_STATE, IStore } from './redux/app.store';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ConsentService } from './core/services/consent.service';
import { ConsentActions } from './redux/actions/consent.action';

@Component({
    selector: 'didomi-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    public options = notificationOptions;

    constructor(private ngRedux: NgRedux<IStore>,
                private devTools: DevToolsExtension,
                private consentService: ConsentService,
                private notificationService: NotificationsService) {
        let enhancers = [];

        if (devTools.isEnabled()) {
            enhancers = [ ...enhancers, devTools.enhancer() ];
        }
        this.ngRedux.configureStore(StoreReducer, INITIAL_STATE, null, enhancers);
    }

    public ngOnInit(): void {
        this.consentService.getConsents()
            .subscribe(
                consents => {
                    ConsentActions.addConsents(...consents);
                },
                err => {
                    const errorMessage = err ? err.json().message : 'Server error';
                    this.notificationService.error('Error', errorMessage);
                }
            );
    }
}
