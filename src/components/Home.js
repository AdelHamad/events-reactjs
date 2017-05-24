import React from "react"
import {Link} from "react-router"
// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <h4>Hello world!</h4>
        <Link to="events">events</Link>
      </div>
    );
  }
}
