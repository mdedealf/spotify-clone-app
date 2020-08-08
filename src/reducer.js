export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	// token:
	// 	'BQBrehtFSyV2MGBDPMiEumniAsOYWJUtQ1GwmZKJCGR7-Rwo-RBXo7OPI8X6VK2lLzd5kcKrLwwD_cXzXy5m1OClJgqst101ExABKdV3okbLtDupBsTSl9lsmc4f6mQlRsAagN95k8qJlW4LJvk2J9IDgrvHyoQ'
};

const reducer = (state, action) => {
	console.log(action);

	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user
			};

		case 'SET_TOKEN':
			return {
				...state,
				token: action.token
			};

		case 'SET_PLAYLISTS':
			return {
				...state,
				playlists: action.playlists
			};

		case 'SET_DISCOVER_WEEKLY':
			return {
				...state,
				discover_weekly: action.discover_weekly
			};

		default:
			return state;
	}
};

export default reducer;
