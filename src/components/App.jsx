import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('Contacts'));
  });
  const [filter, setFilter] = useState('');

  function onSubmitForm({ name, number }) {
    const contact = { name, number, id: nanoid() };
    return contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    )
      ? alert(`${name} is already in contacts!`)
      : setContacts([contact, ...contacts]);
  }

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const onFiltr = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const onDeleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  useEffect(() => {
    localStorage.setItem('Contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onSubmitForm} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={onFiltr()}
        onDeleteContact={onDeleteContact}
        id={contacts.id}
      />
    </div>
  );
}
