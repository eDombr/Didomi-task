import { Reducer } from 'redux';
import * as _ from 'lodash';

/* Actions */
import { ConsentActions } from './actions/consent.action';

/* Interfaces */
import { Consent } from './../shared/interfaces/consent.interface';
import { Action } from '../shared/interfaces/action.interface';

export interface IConsent {
    consents: Consent[];
}

export const INITIAL_STATE: IConsent = {
    consents: []
};

export const ConsentReducer: Reducer<IConsent> = (state = INITIAL_STATE, action: Action): IConsent => {
    switch (action.type) {
        case ConsentActions.ADD_CONSENTS: {
            if (!_.isArray(action.payload.consents)) {
                return state;
            }
            const consents: Consent[] = [...state.consents, ...action.payload.consents];
            return _.assign({}, state, { consents });
        }
    }
    return state;
};
