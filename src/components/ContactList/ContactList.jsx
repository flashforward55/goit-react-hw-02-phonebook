import React, { Component } from 'react';
import { ContactListContainer } from './ContactList.styled';
import ContactListItems from './ContactListItems/ContactListItems';

class ContactList extends Component {
  render() {
    const { contacts, filter, deleteContact } = this.props;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <ContactListContainer>
        {filteredContacts.map(contact => (
          <ContactListItems
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))}
      </ContactListContainer>
    );
  }
}

export default ContactList;
