const initialSate = [];

export default function tracks (state = initialSate, action) {
	if (action.type === 'add_track') {
		return [
            ...state,
            action.text
        ]
    }
    
	return state;
}