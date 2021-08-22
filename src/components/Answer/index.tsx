import AnswerModel from "../../../BackEnd/model/answer";
import styles from "../../styles/Answer.module.css";

interface IProps {
  answer: AnswerModel;
  index: number;
  letter: string;
  backgroundLetterColor: string;
  onResponse: (index: number) => void;
}

const Answer = ({
  answer,
  index,
  letter,
  backgroundLetterColor,
  onResponse,
}: IProps) => {
  const answerRevealed = answer.revealed && styles.answerRevealed;

  return (
    <div className={styles.answer} onClick={() => onResponse(index)}>
      <div className={`${styles.answerContent} ${answerRevealed}`}>
        <div className={styles.front}>
          <div
            className={styles.letter}
            style={{ backgroundColor: backgroundLetterColor }}
          >
            {letter}
          </div>
          <div className={styles.answerValue}>{answer.value}</div>
        </div>
        <div className={styles.back}>
          {answer.correct && (
            <div className={styles.correct}>
              <div>The correct answer is...</div>
              <div className={styles.answerValue}>{answer.value}</div>
            </div>
          )}
          {!answer.correct && (
            <div className={styles.wrong}>
              <div>The answer is wrong...</div>
              <div className={styles.answerValue}>{answer.value}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Answer;
