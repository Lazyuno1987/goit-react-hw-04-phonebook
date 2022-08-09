import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Form, Label, Input, Button } from './ContactForm.styled';
// import { Filter } from '../Filter/Filter'

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleInputChange(event) {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  }

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handelSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  return (
    <Form onSubmit={handelSubmit}>
      <Label id={nanoid()} name="name">
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label id={nanoid()}>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
