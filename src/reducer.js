export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //Remove after finished developing
    // token: 'BQDf4YT7e1D5YN4IQIKnI8RH0H1rh3bt4yCH5qMdxQr6jsGbOyILKs6p9CFkXVcqXLNkVUa8lt4_jEQf0A55xAkZA44euB-azVDNKZaYfQmGR9bEdQVDewD-YzJgwPMvt-_kAfy-8UnLPfzad1qgv9itFx24xsrdNy4OmVZnF-PA7NZsKH0c',
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
            }
        default:
            return state;
    }



}

export default reducer;