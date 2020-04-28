import React from 'react';
import { mount, shallow, render } from 'enzyme';
import {Holiday, Title, LabelEngagementQuestion, className} from './Holiday';


describe('Holiday', () => {
    const component = shallow(<Holiday/>);

    test('should render Holiday component', () => {    
        expect(component).toMatchSnapshot();
    });

    it('should have two email field', () => {
        expect(component.find('input[type="text"]').length).toEqual(2);
    });
    
    it('should have two email field', () => {
        expect(component.find('select').length).toEqual(1);
    });
});

describe('Title', () => {
    it('should render Title component', () => {
        const component = shallow(<Title/>);
        expect(component).toMatchSnapshot();
    });
});

describe('LabelEngagementQuestion', () => {
    it('should render LabelEngagementQuestion component', () => {
        const component = shallow(<LabelEngagementQuestion/>);
        expect(component).toMatchSnapshot();
    });
});