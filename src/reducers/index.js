import {combineReducers} from 'redux'

import LangReducer from './lang'

/**
 * Take all our reducers and combine it in one javascript object to be passed to the store
 **/

const rootReducer = combineReducers({
    lang: LangReducer
});

export default rootReducer;