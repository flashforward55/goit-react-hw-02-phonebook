import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ContactListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactListItems.styled';

class ContactListItems extends Component {
  handleDelete = () => {
    const { contact, deleteContact } = this.props;
    deleteContact(contact.id);
  };

  render() {
    const { contact } = this.props;
    return (
      <ContactListItem>
        <ContactName>{contact.name}</ContactName>
        <ContactNumber>{contact.number}</ContactNumber>
        <DeleteButton onClick={this.handleDelete}>Delete</DeleteButton>
      </ContactListItem>
    );
  }
}

ContactListItems.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItems;
