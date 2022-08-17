import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  getItemsValueState,
  getFilterValueState,
} from 'redux/contacts/contactsSelectors';
import * as operations from 'redux/contacts/contactsOperations';
import { useEffect } from 'react';

const ContactList = () => {
  const contacts = useSelector(getItemsValueState);
  const filter = useSelector(getFilterValueState);

  const dispatch = useDispatch();
  const deleteContacts = contactsId => {
    dispatch(operations.deleteContact(contactsId));
  };

  useEffect(() => {
    dispatch(operations.fetchContact());
  }, [dispatch]);

  console.log(contacts);

  // Возвращает результат фильтра
  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = filterContacts();

  return (
    <List>
      {visibleContacts &&
        visibleContacts.map(({ id, name, phone }) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            phone={phone}
            onDeleteContacts={deleteContacts}
          />
        ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
