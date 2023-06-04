import { Component } from 'react';
import { v4 as uuid } from 'uuid';
import { Form, Input, Button } from './ContactForm.styled';

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

export default ContactForm;
