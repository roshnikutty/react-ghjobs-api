import React from 'react';
import 'enzyme';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { getLandingPageJobs } from './actions/actions';

import { App } from './App';

describe('<App />', () => {
    it('it should render without crashing', () => {
        const mockCallback = jest.fn();
        const landingPageValues = [{
            title: 'Javascript pro',
            type: 'full-time',
            description: 'knowledge of testing'
        }];
        const wrapper = mount(<App dispatch={mockCallback} landingPageValues={landingPageValues} formOutput={[]}/>);
        expect(mockCallback).toHaveBeenCalled();
    })
    
});
