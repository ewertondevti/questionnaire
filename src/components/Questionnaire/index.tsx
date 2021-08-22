import QuestionModel from "../../../BackEnd/model/question";
import styles from "../../styles/Questionnaire.module.css";
import Button from "../Button";
import Question from "../Question";

interface IProps {
  question: QuestionModel;
  isLast: boolean;
  answerQuestion: (question: QuestionModel) => void;
  onNext: () => void;
}

const Questionnaire = ({
  question,
  isLast,
  answerQuestion,
  onNext,
}: IProps) => {
  const onResponse = (index: number) => {
    if (question.notAnswered) answerQuestion(question.answerWith(index));
  };

  return (
    <div className={styles.questionnaire}>
      {question && (
        <Question
          question={question}
          timerForAnswer={6}
          onResponse={onResponse}
          timerReached={onNext}
        />
      )}

      <Button text={isLast ? "Finish" : "Next"} onClick={onNext} />
    </div>
  );
};
export default Questionnaire;
