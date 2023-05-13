import styles from './Answer.module.scss';

export default function Answer() {
  return (
    <li className={styles.answer}>
      <p className={styles.answer__text}>Ответ 1</p>
    </li>
  );
}
