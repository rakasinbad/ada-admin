import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';

import Dashboard from './containers/Dashboard';
import Login from './containers/Login'

import createStore from './redux';
const { store } = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route path="/*" component={()=><h1 style={{color:'red'}}>NOT FOUND!!!</h1>} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
