import { combineReducers } from 'redux';

import { ConsentState, ConsentReducer, INITIAL_STATE as INITIAL_STATE_CONSENT } from './consent.reducer';

/* Store Interface */
export interface Store {
    consent: ConsentState;
}

/* Store Initial State */
export const INITIAL_STATE: Store = {
    consent: INITIAL_STATE_CONSENT
};

/* Combine State Reducers */
export const StoreReducer = combineReducers<Store>({
    consent: ConsentReducer
});
