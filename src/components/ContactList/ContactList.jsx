import { List } from './ContactList.styled';
import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';
import { nanoid } from 'nanoid';
export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactItem
            key={nanoid()}
            name={name}
            number={number}
            id={id}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
