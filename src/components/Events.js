import React from "react"
import {Link} from "react-router"
import {filesURL} from "../data/golbals"
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

// Home page component
export default class Events extends React.Component {
    // render


    constructor(props){
        super(props)
        this.size = 5
        this.state = {
            page : 1,
        }
    }

    componentWillMount(){
        this.props.getEvents(0,this.size)
    }

    render() {
        const {events, isEmpty} = this.props.events
        const eventsDiv = events && events.length > 0 ? this.renderEvents(events) : ""
        const  moreButton = isEmpty ? "" : <button onClick={e=>this.moreEvents(e)}>more</button>

        return (
            <div className="page-home">
                <h4>Events!</h4>
                {eventsDiv}
                {moreButton}
            </div>
        );
    }


    renderEvents(events){
        return events.map((event, i)=>{
            const pic = event.pic
            const picElement = pic ? <img src={filesURL + pic} alt=""/> : ""
            return(
                <div key={event.id}>
                    <h1><Link to={`/event/${event.id}`}>{event.title}</Link></h1>
                    <p>{event.desc}</p>
                    {picElement} <br/>
                    <button onClick={()=>this.deleteEvent(event.id, i)}>X</button>
                </div>
            )
        })
    }

    deleteEvent(eventId, i){
        const {deleteEventReq} = this.props
        deleteEventReq(eventId, i)

    }

    moreEvents(e){
        e.preventDefault()
        let page = this.state.page
        this.props.moreEventsReq(page, this.size, ()=>this.setState({page: ++page}))
    }

}

