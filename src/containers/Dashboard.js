import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

import logo from '../assets/images/logo.svg';

import Button from '../components/button'

class Dashboard extends Component {
  render() {
    const { username } = this.props;
    // return <Redirect to="/login" />
    return (
      <div className="App">
        
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.login.username
  };
};

export default connect(mapStateToProps, null)(Dashboard);
