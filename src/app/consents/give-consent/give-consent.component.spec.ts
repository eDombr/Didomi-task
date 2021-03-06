import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { Observable } from 'rxjs/Observable';
import { By } from '@angular/platform-browser';

/* Modules */
import { SharedModule } from './../../shared/shared.module';

/* Interfaces */
import { Consent } from '../../shared/interfaces/consent.interface';

/* Componens */
import { GiveConsentComponent } from './give-consent.component';

/* Services */
import { ConsentService } from '../../core/services/consent.service';

/* Mocks and stubs */
import { ConsentMockService } from '../../testing/services/consent.mock.service';
import { NotificationMockService } from '../../testing/services/notification.mock.service';

describe('GiveConsentComponent', () => {
    let component: GiveConsentComponent;
    let fixture: ComponentFixture<GiveConsentComponent>;
    let consentService: ConsentService;
    let notificationService: NotificationsService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                SharedModule,
                ReactiveFormsModule,
                BrowserAnimationsModule
            ],
            declarations: [GiveConsentComponent],
            providers: [
                { provide: ConsentService, useClass: ConsentMockService },
                { provide: NotificationsService, useClass: NotificationMockService }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GiveConsentComponent);
        component = fixture.componentInstance;
        consentService = fixture.debugElement.injector.get(ConsentService);
        notificationService = fixture.debugElement.injector.get(NotificationsService);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call giveConsent method and notification', fakeAsync(() => {
        const formData: Consent = {
            name: 'john',
            email: 'john@gmail.com',
            processes: {
                firstProcess: false,
                secondProcess: true,
                thirdProcess: false
            }
        };

        const spyGiveConsent = spyOn(consentService, 'giveConsent').and.returnValue(Observable.of(formData));
        const spyNotificationSucces = spyOn(notificationService, 'success');

        component.consentForm.setValue(formData);
        component.onSubmit();
        tick();
        fixture.detectChanges();
        expect(spyGiveConsent).toHaveBeenCalled();
        expect(spyNotificationSucces).toHaveBeenCalled();
    }));

    it('should throw error and call notifiction', fakeAsync(() => {
        const spyGiveConsent = spyOn(consentService, 'giveConsent').and.returnValue(Observable.throw({message: 'Server Error'}));
        const spyNotificationError = spyOn(notificationService, 'error');

        component.onSubmit();
        tick();
        fixture.detectChanges();
        expect(spyGiveConsent).toHaveBeenCalled();
        expect(spyNotificationError).toHaveBeenCalled();
    }));

    it('should disable submit button', () => {
        const formData: Consent = {
            name: 'john',
            email: 'john@gmail.com',
            processes: {
                firstProcess: false,
                secondProcess: false,
                thirdProcess: false
            }
        };

        component.consentForm.setValue(formData);
        fixture.detectChanges();

        const btn = fixture.debugElement.query(By.css('.give-consent-btn'));
        expect(btn.properties.disabled).toBeTruthy('disabled property should be true');
    });

    it('should enable submit button', () => {
        const formData: Consent = {
            name: 'john',
            email: 'john@gmail.com',
            processes: {
                firstProcess: false,
                secondProcess: true,
                thirdProcess: false
            }
        };

        component.consentForm.setValue(formData);
        fixture.detectChanges();

        const btn = fixture.debugElement.query(By.css('.give-consent-btn'));
        expect(btn.properties.disabled).toBeFalsy('disabled property should be false');
    });
});


