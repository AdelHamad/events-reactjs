import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {reducer as formReducer} from "redux-form";
import events from './events'
import event from './event'
import user from './user'
import lang from './lang'
// import { loadingBarReducer } from 'react-redux-loading-bar'


// main reducers
export const reducers = combineReducers({
    // loadingBar: loadingBarReducer,
    routing: routerReducer,
    form: formReducer,
    events,
    event,
    user,
    lang
    // your reducer here
});
