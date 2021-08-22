import styles from "../../styles/QuestionTitle.module.css";

interface IProps {
  questionTitle: string;
}

const QuestionTitle = ({ questionTitle }: IProps) => {
  return (
    <div className={styles.questionTitle}>
      <div className={styles.text}>{questionTitle}</div>
    </div>
  );
};
export default QuestionTitle;
