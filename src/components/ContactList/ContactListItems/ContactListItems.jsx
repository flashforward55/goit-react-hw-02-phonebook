import { Component } from 'react';
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

export default ContactListItems;
