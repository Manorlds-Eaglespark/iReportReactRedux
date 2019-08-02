import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import viewAllRedFlagsAction from '../../../actions/redflags/viewAllRedFlagsAction';
import { RedFlagConstants } from '../../../actions/actionTypes';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetching redflags', () => {
  beforeEach(() => {
    moxios.install(axios);
  });

  afterEach(() => {
    moxios.uninstall(axios);
  });


  it('redflags successfully fetched', () => {
    const initialState = {
      redflags: [],
    };
    const expectedResponse = {
      redflags: [
        {
          comment: 'Thugs attacked me',
          created_by: 3,
          created_on: 'Mon, 25 Feb 2019 12:30:18 GMT',
          id: 1,
          images: '{jpeg}',
          location: '{"Kampala "}',
          status: 'New',
          type: 'red_flag',
          videos: '{mp4}',
        },
      ],
      status: 200,
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedResponse,
      });
    });
    // eslint-disable-next-line max-len
    const expectedActions = [{ type: RedFlagConstants.VIEW_REDFLAGS_SUCCESS, payload: expectedResponse }];
    const store = mockStore(initialState);
    return store
      .dispatch(viewAllRedFlagsAction())
      .then(() => {
        expect(expectedResponse).toEqual(expectedActions[0].payload);
      });
  });


  it('user fails loggin', () => {
    const initialState = {
      redflags: [],
    };
    const expectedResponse = {
      error: 'hjhfhn',
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 401,
        response: expectedResponse,
      });
    });
    const expectedActions = [{
      type: RedFlagConstants.VIEW_REDFLAGS_FAIL,
      payload: expectedResponse,
    }];
    const store = mockStore(initialState);
    return store
      .dispatch(viewAllRedFlagsAction())
      .then(() => {
        expect(expectedResponse).toEqual(expectedActions[0].payload);
      });
  });
});
