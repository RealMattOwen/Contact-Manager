import React from 'react';
import { shallow } from 'enzyme';
import { AddContactPage } from '../../components/AddContactPage';
import contacts from '../fixtures/contacts';

test('should render AddContactPage correctly', () => {
    const wrapper = shallow(<AddContactPage contacts={contacts} />);
    expect(wrapper).toMatchSnapshot();
});