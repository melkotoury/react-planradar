import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';
import rootReducers from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension'


const logger = createLogger();


/**
 *  Here we will apply middleware and use redux devtools extension
 * */
export const store = createStore(
    rootReducers,
    composeWithDevTools(
        applyMiddleware(thunk, promise, logger)
    )
);

