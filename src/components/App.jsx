import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleFilterChange} />
        <ContactList contacts={contacts} filter={filter} />
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
    const { contacts, filter } = this.props;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <ul>
        {filteredContacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </ul>
    );
  }
}

class ContactListItem extends Component {
  render() {
    const { contact } = this.props;
    return (
      <li>
        {contact.name} - {contact.number}
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
