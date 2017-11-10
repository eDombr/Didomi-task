import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import * as _ from 'lodash';

import { ConsentService } from '../core/services/consent.service';
import { Consent } from './../shared/interfaces/consent.interface';
import { consentChecks } from './../shared/config';

@Component({
    selector: 'didomi-collected-consents',
    templateUrl: './collected-consents.component.html',
    styleUrls: ['./collected-consents.component.sass']
})
export class CollectedConsentsComponent implements OnInit, AfterViewInit {
    public dataSource: MatTableDataSource<Consent>;
    public displayedColumns = ['name', 'email', 'checks'];

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private consentService: ConsentService) { }

    ngOnInit() {
        this.consentService.getConsents()
            .subscribe(
                consents => {
                    this.dataSource = new MatTableDataSource<Consent>(consents);
                }
            );
    }

    ngAfterViewInit() {
        console.log(this.paginator, this.dataSource);
        this.dataSource.paginator = this.paginator;
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
