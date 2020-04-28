import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Holiday from './Holiday';


describe('Holiday', () => {
    it('should render Holiday component', () => {
        const component = shallow(<Holiday/>);
        expect(component).toMatchSnapshot();
    })
})