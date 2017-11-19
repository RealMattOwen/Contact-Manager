import contactsReducer from '../../reducers/contacts';
import contacts from '../fixtures/contacts';

test('should set default state', () => {
    const state = contactsReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should add contact', () => {
    const contact = {
        id: 2,
        firstName: 'Matthew',
        lastName: 'Owen',
        age: 18,
        initials: 'MO'
    };
    const action = {
        type: 'ADD_CONTACT',
        contactDetails: contact
    };
    const state = contactsReducer(contacts, action);
    expect(state).toEqual([...contacts, contact]);
});

test('should edit contact', () => {
    const firstName = 'Matthew';
    const action = {
        type: 'EDIT_CONTACT',
        id: contacts[0].id,
        updates: {
            firstName
        }
    };
    const state = contactsReducer(contacts, action);
    expect(state[0].firstName).toBe('Matthew');
});

test('should not edit a contact if not found', () => {
    const firstName = 'Matthew';
    const action = {
        type: 'EDIT_CONTACT',
        id: '-1',
        updates: {
            firstName
        }
    };
    const state = contactsReducer(contacts, action);
    expect(state).toEqual(contacts);
});

test('should remove contact', () => {
    const action = {
        type: 'REMOVE_CONTACT',
        id: contacts[0].id
    };
    const state = contactsReducer(contacts, action);
    expect(state).toEqual([]);
});

test('should not remove contact if not found', () => {
    const action = {
        type: 'REMOVE_CONTACT',
        id: '-1'
    };
    const state = contactsReducer(contacts, action);
    expect(state).toEqual([contacts[0]]);
});

test('should set contacts', () => {
    const action = {
        type: 'SET_CONTACTS',
        contacts
    };
    const state = contactsReducer(contacts, action);
    expect(state).toEqual(contacts);
});