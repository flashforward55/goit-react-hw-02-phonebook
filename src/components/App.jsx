import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    const { contacts } = this.state;

    const isDuplicateName = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isDuplicateName) {
      alert('This name is already in the contacts list.');
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={contacts}
          filter={filter}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter a name and a number');
      return;
    }
    const newContact = {
      id: uuid(),
      name: name.trim(),
      number: number.trim(),
    };
    this.props.addContact(newContact);
    this.setState({ name: '', number: '' });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={this.handleChange}
          required
        />
        <input
          type="tel"
          name="number"
          placeholder="Phone number"
          value={number}
          onChange={this.handleChange}
          required
        />
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

class ContactList extends Component {
  render() {
    const { contacts, filter, deleteContact } = this.props;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <ul>
        {filteredContacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    );
  }
}

class ContactListItem extends Component {
  handleDelete = () => {
    const { contact, deleteContact } = this.props;
    deleteContact(contact.id);
  };

  render() {
    const { contact } = this.props;
    return (
      <li>
        {contact.name} - {contact.number}
        <button onClick={this.handleDelete}>Delete</button>
      </li>
    );
  }
}

class Filter extends Component {
  render() {
    const { filter, onChange } = this.props;
    return (
      <input
        type="text"
        value={filter}
        onChange={onChange}
        placeholder="Search contacts..."
      />
    );
  }
}

export default App;
