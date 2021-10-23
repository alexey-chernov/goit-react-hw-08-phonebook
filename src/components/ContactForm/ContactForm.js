import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts/';
import styles from './ContactForm.module.css';
import InputMask from 'react-input-mask';
import Button from '@material-ui/core/Button';

export default function ContactForm() {
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
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
  };

  const resetName = () => {
    setName('');
  };

  const resetNumber = () => {
    setNumber('');
  };

  const checkName = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
  };

  const checkNumber = number => {
    return contacts.find(contact => contact.number === number);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (checkName(name)) {
      alert(`${name} вже присутній у списку контактів!`);
    } else if (checkNumber(number)) {
      alert(`${number} вже присутній у списку контактів!`);
    } else {
      dispatch(contactsOperations.addContact(name, number));
    }

    resetName();
    resetNumber();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Ім'я
        <input
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Ім'я може складатись лише із букв, апострофа, тире та пробілів. Наприклад Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan і т.д."
          required
          value={name}
          onChange={handleChange}
          placeholder="Sylvester Stalone"
        />
      </label>

      <label className={styles.label}>
        Номер
        <InputMask
          className={styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефону може складатись з цифр і може скаладтись з пробілів, тире, круглих дужок і може починатись з +"
          required
          onChange={handleChange}
          value={number}
          placeholder="+38 (099) 999-99-99"
          mask="+38 (099) 999-99-99"
        />
      </label>

      <Button
        variant="contained"
        color="primary"
        type="submit"
        title="Add contact"
      >
        Додати контакт
      </Button>
    </form>
  );
}
