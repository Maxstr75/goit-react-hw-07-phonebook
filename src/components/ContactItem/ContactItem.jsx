import PropTypes from 'prop-types';
import { Item, Button } from './ContactItem.styled';

const ContactItem = ({ id, name, phone, onDeleteContacts }) => {
  return (
    <Item key={id}>
      <p>
        {name}: {phone}
      </p>
      <Button type="button" onClick={() => onDeleteContacts(id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDeleteContacts: PropTypes.func.isRequired,
};

export default ContactItem;
