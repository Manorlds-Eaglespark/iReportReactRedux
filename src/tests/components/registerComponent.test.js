import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps, SignupComponent } from '../../components/signupComponent';

describe('LoginComponent', () => {
  let wrapper;
  const props = {
    registerAction: jest.fn(),
    e: { preventDefault: jest.fn() },
  };

  beforeEach(() => {
    wrapper = shallow(<SignupComponent {...props} />);
    jest.resetAllMocks();
  });

  it('should set state when onchangeInput is called', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'email',
        value: 'valuer',
      },
    };
    const instance = wrapper.instance();
    instance.onInputChange(event);
    expect(instance.state.email).toBe('valuer');
  });

  it('should call handleSubmit function', async () => {
    const instance = wrapper.instance();
    instance.setState({
      firstname: 'first-name',
      lastname: 'last-name',
      othernames: 'other-names',
      email: 'email2',
      password: 'password2',
      phonenumber: '45678',
      username: 'user-name',
    });
    const event = {
      preventDefault: jest.fn(),
    };
    await instance.handleSubmit(event);
    expect(props.registerAction).toHaveBeenCalled();
  });

  it('Testing mapStateToProps', () => {
    const initialState = {
      registerReducer: {},
    };
    expect(mapStateToProps(initialState)).toEqual({
      registerReducer: {},
    });
  });
});
