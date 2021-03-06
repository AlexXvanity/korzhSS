import { combineReducers } from 'redux';
import tracks from './tracks';
import playLists from './playLists';
import filterTracks from './filterTracks';

export default combineReducers({
	tracks,
	playLists,
	filterTracks
})