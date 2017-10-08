const initialSate = '';

export default function filterTracks (state = initialSate, action) {

	if (action.type === 'find_track') {
        return action.text;
    } 
	return state;
}