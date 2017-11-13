import { Reducer } from 'redux';
import * as _ from 'lodash';

/* Actions */
import { ConsentActions } from './actions/consent.action';

/* Interfaces */
import { Consent } from './../shared/interfaces/consent.interface';
import { Action } from '../shared/interfaces/action.interface';

export interface ConsentState {
    consents: Consent[];
}

export const INITIAL_STATE: ConsentState = {
    consents: []
};

export const ConsentReducer: Reducer<ConsentState> = (state = INITIAL_STATE, action: Action): ConsentState => {
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
