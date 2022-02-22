
import React, { Component } from 'react';

class Home extends Component {
  componentWillUnmount() {
    <h1>Goodbye !!!</h1>
  }
  
  render() {
    return (
      <div className="container">
        <div className="container d-flex align-items-center text-center">
          <div className="form-signin">
            <h1 className="h3 mb-3 fw-normal">Welcome</h1>
            <button className="w-100 btn btn-lg btn-primary" type="button" onClick={this.props.onLogOut}>Log out</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
