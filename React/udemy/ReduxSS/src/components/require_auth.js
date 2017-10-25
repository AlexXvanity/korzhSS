import React, { Component } from 'react';
import { connect } from 'react-redux'; 

export default function (ComposedComponent) {
    class Authentification extends Component {
        static contextTypes = {
            router: React.PropTypes.object
        }
        componentWillMount () {
            if (!this.props.authenticated) {
                this.context.router.push('/');
            } 
        }
        componentWillUpdate(nextProps, nextState) {
            if (!nextProps.authenticated) {
                this.context.router.push('/');
            }
        }
        
        render () {
            console.log('Rendering', this.props.authenticated);
            return <ComposedComponent {...this.props}/>;
        }
    }

    function mapStateToProps (state) {
        return {authenticated: state.authenticated}
    }
    
    return connect(mapStateToProps)(Authentification);
}
