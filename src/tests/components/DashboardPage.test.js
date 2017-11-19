import React from 'react';
import { shallow } from 'enzyme';
import { DashboardPage } from '../../components/DashboardPage';
import contacts from '../fixtures/contacts';

test('should render DashboardPage correctly with contacts', () => {
    const wrapper = shallow(<DashboardPage contacts={contacts} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render DashboardPage correctly with no contacts', () => {
    const wrapper = shallow(<DashboardPage contacts={[]} />);
    expect(wrapper).toMatchSnapshot();
});