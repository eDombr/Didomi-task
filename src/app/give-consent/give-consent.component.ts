import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as _ from 'lodash';
import { ConsentService } from '../core/services/consent.service';
import { validationEmailPattern } from '../shared/config';

@Component({
    selector: 'didomi-give-consent',
    templateUrl: './give-consent.component.html',
    styleUrls: ['./give-consent.component.sass']
})
export class GiveConsentComponent implements OnInit {
    public consentForm: FormGroup;
    private validationEmailPattern = validationEmailPattern;

    constructor(private fb: FormBuilder,
                private consentService: ConsentService) { }

    public ngOnInit(): void {
        this.initConsentForm();
    }

    public initConsentForm() {
        this.consentForm = this.fb.group({
            'name': ['', Validators.required],
            'email': ['', [ Validators.required,
                            Validators.pattern(this.validationEmailPattern)]],
            'actions': this.fb.group({
                'newsletter': false,
                'ads': false,
                'anonymus': false
            }, { validator: this.actionsRequired })
        });
    }

    public submitConsentForm() {
        const consent = this.consentForm.value;
        this.consentService.giveConsent(consent)
            .subscribe(
                data => {
                    if (Array.isArray(data)) {
                        // this._alertService.alertNotificationSuccess('Consent was created!');
                        this.consentForm.reset();
                    }
                },
                err => {
                    const errorMessageFromApi = err ? err.json() : 'Server error';
                    // this._alertService.alertNotification(errorMessageFromApi);
                }
            );
    }

    public actionsRequired(controlGroup: FormGroup): { [key: string]: any } {
        const controlIsChecked = _.some(controlGroup.controls, { value: true });
        return controlIsChecked ? null : { 'unchecked': true };
    }

}
