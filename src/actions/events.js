import {RECEIVE_EVENTS, DELETE_EVENT, MORE_EVENTS} from './action-types'
import axios from 'axios'

function receiveEvents(events, isEmpty) {
    return {
        type: RECEIVE_EVENTS,
        payload: events,
        isEmpty
    }
}

export function deleteEvent(eventId, i) {
    return {
        type: DELETE_EVENT,
        eventId,
        i
    }
}

export function moreEvents(events, isEmpty) {
    return {
        type: MORE_EVENTS,
        payload: events,
        isEmpty
    }
}

export function getEvents(page, size) {
    return function (dispatch) {

        let api = `http://localhost/events/get.php?page=${page}&size=${size}`

        return axios.get(api)
            .then(function (response) {
                const events = response.data.events
                const isEmpty = response.data.events.length < size
                return dispatch(receiveEvents(events, isEmpty))
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

export function deleteEventReq(id, i) {
    return function (dispatch) {
        const api = `http://localhost/events/delete.php?id=${id}`
        return axios.get(api)
            .then(function (response) {
                alert(response.data.msg)
                if (response.data.code === 1){
                    dispatch(deleteEvent(id, i))
                }
            })
            .catch(function (error) {
                console.log(error)
            })

    }
}


export function moreEventsReq(page, size, callback) {
    return function (dispatch) {

        let api = `http://localhost/events/get.php?page=${page}&size=${size}`

        return axios.get(api)
            .then(function (response) {
                const events = response.data.events
                const isEmpty = response.data.events.length < size
                dispatch(moreEvents(events, isEmpty))
                if (callback && typeof(callback) === "function") {
                    callback()
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }
}
