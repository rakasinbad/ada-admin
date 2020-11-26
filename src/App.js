import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';

import RootContainer from './pages/RootContainer';
import Login from './pages/Login'

import createStore from './redux';
const { store } = createStore();

class App extends Component {
  componentDidMount() {
    window.$name = 'king' //global variable
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions() {
    window.$width = window.innerWidth
    window.$height = window.innerHeight
  }


  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={RootContainer} />
            <Route exact path="/login" component={Login} />
            <Route path="/*" component={()=><h1 style={{color:'red'}}>NOT FOUND!!!</h1>} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
