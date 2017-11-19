import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import contactsReducer from '../reducers/contacts';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            contacts: contactsReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};