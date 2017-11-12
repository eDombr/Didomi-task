import { ConsentActions } from './../redux/actions/consent.action';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';

import * as _ from 'lodash';
import { ConsentService } from '../core/services/consent.service';
import { validationEmailPattern } from '../shared/config/app.conf';

@Component({
    selector: 'didomi-give-consent',
    templateUrl: './give-consent.component.html',
    styleUrls: ['./give-consent.component.sass']
})
export class GiveConsentComponent implements OnInit {
    public consentForm: FormGroup;
    private validationEmailPattern = validationEmailPattern;

    constructor(private fb: FormBuilder,
                private consentService: ConsentService,
                private notificationService: NotificationsService) { }

    public ngOnInit(): void {
        this.initConsentForm();
    }

    public initConsentForm(): void {
        this.consentForm = this.fb.group({
            'name': ['', Validators.required],
            'email': ['', [ Validators.required,
                            Validators.pattern(this.validationEmailPattern)]],
            'processes': this.fb.group({
                'firstProcess': false,
                'secondProcess': false,
                'thirdProcess': false
            }, { validator: this.processesValidator })
        });
    }

    public onSubmit(): void {
        const consent = this.consentForm.value;
        this.consentService.giveConsent(consent)
            .subscribe(
                data => {
                    this.notificationService.success('Succes', 'Consent has been added');
                    ConsentActions.addConsents(data);
                    this.consentForm.reset();
                },
                err => {
                    this.notificationService.error('Error', err.message);
                }
            );
    }

    public processesValidator(controlGroup: FormGroup): { [key: string]: any } {
        const controlIsChecked = _.some(controlGroup.controls, { value: true });
        return controlIsChecked ? null : { 'unchecked': true };
    }

}
