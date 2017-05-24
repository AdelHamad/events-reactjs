import {RECEIVE_EVENTS, DELETE_EVENT, MORE_EVENTS} from '../actions/action-types'

export default function events(state = {}, action) {
    if (action.type === RECEIVE_EVENTS) {
        return {
            events: action.payload,
            isEmpty: action.isEmpty
        }
    } else if (action.type === DELETE_EVENT) {
        return {
            events: [
                ...state.events.slice(0, action.i),
                ...state.events.slice(action.i + 1)
            ]
        };
    } else if (action.type === MORE_EVENTS) {
        return {
            events: [
                ...state.events, ...action.payload
            ],
            isEmpty: action.isEmpty
        };
    }

    return state
}