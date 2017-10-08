import React from 'react';

class LifeCycle extends React.Component {
    constructor (props) {
        super(props);
        this.state = {val: 0};
        this.update = this.update.bind(this);
    }

    update (e) {
        this.setState({val: this.state.val + 1});
    }

    componentWillMount () {
        console.log('Will Mount');
    }

    componentDidMount () {
        console.log('Did Mount');
    }
    
    render () {
        console.log('render');
        return (
            <button className = "button" onClick = {this.update}>{this.state.val}</button>
        );
    }
}

export default LifeCycle;