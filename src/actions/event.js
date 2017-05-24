import {RECEIVE_EVENT, CREATE_EVENT, UPDATE_EVENT} from './action-types'
import axios from 'axios'

function receiveEvent(event) {
    return {
        type: RECEIVE_EVENT,
        payload: event
    }
}

function createEvent(event) {
    return {
        type: CREATE_EVENT,
        payload: event
    }
}

export function updateEvent(event) {
    return {
        type: UPDATE_EVENT,
        payload: event
    }
}

export function getEventById(id, callback = null) {
    return function (dispatch) {
        // First dispatch: the app state is updated to inform
        // that the API call is starting.
        let api = `http://localhost/events/get.php?id=${id}`

        return axios.get(api)
            .then(function (response) {
                const event = response.data[0]
                dispatch(receiveEvent(event))
                if (callback && typeof(callback) === "function") {
                    callback()
                }

            })
            .catch((error) => {
                console.error(error);
            });

        // return fetch(api)
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         return dispatch(receiveEvent(responseJson))
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    }
}

export function newEvent(event) {

    return function (dispatch) {
        let eventData = new FormData();
        eventData.append('title', event.title);
        eventData.append('desc', event.desc);
        eventData.append('start_date', event.startDate);
        eventData.append('pic', event.picFile);
        eventData.append('longitude', event.longitude);
        eventData.append('latitude', event.latitude);
        eventData.append('location', event.location);

        const api = 'http://localhost/events/insert.php'
        return axios.post(api, eventData)
    }
}


export function updateEventReq(event) {

    return function (dispatch) {
        let eventData = new FormData();
        const pic = event.picFile ? event.picFile : event.pic // if update and he didnt choose new pic
        eventData.append('id', event.id);
        eventData.append('title', event.title);
        eventData.append('desc', event.desc);
        eventData.append('start_date', event.startDate);
        eventData.append('pic', pic);
        eventData.append('longitude', event.longitude);
        eventData.append('latitude', event.latitude);
        eventData.append('location', event.location);

        const api = 'http://localhost/events/update.php'
        return axios.post(api, eventData)
    }
}
