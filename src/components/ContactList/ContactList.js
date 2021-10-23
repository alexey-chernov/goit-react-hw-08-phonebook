import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { motion, AnimatePresence } from 'framer-motion';
import { variants } from '../../variables/motionVariable';
import styles from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(contactsSelectors.getVisibleContacts);
  const contacts = useSelector(contactsSelectors.getContacts);
  const error = useSelector(contactsSelectors.getError);

  return (
    <>
      {contacts.length > 0 && !error ? (
        <motion.ul className={styles.list}>
          <AnimatePresence>
            {visibleContacts.map(({ id, name, number }) => (
              <motion.li
                className={styles.item}
                key={id}
                initial="initial"
                animate="animate"
                exit="exit"
                transition="transition"
                variants={variants}
              >
                <p className={styles.info}>
                  <em>{name}</em>

                  <em>
                    <a className={styles.link} href={`tel:${number}`}>
                      {number}
                    </a>
                  </em>
                </p>
                <IconButton
                  aria-label="delete"
                  variant="contained"
                  color="primary"
                  type="button"
                  title="Вилучити"
                  onClick={() => dispatch(contactsOperations.deleteContact(id))}
                >
                  <DeleteIcon />
                </IconButton>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      ) : (
        <p className={styles.message}>
          Наразі у вашій телефонній книзі немає контактів. Будь ласка, додайте їх.
        </p>
      )}
    </>
  );
}
