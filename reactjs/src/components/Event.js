import React from 'react';

class Event extends React.Component {
    constructor (props) {
        super(props);
        this.state = {currentEvent: '____'};
        this.update = this.update.bind(this);
    }

    update (e) {
        this.setState({currentEvent: e.type});
    }

    render () {
        return (
            <div>
                <textarea cols = "30"
                          rows = "10" 
                          onKeyPress = {this.update} 
                          onCopy = {this.update} 
                          onFocus = {this.update}
                          onTouchStart = {this.update} 
                          onTouchMove = {this.update}
                          onTouchEnd = {this.onTouchEnd} />
                <h1>{this.state.currentEvent}</h1>
            </div>
        );
    }
}

export default Event;