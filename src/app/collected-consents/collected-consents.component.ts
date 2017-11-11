import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { NotificationsService } from 'angular2-notifications';
import * as _ from 'lodash';

import { ConsentService } from '../core/services/consent.service';
import { Consent } from './../shared/interfaces/consent.interface';
import { consentChecks } from './../shared/config/app.conf';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'didomi-collected-consents',
    templateUrl: './collected-consents.component.html',
    styleUrls: ['./collected-consents.component.sass']
})
export class CollectedConsentsComponent implements OnInit, AfterViewInit, OnDestroy {
    public dataSource: MatTableDataSource<Consent>;
    public displayedColumns = ['name', 'email', 'checks'];

    private subscriptions: Subscription[] = [];
    @select(['consent', 'consents']) consents$: Observable<Consent[]>;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private consentService: ConsentService,
                private notificationService: NotificationsService) { }

    public ngOnInit(): void {
        const sub: Subscription = this.consents$.subscribe(
            consents => {
                this.dataSource = new MatTableDataSource<Consent>(consents);
            },
            err => {
                const errorMessage = err ? err.json().message : 'Server error';
                this.notificationService.error('Error', errorMessage);
            }
        );
        this.subscriptions.push(sub);
    }

    public ngAfterViewInit(): void {
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

    public ngOnDestroy(): void {
        this.subscriptions.forEach(sub => {
            sub.unsubscribe();
        });
    }

}
