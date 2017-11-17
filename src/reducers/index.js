import {combineReducers} from 'redux'

import LangReducer from './lang'
import ActiveLangReducer from './active-lang'
import UsersReducers from './users'

/**
 * Take all our reducers and combine it in one javascript object to be passed to the store
 **/

const rootReducer = combineReducers({
    lang: LangReducer,
    activeLang: ActiveLangReducer,
    users: UsersReducers
});

export default rootReducer;