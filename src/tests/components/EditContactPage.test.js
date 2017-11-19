import React from 'react';
import { shallow } from 'enzyme';
import { EditContactPage } from '../../components/EditContactPage';
import contacts from '../fixtures/contacts';

test('should render EditContactPage correctly', () => {
    const wrapper = shallow(<EditContactPage contact={contacts[0]} contacts={contacts} />);
    expect(wrapper).toMatchSnapshot();
});