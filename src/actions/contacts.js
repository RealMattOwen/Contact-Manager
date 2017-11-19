// ADD_CONTACT
export const addContact = contactDetails => ({
    type: 'ADD_CONTACT',
    contactDetails
});

export const startAddContact = contactDetails => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            resolve(dispatch(addContact(contactDetails)));
        });
    };
};

// EDIT_CONTACT
export const editContact = (id, updates) => ({
    type: 'EDIT_CONTACT',
    id,
    updates
});

export const startEditContact = (id, updates) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            resolve(dispatch(editContact(id, updates)));
        });
    };
};

// REMOVE_CONTACT
export const removeContact = ({id} = {}) => ({
    type: 'REMOVE_CONTACT',
    id
});

export const startRemoveContact = ({id} = {}) => {
    return dispatch => {
        return new Promise((resolve, reject) => {
            resolve(dispatch(removeContact({ id })));
        });
    };
};

// SET_CONTACTS
export const setContacts = contacts => ({
    type: 'SET_CONTACTS',
    contacts
});