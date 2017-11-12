import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { Consent } from '../../shared/interfaces/consent.interface';

@Injectable()
export class ConsentMockService {
    private consents: Consent[] = [
        { name: 'John', email: 'john@gmail.com', processes: { firstProcess: true, secondProcess: false, thirdProcess: true } },
        { name: 'Johanes', email: 'Johanes@gmail.com', processes: { firstProcess: true, secondProcess: true, thirdProcess: true } },
        { name: 'Emili', email: 'Emili@gmail.com', processes: { firstProcess: false, secondProcess: false, thirdProcess: true } },
        { name: 'Blala', email: 'Blala@gmail.com', processes: { firstProcess: true, secondProcess: false, thirdProcess: true } },
        { name: 'Elizabet', email: 'Elizabet@gmail.com', processes: { firstProcess: true, secondProcess: true, thirdProcess: true } },
        { name: 'Grisha', email: 'Grisha@gmail.com', processes: { firstProcess: false, secondProcess: false, thirdProcess: true } }
    ];

    public getConsents(): Observable<Consent[]> {
        return Observable.of(this.consents);
    }

    public giveConsent(consent: Consent): Observable<Consent> {
        return Observable.of(consent);
    }
}
