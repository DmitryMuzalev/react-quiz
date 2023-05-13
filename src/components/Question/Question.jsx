import styles from './Question.module.scss';

export default function Question() {
  return (
    <div className={styles.question}>
      <p className={styles.question__text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem,
        accusamus?
      </p>
    </div>
  );
}
