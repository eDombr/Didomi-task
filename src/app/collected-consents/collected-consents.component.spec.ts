import { Observable } from 'rxjs/Observable';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Consent } from '../shared/interfaces/consent.interface';
import { SharedModule } from './../shared/shared.module';

import { CollectedConsentsComponent } from './collected-consents.component';

import { ConsentService } from '../core/services/consent.service';
import { NotificationsService } from 'angular2-notifications';

import { ConsentMockService } from '../testing/services/consent.mock.service';
import { NotificationMockService } from '../testing/services/notification.mock.service';
import { MatTableDataSource } from '@angular/material';

function setMockNgRedux<T>(fixture: ComponentFixture<T>, consents: Consent[]): void {
    const appLoader = MockNgRedux.getSelectorStub(['consent', 'consents']);
    appLoader.next(consents);
    appLoader.complete();
}

describe('CollectedConsentsComponent', () => {
    let component: CollectedConsentsComponent;
    let fixture: ComponentFixture<CollectedConsentsComponent>;
    const consents: Consent[] = [
        { name: 'John', email: 'john@gmail.com', checks: { firstCheck: true, secondCheck: false, thirdCheck: true } },
        { name: 'Johanes', email: 'Johanes@gmail.com', checks: { firstCheck: true, secondCheck: true, thirdCheck: true } },
        { name: 'Emili', email: 'Emili@gmail.com', checks: { firstCheck: false, secondCheck: false, thirdCheck: true } },
        { name: 'Blala', email: 'Blala@gmail.com', checks: { firstCheck: true, secondCheck: false, thirdCheck: true } }
    ];

    beforeEach(async(() => {
        MockNgRedux.reset();
        TestBed.configureTestingModule({
            imports: [
                SharedModule,
                BrowserAnimationsModule,
                NgReduxTestingModule,
                RouterTestingModule
            ],
            declarations: [CollectedConsentsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CollectedConsentsComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        setMockNgRedux(fixture, consents);
        fixture.detectChanges();

        expect(component).toBeTruthy();
    });

    it('should get data from redux store', fakeAsync(() => {
        setMockNgRedux(fixture, consents);
        fixture.detectChanges();

        const dataSource = new MatTableDataSource<Consent>(consents);
        tick();
        expect(dataSource.data).toEqual(component.dataSource.data);
    }));

    it('shoud render table', () => {
        setMockNgRedux(fixture, consents);
        fixture.detectChanges();

        const de = fixture.debugElement.queryAll(By.css('.mat-row'));
        expect(de.length).toBe(2);
    });

    it('should show error message if data not found', () => {
        setMockNgRedux(fixture, []);
        fixture.detectChanges();

        const de = fixture.debugElement.query(By.css('.data-error'));
        expect(de).not.toBeNull('block with error should be rendered');
        expect(component.paginator).toBeUndefined('paginator should not be crated');
    });

    it('should filter checks', () => {
        setMockNgRedux(fixture, consents);
        fixture.detectChanges();

        const consent: Consent = { name: 'John', email: 'john@gmail.com', checks: { firstCheck: true, secondCheck: false, thirdCheck: true } };
        const checks: string[] = ['Receive newsletter', 'Contribute to anonymus visit statistics'];

        const filteredChecks: string[] = component.filterChecks(consent.checks);

        expect(checks).toEqual(filteredChecks);
    });

});
