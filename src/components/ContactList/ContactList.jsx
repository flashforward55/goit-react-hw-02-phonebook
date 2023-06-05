import { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactListContainer } from './ContactList.styled';
import ContactListItems from './ContactListItems';

class ContactList extends Component {
  render() {
    const { filteredContacts, deleteContact } = this.props;

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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
