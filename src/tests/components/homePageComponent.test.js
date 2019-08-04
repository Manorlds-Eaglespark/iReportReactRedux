import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { homePageComponent } from '../../components/homePageComponent';

describe('homePageComponent', () => {
  let wrapper;
  const storeItems = {};
  const mockStore = configureStore();
  const store = mockStore(storeItems);

  beforeEach(() => {
    wrapper = shallow(<homePageComponent />);
    jest.resetAllMocks();
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });


  it('should call handleLogOutClick function', () => {
    const instance = wrapper.instance();
    console.log('bjnbkjn the instance', instance);
    // const spy = jest.spyOn(homePageComponent.prototype, 'handleLogOutClick');
    // const wrapper = shallow(<homePageComponent {...props} />);
    // wrapper.instance().handleLogOutClick();
    // expect(spy).toHaveBeenCalled();
  });

//   it('Testing mapStateToProps', () => {
//     const initialState = {
//       redflags: [],
//     };
//     expect(mapStateToProps(initialState)).toEqual({
//       viewAllRedFlagsReducer: {},
//     });
//   });
});
