import imageNotFound from '../../images/error-404.jpg';
import styles from './NotFoundView.module.css';

export default function NotFoundView() {
  return (
    <div className={styles.container}>
      <img src={imageNotFound} width="650" alt="ErrorImage" />
    </div>
  );
}
