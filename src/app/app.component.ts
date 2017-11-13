import { Component, OnInit } from '@angular/core';
import { NgRedux, DevToolsExtension  } from '@angular-redux/store';
import { NotificationsService } from 'angular2-notifications';

/* Redux */
import { StoreReducer, INITIAL_STATE, Store } from './redux/app.store';
import { ConsentActions } from './redux/actions/consent.action';

/* Services */
import { ConsentService } from './core/services/consent.service';

/* Constants */
import { notificationOptions } from './shared/config/app.conf';

@Component({
    selector: 'didomi-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    public options = notificationOptions;

    constructor(private ngRedux: NgRedux<Store>,
                private devTools: DevToolsExtension,
                private consentService: ConsentService,
                private notificationService: NotificationsService) {
        let enhancers = [];

        /* configuration ngRedux and devtools */
        if (devTools.isEnabled()) {
            enhancers = [ ...enhancers, devTools.enhancer() ];
        }
        this.ngRedux.configureStore(StoreReducer, INITIAL_STATE, null, enhancers);
    }

    public ngOnInit(): void {
        this.consentService.getConsents()
            .subscribe(
                consents => {
                    /* Adding consent to redux store */
                    ConsentActions.addConsents(...consents);
                },
                err => {
                    const errorMessage = err ? err.json().message : 'Server error';
                    this.notificationService.error('Error', errorMessage);
                }
            );
    }
}
