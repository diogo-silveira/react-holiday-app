import React from 'react';
import { shallow } from 'enzyme'
import App from './App';

describe('Holiday', () => {
  it('render the app', () => {
    const component = shallow(<App/>);
    expect(component).toMatchSnapshot();
  });
});



