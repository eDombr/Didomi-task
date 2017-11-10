import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import * as _ from 'lodash';

import { ConsentService } from '../core/services/consent.service';
import { Consent } from './../shared/interfaces/consent.interface';
import { consentChecks } from './../shared/config';
import { DataSource } from '@angular/cdk/collections';

@Component({
    selector: 'didomi-collected-consents',
    templateUrl: './collected-consents.component.html',
    styleUrls: ['./collected-consents.component.sass']
})
export class CollectedConsentsComponent implements OnInit {
    public consents: Consent[];
    public dataSource: MatTableDataSource<Consent>;
    public displayedColumns = ['name', 'email', 'checks'];

    constructor(private consentService: ConsentService) { }

    ngOnInit() {
        this.consentService.getConsents()
            .subscribe(
                consents => {
                    this.consents = consents;
                    this.dataSource = new MatTableDataSource<Consent>(consents);
                    console.log(this.dataSource);
                }
            );
    }

    public filterChecks(checks) {
        const namesOfChecks = [];
        _.forEach(checks, (value, key) => {
            if (value) {
                namesOfChecks.push(consentChecks.get(key));
            }
        });
        return namesOfChecks;
    }

}
