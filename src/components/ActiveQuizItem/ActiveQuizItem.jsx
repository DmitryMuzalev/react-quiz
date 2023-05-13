import styles from './ActiveQuizItem.module.scss';
import Question from '../Question/Question';
import Answer from '../Answer/Answer';

export default function ActiveQuizItem() {
  return (
    <div className={styles.quizItem}>
      <h2>Вопрос 1 из 10</h2>
      <Question />
      <ul className={styles.quizItem__answers}>
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </ul>
      <button>Далее</button>
    </div>
  );
}
