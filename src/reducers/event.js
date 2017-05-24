import {RECEIVE_EVENT, CREATE_EVENT} from '../actions/action-types'

export default function event(state = {}, action) {
    if (action.type === RECEIVE_EVENT) {
        return action.payload
    }else if (action.type === CREATE_EVENT) {
        return action.payload
    }
    return state
}