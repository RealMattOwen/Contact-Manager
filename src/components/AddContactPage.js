import React from 'react';
import { connect } from 'react-redux';
import { history } from '../routers/AppRouter';
import AppBar from 'material-ui/AppBar';
import BackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import DoneIcon from 'material-ui/svg-icons/action/done';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { startAddContact } from '../actions/contacts';

export class AddContactPage extends React.Component {
    state = this.props.contacts.length !== 0 ? {
        age: undefined,
        firstName: undefined,
        id: undefined,
        initials: undefined,
        lastName: undefined
    } : {};
    componentWillMount() {
        const contacts = JSON.parse(localStorage.getItem('contacts'));

        if (contacts) {
            contacts.length !== 0 && this.props.contacts.length === 0 ? history.push('/') : this.setState(() => ({id: this.props.contacts.length + 1}));
        } else {
            this.setState(() => ({id: 1}));
        }
    }
    handleClick = () => {
        this.setState(() => {
            return {
                initials: this.state.firstName.charAt(0).concat(this.state.lastName.charAt(0))
            }
        }, () => {
            this.props.startAddContact(this.state)
                .then(() => {
                    localStorage.setItem('contacts', JSON.stringify(this.props.contacts));
                    history.push('/');
                });
        });
    };
    render() {
        return (
            <div>
                <AppBar
                    iconElementLeft={<IconButton onClick={() => history.push('/')}><BackIcon /></IconButton>}
                    iconElementRight={<IconButton type="button" onClick={this.handleClick}><DoneIcon /></IconButton>}
                    title="Add new contact"
                />
                <Paper
                    rounded={false}
                    style={{
                        display: 'inline-block',
                        textAlign: 'center'
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
                        />
                    </form>
                </Paper>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    contacts: state.contacts
});

const mapDispatchToProps = dispatch => ({
    startAddContact: contactDetails => dispatch(startAddContact(contactDetails))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddContactPage);