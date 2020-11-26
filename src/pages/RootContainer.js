import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

import logo from '../assets/images/logo.svg';

import './styles/RootContainer.css';
import Button from '../components/button'

class RootContainer extends Component {
  render() {
    const { username } = this.props;
    return <Redirect to="/login" />
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            React / Redux / ReduxSagas / ReduxSauce STARTER
          </h1>
        </header>
        <h3>Welcome {username},</h3>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button />
        <div className="box" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.login.username
  };
};

export default connect(mapStateToProps, null)(RootContainer);
