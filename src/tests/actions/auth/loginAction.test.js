import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import loginUserAction from '../../../actions/auth/loginAction';
import { LoginConstants } from '../../../actions/actionTypes';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('authenticating', () => {
  beforeEach(() => {
    moxios.install(axios);
  });

  afterEach(() => {
    moxios.uninstall(axios);
  });


  it('user successfully logs in', () => {
    const loginDetails = {
      username: 'test_user',
      password: 'test_password',
    };
    const initialState = {
      logged_in: false,
      isUserLoggedIn: false,
    };
    const expectedResponse = {
      data: {
        access_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NjQ4OTQ1NzgsImlhdCI6MTU2NDg4NzM3OCwic3ViIjo0LCJhZG4iOiJGYWxzZSJ9.4D2TW_lNDKhExOt1g240-MVKfUa9Q9MgSTT_eu7-I0s',
      },
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
    const expectedActions = [{ type: LoginConstants.LOGIN_USER_SUCCESS, payload: expectedResponse }];
    const store = mockStore(initialState);
    return store
      .dispatch(loginUserAction(loginDetails))
      .then(() => {
        expect(expectedResponse).toEqual(expectedActions[0].payload);
      });
  });


  it('user fails loggin', () => {
    const loginDetails = {
      username: 'test_user',
      password: 'test_password',
    };
    const initialState = {
      logged_in: false,
      isUserLoggedIn: false,
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
    const expectedActions = [{ type: LoginConstants.LOGIN_USER_FAILED, payload: expectedResponse }];
    const store = mockStore(initialState);
    return store
      .dispatch(loginUserAction(loginDetails))
      .then(() => {
        expect(expectedResponse).toEqual(expectedActions[0].payload);
      });
  });
});
