import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import telIcon from '../../images/kisspng.png';
import styles from './HomeView.module.css';

export default function HomeView() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Телефонний довідник</h1>

      <p className={styles.text}>
        Ця програма допоможе вам правильно керувати своїми контактами.
      </p>

      {!isLoggedIn && (
        <p className={styles.info}>
          Будь ласка, <b>Зареєструйтеся</b>, а потім <b>Увійдіть</b>, щоб мати доступ до ваших контактів.
        </p>
      )}
      <img src={telIcon} alt="telIcon" width="500" />
    </div>
  );
}
