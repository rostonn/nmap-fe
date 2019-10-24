import 'cross-fetch/polyfill'

const apiUrl = process.env.REACT_APP_API_URL

export const simpleAction = () => dispatch => {
    dispatch({
        type: 'SIMPLE_ACTION',
        payload: 'result_of_simple_action'
    })
}

export const fetchNmapResults = (ipAddress) => {

    return dispatch => {
        console.log("Dispatching actions....")
        console.log(apiUrl)
        var options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "ipAddress": ipAddress
            })
        }
        return fetch(apiUrl, options).then(response => response.json())
            .then(json => dispatch(nmapResultsReceived(json)))
            .catch(error => dispatch(fetchNmapResultsError(error)))
    }
}

export const nmapResultsReceived = (json) => {
    console.log("Nmap results recieved...")
    console.log(json);
    return {
        type: 'RECEIVED_NMAP_RESULTS',
        results: json
    }
}

export const fetchNmapResultsError = (error) => {
    console.log("Error recieved ....")
    console.log(error)
    return {
        type: 'NMAP_FETCH_ERROR'
    }
}