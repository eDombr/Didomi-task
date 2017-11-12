import { Component, Input } from '@angular/core';

@Component({
    selector: 'simple-notifications', // tslint:disable-line
    template: ''
})
export class SimpleNotificationsMockComponent {
    @Input('options') options: any;
}
