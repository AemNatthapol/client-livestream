import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Camera from './components/Camera';
import Live from './components/Live';
import Watch from './components/Watch';

export default function App() {
  return (
    <Router>
      <div className="container">

        <div className="row">
          <h1 className="mt-3">
            Backend Livestream
          </h1>
          <hr className="mb=3"></hr>
        </div>

        <div className="row">
          <div className="col-md-2">
            <nav>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/camera">Camera</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/live">Live</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-md-10">
            <Switch>
              <Route path="/live/:id" component={Watch} />
              <Route path="/camera">
                <Camera />
              </Route>
              <Route path="/live">
                <Live />
              </Route>
            </Switch>
          </div>
        </div>
      </div> 
    </Router>   
  );
}
