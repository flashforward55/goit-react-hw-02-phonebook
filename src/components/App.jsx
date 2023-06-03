import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';

const AppContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  width: 768px;
`;

const Title = styled.h1`
  color: #333;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const ContactListContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

const ContactListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

const ContactName = styled.span`
  font-weight: bold;
`;

const ContactNumber = styled.span`
  color: #555;
`;

const DeleteButton = styled.button`
  padding: 5px 10px;
  background-color: #ccc;
  color: #fff;
  border: none;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #888;
  }
`;

const FilterInput = styled.input`
  padding: 10px;
  font-size: 16px;
`;

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
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
      <AppContainer>
        <Title>Phonebook</Title>
        <ContactForm addContact={this.addContact} />
        <Title>Contacts</Title>
        <Filter filter={filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={contacts}
          filter={filter}
          deleteContact={this.deleteContact}
        />
      </AppContainer>
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
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={this.handleChange}
          required
        />
        <Input
          type="tel"
          name="number"
          placeholder="Phone number"
          value={number}
          onChange={this.handleChange}
          required
        />
        <Button type="submit">Add Contact</Button>
      </Form>
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

class Filter extends Component {
  render() {
    const { filter, onChange } = this.props;
    return (
      <FilterInput
        type="text"
        value={filter}
        onChange={onChange}
        placeholder="Search contacts..."
      />
    );
  }
}

export default App;
