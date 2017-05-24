import {getEvents, deleteEventReq, deleteEvent, moreEventsReq} from './events'
import {getEventById, newEvent, updateEvent, updateEventReq} from './event'
import {signinReq} from './user-auth'
const actionCreators = {
    getEventById,
    getEvents,
    newEvent,
    deleteEventReq,
    deleteEvent,
    updateEvent,
    updateEventReq,
    signinReq,
    moreEventsReq
}

export default actionCreators