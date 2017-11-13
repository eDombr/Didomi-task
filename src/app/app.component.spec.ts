import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';
import { Observable } from 'rxjs/Observable';

/* Components */
import { AppComponent } from './app.component';

/* Services */
import { ConsentService } from './core/services/consent.service';
import { NotificationsService } from 'angular2-notifications';

/* Interfaces */
import { Consent } from './shared/interfaces/consent.interface';

/* Mocks and stubs */
import { SidebarStubComponent } from './testing/components/sidebar.stub.component';
import { SimpleNotificationsStubComponent } from './testing/components/simple-notification.stub.component';
import { ConsentMockService } from './testing/services/consent.mock.service';
import { NotificationMockService } from './testing/services/notification.mock.service';

describe('AppComponent', () => {
    let consentService: ConsentService;
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;
    let notificationService: NotificationsService;
    const consents: Consent[] = [
        { name: 'John', email: 'john@gmail.com', processes: { firstProcess: true, secondProcess: false, thirdProcess: true } },
        { name: 'Johanes', email: 'Johanes@gmail.com', processes: { firstProcess: true, secondProcess: true, thirdProcess: true } },
        { name: 'Emili', email: 'Emili@gmail.com', processes: { firstProcess: false, secondProcess: false, thirdProcess: true } },
        { name: 'Blala', email: 'Blala@gmail.com', processes: { firstProcess: true, secondProcess: false, thirdProcess: true } }
    ];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                SidebarStubComponent,
                SimpleNotificationsStubComponent
            ],
            imports: [
                RouterTestingModule,
                NgReduxTestingModule
            ],
            providers: [
                { provide: ConsentService, useClass: ConsentMockService },
                { provide: NotificationsService, useClass: NotificationMockService }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        consentService = fixture.debugElement.injector.get(ConsentService);
        notificationService = fixture.debugElement.injector.get(NotificationsService);
    });

    it('should create the app', async(() => {
        fixture.detectChanges();
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should call getConsents method', fakeAsync(() => {
        const spyGetConsents = spyOn(consentService, 'getConsents').and.returnValue(Observable.of(consents));

        tick();
        fixture.detectChanges();
        expect(spyGetConsents).toHaveBeenCalled();
    }));
});
