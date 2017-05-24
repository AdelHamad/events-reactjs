import React from "react"
import {Link} from "react-router"

// Home page component
export default class Event extends React.Component {
    // render

    componentWillMount(){
        const eventId = this.props.params.id
        this.props.getEventById(eventId)
    }

    render() {
        // console.log(this.props)
        const event = this.props.event
        const eventDiv = event ?  this.renderEvent(event) : ""
        return (
            <div className="page-home">
                <h4>Event {this.props.params.id}</h4>
                {eventDiv}
            </div>
        );
    }

    renderEvent(event) {
        return (
            <div>
                <h4>{event.id}</h4>
                title: <p>{event.title}</p>
                desc: <p>{event.desc}</p>
                <button onClick={e => this.deleteEvent(event.id)}>X</button>
                <button><Link to={`/event/${event.id}/update`}>Update</Link></button>
            </div>
        )
    }

    deleteEvent(eventId, i){
        const {deleteEventReq, router} = this.props
        deleteEventReq(eventId)
            .then(function (response) {
                alert(response.data.msg)
                if (response.data.code === 1){
                    router.push('/events')
                }
            })
            .catch(function (error) {
                console.log(error)
            })

    }

}