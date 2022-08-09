import { ItemContact, Text, Button } from './ContactItem.styled';

export const ContactItem = ({ id, number, name, onDeleteContact }) => {
  return (
    <>
      <ItemContact>
        <Text>
          {name}: {number}
        </Text>
        <Button onClick={() => onDeleteContact(id)} type="button">
          Delete
        </Button>
      </ItemContact>
    </>
  );
};
