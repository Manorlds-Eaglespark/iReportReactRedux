import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import registerAction from '../../../actions/auth/registerAction';
import { RegisterConstants } from '../../../actions/actionTypes';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('authenticating', () => {
  beforeEach(() => {
    moxios.install(axios);
  });

  afterEach(() => {
    moxios.uninstall(axios);
  });


  it('user successfully registers', () => {
    const registerDetails = {
      firstname: 'Anorld',
      lastname: 'Mukone',
      othernames: '',
      email: 'manorldsapiens@gmail.com',
      password: '123QWEasd',
      phonenumber: '98767898765',
      username: 'manorlds',
    };
    const initialState = {
      registered: '',
    };
    const expectedResponse = {
      data: {
        email: 'manorldesapiens@gmail.com',
        firstname: 'Anorld',
        id: 13,
        lastname: 'Mukone',
        othernames: '',
        phonenumber: '98767898765',
        username: 'manorlds',
      },
      message: 'Successfully registered',
      status: 201,
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: expectedResponse,
      });
    });
    const expectedActions = [{
      type: RegisterConstants.REGISTER_USER_SUCCESS,
      payload: expectedResponse,
    }];
    const store = mockStore(initialState);
    return store
      .dispatch(registerAction(registerDetails))
      .then(() => {
        expect(expectedResponse).toEqual(expectedActions[0].payload);
      });
  });


  it('user registering fails', () => {
    const registerDetails = {
      firstname: 'Anorld',
      lastname: 'Mukone',
      othernames: '',
      email: 'manorldsapiens@gmail.com',
      password: '123QWEasd',
      phonenumber: '98767898765',
      username: 'manorlds',
    };
    const initialState = {
      registered: '',
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
      type: RegisterConstants.REGISTER_USER_FAIL,
      payload: expectedResponse,
    }];
    const store = mockStore(initialState);
    return store
      .dispatch(registerAction(registerDetails))
      .then(() => {
        expect(expectedResponse).toEqual(expectedActions[0].payload);
      });
  });
});
