import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';

describe('App', () => {
    it('it should render without crashing', () => {
        shallow(<App />);
    })
})