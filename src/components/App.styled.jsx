import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';

class ContactForm extends Component {
  state = {
    name: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    if (name.trim() === '') {
      alert('Please enter a name');
      return;
    }
    const newContact = {
      id: uuid(),
      name: name.trim(),
    };
    this.props.addContact(newContact);
    this.setState({ name: '' });
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={this.handleChange}
        />
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

class ContactList extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    );
  }
}

class App extends Component {
  state = {
    contacts: [],
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
