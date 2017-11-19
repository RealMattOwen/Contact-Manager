import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AddPersonIcon from 'material-ui/svg-icons/social/person-add';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import { setContacts } from '../actions/contacts';

export class DashboardPage extends React.Component {
    componentDidMount() {
        const contacts = JSON.parse(localStorage.getItem('contacts'));

        if (contacts) {
            this.props.setContacts(contacts);
        }
    };
    render() {
        return (
            <div>
                <AppBar
                    showMenuIconButton={false}
                    title="Contacts"
                />
                <List>
                    {this.props.contacts.length !== 0 ? this.props.contacts.map(({age, firstName, id, initials, lastName}) => (
                        <div key={id}>
                            <Link className="list-item" to={`/edit/${id}`}>
                                <ListItem
                                    disabled={true}
                                    leftAvatar={<Avatar style={{fontSize: 18}}>{initials}</Avatar>}
                                >
                                    {firstName} {lastName}, {age}
                                </ListItem>
                            </Link>
                            <Divider />
                        </div>
                    )) : (
                        <div>
                            <ListItem disabled={true}>No contacts</ListItem>
                        </div>
                    )}
                </List>
                <Link to={"/add"}>
                    <FloatingActionButton
                        style={{
                            margin: 0,
                            top: 'auto',
                            right: 20,
                            bottom: 20,
                            left: 'auto',
                            position: 'fixed'
                        }}>
                        <AddPersonIcon />
                    </FloatingActionButton>
                </Link>
            </div>
        );
    };
}

const mapStateToProps = state => ({
    contacts: state.contacts
});

const mapDispatchToProps = dispatch => ({
    setContacts: contacts => dispatch(setContacts(contacts))
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);