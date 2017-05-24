import React from "react"
import {filesURL} from "../../data/golbals"
import {Link} from 'react-router'
// Home page component
export default class ItemRow extends React.Component {
    // render


    constructor(props){
        super(props)
    }


    render() {
        const {pic, id, title, desc} = this.props.myEvent
        const picElement = pic ? <img src={filesURL + pic} alt=""/> : ""
        return(
            <div >
                <h1><Link to={`/event/${id}`}>{title}</Link></h1>
                <p>{desc}</p>
                {picElement} <br/>
            </div>
        )
    }




}

