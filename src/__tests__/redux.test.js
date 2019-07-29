import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../actions/personAction'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  it('FETCH_DATA_BEGIN', () => {    
    const expectedActions = [
      { type: actions.ActionType.FETCH_DATA_BEGIN }
    ]
    const store = mockStore({});

    store.dispatch(actions.fetchDataAsync());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('fetchDataAsync', () => {
    const store = mockStore({})
  
    // Return the promise
    store.dispatch(actions.fetchDataAsync())
      .then(() => {
        const actions = store.getActions();
        expect(actions).toEqual([{ "type": "FETCH_DATA_BEGIN" }, { "res": { "message": "Hello Adam, this is Grace." }, "type": "FETCH_DATA_SUCCESS" }])
      })
  })
})