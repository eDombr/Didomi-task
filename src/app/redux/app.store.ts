import { combineReducers } from 'redux';

import { IConsent, ConsentReducer, INITIAL_STATE as INITIAL_STATE_CONSENT } from './consent.reducer';

/* Store Interface */
export interface IStore {
    consent: IConsent;
}

/* Store Initial State */
export const INITIAL_STATE: IStore = {
    consent: INITIAL_STATE_CONSENT
};

/* Combine State Reducers */
export const StoreReducer = combineReducers<IStore>({
    consent: ConsentReducer
});
