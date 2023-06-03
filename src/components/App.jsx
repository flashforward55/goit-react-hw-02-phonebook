import React, { Component } from 'react';
//import { v4 as uuid } from 'uuid';

class ContactForm extends Component {
  state = {
    name: '',
  };

  render() {
    const { name } = this.state;
    return (
      <form>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
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
        <li>{contacts} </li>
      </ul>
    );
  }
}

class App extends Component {
  state = {
    contacts: [],
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
