import React from "react";
import "../stylesheets/main.scss";
import "../stylesheets/main.css";
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import actionCreators from '../actions/index'
import LoadingBar from 'react-redux-loading-bar'
// import 'antd/dist/antd.css';


// app component
class App extends React.Component {
    // render
    render() {
        return (
            <div>
                <LoadingBar/>
                <div className="container">
                    {React.cloneElement(this.props.children, this.props)}
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        events: state.events,
        event: state.event,
        lang: state.lang
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)