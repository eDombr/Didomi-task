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

    public initConsentForm() {
        this.consentForm = this.fb.group({
            'name': ['', Validators.required],
            'email': ['', [ Validators.required,
                            Validators.pattern(this.validationEmailPattern)]],
            'checks': this.fb.group({
                'firstCheck': false,
                'secondCheck': false,
                'thirdCheck': false
            }, { validator: this.checkboxValidator })
        });
    }

    public submitConsentForm() {
        const consent = this.consentForm.value;
        this.consentService.giveConsent(consent)
            .subscribe(
                data => {
                    if (Array.isArray(data)) {
                        this.notificationService.success('Succes', 'Consent has been added');
                        this.consentForm.reset();
                    }
                },
                err => {
                    const errorMessageFromApi = err ? err.json().message : 'Server error';
                    this.notificationService.error('Error', errorMessageFromApi);
                }
            );
    }

    public checkboxValidator(controlGroup: FormGroup): { [key: string]: any } {
        const controlIsChecked = _.some(controlGroup.controls, { value: true });
        return controlIsChecked ? null : { 'unchecked': true };
    }

}
