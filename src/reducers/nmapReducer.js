

var initialState = {
    nmapData: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CLEAR_RESULTS':
            return {
                ...state,
                nmapData: []
            }
        case 'RECEIVED_NMAP_RESULTS':
            return {
                ...state,
                nmapData: action.results
            }
        default:
            return state
    }
}