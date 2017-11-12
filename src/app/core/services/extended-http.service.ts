import { Injectable } from '@angular/core';
import { Http, RequestOptions, Request, RequestOptionsArgs, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

/* Interfaces */
import { Consent } from './../../shared/interfaces/consent.interface';

/* Mock data */
import { consents } from './../consents.mock';

@Injectable()
export class ExtendedHttpService extends Http {
    private consents: Consent[];

    constructor() {
        super(null, null);
        this.consents = consents;
    }

    public get<T>(url: string, options?: any): Observable<T> {
        const jsonData = JSON.stringify(this.consents);
        return Observable.of(<any>new CustomResponse(jsonData));
    }

    public post<T>(url: string, body, options?: any): Observable<T> {
        const consent = JSON.parse(body);

        if (!consent) {
            return Observable.throw({ message: 'Server Error' });
        }

        const jsonData = JSON.stringify(consent);
        return Observable.of(<any>new CustomResponse(jsonData));
    }

}

class CustomResponse extends Response {
    constructor(private data)  {
        super({body: '', status: 200, headers: null, url: '', merge: null});
    }

    public json(): any {
        return JSON.parse(this.data);
    }
}
