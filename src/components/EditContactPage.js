import React from 'react';
import { connect } from 'react-redux';
import { history } from '../routers/AppRouter';
import AppBar from 'material-ui/AppBar';
import BackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import DoneIcon from 'material-ui/svg-icons/action/done';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { startEditContact, startRemoveContact } from '../actions/contacts';

export class EditContactPage extends React.Component {
    state = this.props.contacts.length !== 0 ? {
        age: this.props.contact.age,
        firstName: this.props.contact.firstName,
        initials: this.props.contact.initials,
        lastName: this.props.contact.lastName
    } : {};
    componentWillMount() {
        this.props.contacts.length === 0 ? history.push('/') : undefined;
    }
    handleClick = () => {
        this.setState(() => {
            return {
                initials: this.state.firstName.charAt(0).concat(this.state.lastName.charAt(0))
            }
        }, () => {
            this.props.startEditContact(this.props.contact.id, { ...this.state })
                .then(() => {
                    localStorage.setItem('contacts', JSON.stringify(this.props.contacts));
                    history.push('/');
                });
        });
    };
    onRemove = () => {
        this.props.startRemoveContact({ id: this.props.contact.id })
            .then(() => {
                localStorage.setItem('contacts', JSON.stringify(this.props.contacts));
                history.push('/');
            });
    };
    render() {
        return (
            <div>
                <AppBar
                    iconElementLeft={<IconButton onClick={() => history.push('/')}><BackIcon /></IconButton>}
                    iconElementRight={<IconButton onClick={this.handleClick}><DoneIcon /></IconButton>}
                    title="Edit contact"
                />
                <Paper
                    rounded={false}
                    style={{
                        textAlign: 'center',
                        display: 'inline-block',
                    }}
                    zDepth={1}>
                    <form id="contact-details">
                        <TextField
                            hintText="First name"
                            onChange={(e, newValue) => {
                                this.setState(() => {
                                    return {
                                        firstName: newValue
                                    }
                                });
                            }}
                            value={this.state.firstName}
                        />
                        <TextField
                            hintText="Last name"
                            onChange={(e, newValue) => {
                                this.setState(() => {
                                    return {
                                        lastName: newValue
                                    }
                                });
                            }}
                            value={this.state.lastName}
                        />
                        <TextField
                            hintText="Age"
                            onChange={(e, newValue) => {
                                this.setState(() => {
                                    return {
                                        age: parseInt(newValue)
                                    }
                                });
                            }}
                            value={this.state.age}
                        />
                        <RaisedButton label="Remove" onClick={this.onRemove} style={{margin: 12}} />
                    </form>
                </Paper>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    contact: state.contacts.find(contact => contact.id === parseInt(props.match.params.id)),
    contacts: state.contacts
});

const mapDispatchToProps = dispatch => ({
    startEditContact: (id, updates) => dispatch(startEditContact(id, updates)),
    startRemoveContact: id => dispatch(startRemoveContact(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditContactPage);