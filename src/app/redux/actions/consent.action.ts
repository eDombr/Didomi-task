import { dispatch } from '@angular-redux/store';

import { BaseAction } from './base.action';

import { Action } from '../../shared/interfaces/action.interface';
import { Consent } from '../../shared/interfaces/consent.interface';

export class ConsentActions extends BaseAction {
    static readonly CLASS_NAME = 'ConsentActions:';

    static readonly ADD_CONSENTS = ConsentActions.getActType('ADD_CONSENTS');

    @dispatch()
    static addConsents(...consents: Consent[]): Action {
        return {
            type: ConsentActions.ADD_CONSENTS,
            payload: {
                consents
            }
        };
    }
}
