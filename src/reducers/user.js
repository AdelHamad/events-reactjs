import {SIGNIN, SIGNUP} from '../actions/action-types'

export default function user(state = {}, action) {
    if (action.type === SIGNIN) {
        return action.payload
    }else if (action.type === SIGNUP) {
        return action.payload
    }
    return state
}