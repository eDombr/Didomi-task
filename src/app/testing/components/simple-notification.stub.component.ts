import { Component, Input } from '@angular/core';

@Component({
    selector: 'simple-notifications', // tslint:disable-line
    template: ''
})
export class SimpleNotificationsStubComponent {
    @Input('options') options: any;
}
