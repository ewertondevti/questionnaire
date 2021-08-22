import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import QuestionModel from "../../BackEnd/model/question";
import Questionnaire from "../components/Questionnaire";

const BASE_URL = "http://localhost:3000/api";

const initialValue = new QuestionModel(0, "", [], false);

const Home: NextPage = () => {
  const [questionsIds, setQuestionsIds] = useState<number[]>([]);
  const [question, setQuestion] = useState<QuestionModel>(initialValue);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const fetchQuestionsIds = async () => {
      const response = await fetch(`${BASE_URL}/questionnaire`);
      const questionsIds: number[] = await response.json();

      setQuestionsIds(questionsIds);
    };

    fetchQuestionsIds();
  }, []);

  useEffect(() => {
    const fetchQuestions = async (id: number) => {
      try {
        const response = await fetch(`${BASE_URL}/questions/${id}`).then(
          (result) => result.json()
        );
        const question = QuestionModel.createObject(response);

        setQuestion(question);
      } catch (error) {
        console.log(error);
      }
    };

    fetchQuestions(questionsIds[currentQuestionIndex]);
  }, [questionsIds, currentQuestionIndex]);

  const answerQuestion = (question: QuestionModel) => {
    if (question.correct) setCorrectAnswers((state) => state + 1);
    setQuestion(question);
  };

  const hasNext = () => !!questionsIds[currentQuestionIndex + 1];

  const onNext = () => {
    setCurrentQuestionIndex((state) => state + 1);

    if (!hasNext()) onFinish();
  };

  const onFinish = () => {
    router.push({
      pathname: "/result",
      query: {
        total: questionsIds.length,
        corrects: correctAnswers,
      },
    });
  };

  return (
    <Questionnaire
      question={question}
      isLast={!hasNext()}
      answerQuestion={answerQuestion}
      onNext={onNext}
    />
  );
};

export default Home;
