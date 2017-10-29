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
     renderLiks () {
         let link = '';
         if (this.props.authenticated) {
             // Show a link to sign out
            link = <li className = "nav-item">
                  <Link to="/signout" className = "nav-link">Sign Out</Link>
             </li>
         } else {
             // Show a link to sign in or sign up
             link = [
                <li className = "nav-item" key = {1}>
                    <Link to="/signin" className = "nav-link">Sign In</Link>
                </li>, 
                <li className = "nav-item" key = {2}>
                    <Link to="/signup" className = "nav-link">Sign Up</Link>
                </li>
             ];
         }

         return link;
     }
  render () {
    return (
      <div className = "navbar navbar-light">
        <Link to = "/" className = "navbar-brand">Redux Auth</Link>
          <ul className = "nav navbar-nav">
              {this.renderLiks()}
          </ul>
      </div>
    );
  }
}

function mapStateToProps (state) {
    return { 
        authenticated: state.auth.authenticated 
    }
}

export default connect(mapStateToProps, actions)(Header);
