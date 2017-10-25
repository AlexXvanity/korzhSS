import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
    constructor (props) {
        super(props);
    }
    authButton () {
         if (this.props.authenticated) {
            return <button onClick = {() =>this.props.authenticate(false)}>Sign Out</button>;
         } else {
            return <button onClick = {() =>this.props.authenticate(true)}>Sign In</button>;
         }
     }
  render() {
    return (
      <div className = "navbar navbar-light">
          <ul className = "nav navbar-nav">
              <li className= "nav-item">
                  <Link to="/">Home</Link>
              </li>
              <li className= "nav-item">
                <Link to="/resources">Resourses</Link>
              </li>
              <li className= "nav-item">
                  {this.authButton()}
              </li>
          </ul>
      </div>
    );
  }
}

function mapStateToProps (state) {
    return { 
        authenticated: state.authenticated 
    }
}

export default connect(mapStateToProps, actions)(Header);
