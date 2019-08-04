import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import landingPageComponent from '../../components/landingPageComponent';


describe('<landingPageComponent />', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<landingPageComponent />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
