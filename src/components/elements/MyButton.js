import React from "react"

// Home page component
export default class MyButton extends React.Component {
    // render


    constructor(props){
        super(props)
    }


    render() {

        return (
            <div>
                <button className="btn btn-default" onClick={this.props.callback}>{this.props.title}</button>
            </div>
        );
    }




}

