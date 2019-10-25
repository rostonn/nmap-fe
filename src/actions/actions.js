import 'cross-fetch/polyfill'

const apiUrl = process.env.REACT_APP_API_URL

export const clearNmapResults = () => {
    return {
        type: 'CLEAR_RESULTS'
    }
}

export const fetchNmapResults = (ipAddress) => {

    return dispatch => {
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
            .then(json => dispatch(nmapResultsReceived(json, ipAddress)))
            .catch(error => dispatch(fetchNmapResultsError(error)))
    }
}

export const nmapResultsReceived = (json, ipAddress) => {
    if(json.length === 0) {
        alert('NO Results for ' + ipAddress)
    }
    return {
        type: 'RECEIVED_NMAP_RESULTS',
        results: json
    }
}

export const fetchNmapResultsError = (error) => {
    console.log("Error recieved ....")
    console.log(error)
    alert('Error Fetching Nmap Results')
    return {
        type: 'NMAP_FETCH_ERROR'
    }
}