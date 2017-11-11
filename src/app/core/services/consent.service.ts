import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Consent } from '../../shared/interfaces/consent.interface';

@Injectable()
export class ConsentService {
    private apiUrl = 'http://didomi/';

    constructor(private http: Http) { }

    public getConsents(): Observable<Consent[]> {
        return this.http.get(`${this.apiUrl}/consents`)
            .map((response: Response) => response.json());
    }

    public giveConsent(consent: Consent): Observable<Consent> {
        const body = JSON.stringify(consent);
        return this.http.post(`${this.apiUrl}/consent`, body)
            .map((response: Response) => response.json());
    }
}
