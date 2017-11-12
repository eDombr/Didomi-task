import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import * as _ from 'lodash';

import { Consent } from './../shared/interfaces/consent.interface';
import { consentProcesses } from './../shared/config/app.conf';
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
    public displayedColumns: string[] = ['name', 'email', 'processes'];

    private subscriptions: Subscription[] = [];
    @select(['consent', 'consents']) consents$: Observable<Consent[]>;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor() { }

    public ngOnInit(): void {
        const sub: Subscription = this.consents$.subscribe(
            consents => {
                if (!(_.isArray(consents) && consents.length > 0)) {
                    return;
                }
                this.dataSource = new MatTableDataSource<Consent>(consents);
            }
        );
        this.subscriptions.push(sub);
    }

    public ngAfterViewInit(): void {
        if (this.dataSource) {
            this.dataSource.paginator = this.paginator;
        }
    }

    public filterProcesses(processes): string[] {
        const namesOfProcesses: string[] = [];
        _.forEach(processes, (value, key) => {
            if (value) {
                namesOfProcesses.push(consentProcesses.get(key));
            }
        });
        return namesOfProcesses;
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(sub => {
            sub.unsubscribe();
        });
    }

}
