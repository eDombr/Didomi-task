import { Reducer } from 'redux';
import * as _ from 'lodash';

import { Consent } from './../shared/interfaces/consent.interface';
import { Action } from '../shared/interfaces/action.interface';
import { ConsentActions } from './actions/consent.action';
import { ReduxUtil } from './redux.util';

export interface IConsent {
    consents: Consent[];
}

export const INITIAL_STATE: IConsent = {
    consents: []
};

export const ConsentReducer: Reducer<IConsent> = (state = INITIAL_STATE, action: Action): IConsent => {
    switch (action.type) {
        case ConsentActions.ADD_CONSENTS: {
            const consents: Consent[] = ReduxUtil.addData(action.payload.consents, state.consents);
            return _.assign({}, state, { consents });
        }
    }
    return state;
};
