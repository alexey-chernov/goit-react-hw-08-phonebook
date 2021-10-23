import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import { toast } from 'react-toastify';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LoaderComponent from '../../components/Loader';
import styles from './RegisterView.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const isLoading = useSelector(authSelectors.getLoading);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !password.trim()) {
      return toast.error("Будь ласка, заповніть усі обов'язкові поля!");
    } else if (password.length < 8) {
      return toast.info(
        'Пароль повинен містити не менше 8 символів, він повинен містити великі та малі літери та цифри!',
      );
    }
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
      <TextField
        label="Ім'я"
        variant="outlined"
        color="primary"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        className={styles.field}
      />

      <TextField
        label="Email"
        variant="outlined"
        color="primary"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        className={styles.field}
      />

      <TextField
        label="Пароль"
        variant="outlined"
        color="primary"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        className={styles.field}
      />

      {!isLoading && (
        <Button variant="contained" color="primary" size="large" type="submit">
          Зареєструвати
        </Button>
      )}

      {isLoading && <LoaderComponent />}
    </form>
  );
}
