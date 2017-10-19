import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker'
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';


import FrontPage from '../page/frontPage'
import NotFound from '../page/notFound'


export const Routes = () =>{
  Tracker.autorun(()=>{

    const routes = (
        <Router>
          <div>
            <Switch>
              <Route exact path="/" render={()=><FrontPage/>}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>
      )

    Meteor.startup(()=>{
      ReactDOM.render(routes, document.getElementById('app'))
    })

  })

}
