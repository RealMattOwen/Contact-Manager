import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    startAddContact,
    addContact,
    startEditContact,
    editContact,
    startRemoveContact,
    removeContact,
    setContacts
} from '../../actions/contacts';
import contacts from '../fixtures/contacts';

const createMockStore = configureMockStore([thunk]);

test('should setup start add contact action object with provided values', () => {
    const store = createMockStore();
    store.dispatch(startAddContact(contacts[0])).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_CONTACT',
            contactDetails: contacts[0]
        });
    });
});

test('should setup add contact action object with provided values', () => {
    const action = addContact(contacts[0]);
    expect(action).toEqual({
        type: 'ADD_CONTACT',
        contactDetails: contacts[0]
    });
});

test('should setup start edit contact action object with provided values', () => {
    const updates = {firstName: 'Matthew'};

    const store = createMockStore();
    store.dispatch(startEditContact(contacts[0].id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_CONTACT',
            id: contacts[0].id,
            updates
        });
    });
});

test('should setup edit contact action object', () => {
    const updates = {firstName: 'Matthew'};
    const action = editContact(contacts[0].id, updates);
    expect(action).toEqual({
        type: 'EDIT_CONTACT',
        id: contacts[0].id,
        updates
    });
});

test('should setup start remove contact action object with provided values', () => {
    const store = createMockStore();
    store.dispatch(startRemoveContact({ id: contacts[0].id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_CONTACT',
            id: contacts[0].id
        });
    });
});

test('should setup remove contact action object', () => {
    const action = removeContact({ id: contacts[0].id });
    expect(action).toEqual({
        type: 'REMOVE_CONTACT',
        id: contacts[0].id
    });
});

test('should setup set contacts action object', () => {
    const action = setContacts(contacts);
    expect(action).toEqual({
        type: 'SET_CONTACTS',
        contacts
    });
});