import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import Home from "./components/Home";
import Events from "./components/Events";
import Event from "./components/Event";
import NewEvent from "./components/NewEvent";
import SignIn from "./components/SignIn";
import Test from "./components/Test";
import NotFound from "./components/NotFound";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/events" component={Events}/>
      <Route path="/event/:id" component={Event}/>
      <Route path="/event/:id/update" component={NewEvent}/>
      <Route path="/new-event" component={NewEvent}/>
      <Route path="/signin" component={SignIn}/>
      <Route path="/test" component={Test}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// export
export { router };
