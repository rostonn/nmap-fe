import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import * as actions from '../actions/actions.js'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const apiUrl = process.env.REACT_APP_API_URL

describe('async actions', () => {
    afterEach(() => {
        fetchMock.restore();

    })

    it('should have received results action on good response', () => {
        const store = mockStore({ })
        fetchMock.mock(apiUrl, {body:[]})

        return store.dispatch(actions.fetchNmapResults("1.1.1.1")).then(() => {

            const expectedActions = [{"results": [], "type": "RECEIVED_NMAP_RESULTS"}]
            expect(store.getActions().length).toEqual(1)
            expect(store.getActions()).toEqual(expectedActions)
        })
    })


    it('should return error action on bad response', () => {
        const store = mockStore({ })
        fetchMock.mock(apiUrl, {throws: new TypeError('Failed to fetch')})

        return store.dispatch(actions.fetchNmapResults("1.1.1.1")).then(() => {

            const expectedActions = [{type: "NMAP_FETCH_ERROR"}]
            expect(store.getActions().length).toEqual(1)
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('should return error action type', () => {
        const expected = 'NMAP_FETCH_ERROR'
        expect(actions.fetchNmapResultsError().type).toEqual(expected)
    })


})

