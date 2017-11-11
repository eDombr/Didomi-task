import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Consent } from '../../shared/interfaces/consent.interface';

@Injectable()
export class ConsentMockService {
    private consents: Consent[] = [
        { name: 'John', email: 'john@gmail.com', checks: { firstCheck: true, secondCheck: false, thirdCheck: true } },
        { name: 'Johanes', email: 'Johanes@gmail.com', checks: { firstCheck: true, secondCheck: true, thirdCheck: true } },
        { name: 'Emili', email: 'Emili@gmail.com', checks: { firstCheck: false, secondCheck: false, thirdCheck: true } },
        { name: 'Blala', email: 'Blala@gmail.com', checks: { firstCheck: true, secondCheck: false, thirdCheck: true } },
        { name: 'Elizabet', email: 'Elizabet@gmail.com', checks: { firstCheck: true, secondCheck: true, thirdCheck: true } },
        { name: 'Grisha', email: 'Grisha@gmail.com', checks: { firstCheck: false, secondCheck: false, thirdCheck: true } }
    ];

    public getConsents(): Observable<Consent[]> {
        return Observable.of(this.consents);
    }

    public giveConsent(consent: Consent): Observable<Consent> {
        return Observable.of(consent);
    }
}
