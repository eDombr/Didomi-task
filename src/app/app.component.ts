import { Component } from '@angular/core';

import { notificationOptions } from './shared/config/app.conf';

@Component({
    selector: 'didomi-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    public options = notificationOptions;
}
