import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './../shared/shared.module';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NotificationsService } from 'angular2-notifications';
import { Observable } from 'rxjs/Observable';

import { GiveConsentComponent } from './give-consent.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConsentService } from '../core/services/consent.service';

import { ConsentMockService } from '../testing/services/consent.mock.service';
import { NotificationMockService } from '../testing/services/notification.mock.service';

describe('GiveConsentComponent', () => {
    let component: GiveConsentComponent;
    let fixture: ComponentFixture<GiveConsentComponent>;
    let consentService: ConsentService;

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
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call giveConsent method', fakeAsync(() => {
        const formData = {
            name: 'john',
            email: 'john@gmail.com',
            checks: {
                firstCheck: false,
                secondCheck: true,
                thirdCheck: false
            }
        };

        const spyGiveConsent = spyOn(consentService, 'giveConsent').and.returnValue(Observable.of(formData));

        component.consentForm.setValue(formData);
        component.submitConsentForm();
        tick();
        fixture.detectChanges();
        expect(spyGiveConsent).toHaveBeenCalled();
    }));
});


