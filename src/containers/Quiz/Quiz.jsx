import ActiveQuizItem from '../../components/ActiveQuizItem/ActiveQuizItem';
import styles from './Quiz.module.scss';
export default function Quiz() {
  return (
    <section className={styles.quiz}>
      <div className={styles.quiz__body}>
        <ActiveQuizItem />
      </div>
    </section>
  );
}
