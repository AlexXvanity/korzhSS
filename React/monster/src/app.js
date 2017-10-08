import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
	addTrack () {
		this.props.onAddTrack(this.trackInput.value);
		this.trackInput.value = '';
	}
	findTrack () {
		console.log('find track', this.searchInput.value);
		this.props.onFindTrack(this.searchInput.value);
	}
	render() {
		console.log(connect);
		console.log(this.props);
		return (
				<div>
					<div>
						<input ref = {(input)=> this.trackInput = input} type="text" className ="trakInput"/>
						<button onClick = {this.addTrack.bind(this)} className ="addTrack">addTrack</button>
					</div>
					<div>
						<input ref = {(input)=> this.searchInput = input} type="text" className ="trakInput"/>
						<button onClick = {this.findTrack.bind(this)} className ="findTrack">findTrack</button>
					</div>
					<ul>
						{this.props.tracks.map((track, index) => {
							return <li key = {track + index}>{track.name}</li>;
						})}
					</ul>
				</div>
		)
	}
}
export default connect(
	state => ({
		tracks: state.tracks.filter(track => track.name.includes(state.filterTracks))
	}), // Map state to props - функция маппит state from store в props react компонента
	dispatch => ({
		onAddTrack: (name) => {
			const text = {
				id: Date.now().toString(),
				name
			};
			dispatch({ type: 'add_track', text });
		},
		onFindTrack: (name) => {
			dispatch({ type: 'find_track', text:name });
		}	
	})
	
)(App);