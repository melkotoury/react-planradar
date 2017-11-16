import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension'


/**
 *  Here we will apply middleware and use redux devtools extension
 * */
export const store = createStore(
    rootReducers,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);
