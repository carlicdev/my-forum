import React, { Component } from 'react';

import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Thread from './components/Forum/Thread';
import Login from './components/User/Login';
import Register from './components/User/Register';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Navbar />
      <div className="container p-2">
        <Switch>
          <Route path="/forums" component={Thread} />
          <Route path="/login" component={Login} />
          <Route path="/register/" component={Register} />
        </Switch>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
