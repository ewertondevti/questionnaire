import QuestionModel from "../../../BackEnd/model/question";
import styles from "../../styles/Question.module.css";
import Answer from "../Answer";
import QuestionTitle from "../QuestionTitle";
import Timer from "../Timer";

const LETRAS = [
  { value: "A", color: "#F2C866" },
  { value: "B", color: "#F266BA" },
  { value: "C", color: "#85D4F2" },
  { value: "D", color: "#BCE596" },
];

interface IProps {
  question: QuestionModel;
  timerForAnswer?: number;
  onResponse: (index: number) => void;
  timerReached: () => void;
}

const Question = ({
  question,
  timerForAnswer,
  onResponse,
  timerReached,
}: IProps) => {
  return (
    <div className={styles.question}>
      <QuestionTitle questionTitle={question.question} />
      <Timer
        propKey={question.id}
        duration={timerForAnswer ?? 10}
        timerReached={timerReached}
      />
      {question.answers.map((answer, index) => (
        <Answer
          answer={answer}
          index={index}
          letter={LETRAS[index].value}
          backgroundLetterColor={LETRAS[index].color}
          onResponse={onResponse}
          key={`${question.id}-${index}`}
        />
      ))}
    </div>
  );
};
export default Question;
