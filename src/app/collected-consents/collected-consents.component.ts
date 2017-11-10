import { Component, OnInit } from '@angular/core';

import { ConsentService } from '../core/services/consent.service';
import { Consent } from './../shared/interfaces/consent.interface';

@Component({
    selector: 'didomi-collected-consents',
    templateUrl: './collected-consents.component.html',
    styleUrls: ['./collected-consents.component.sass']
})
export class CollectedConsentsComponent implements OnInit {
    public consents: Consent[];

    constructor(private consentService: ConsentService) { }

    ngOnInit() {
        this.consentService.getConsents()
            .subscribe(
                consents => {
                    this.consents = consents;
                    console.log(this.consents);
                }
            );
    }

}
