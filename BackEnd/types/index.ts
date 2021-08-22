export type QuestionJsonModel = {
  id: number;
  question: string;
  answers: AnswerJsonModel[];
  correct: boolean;
  answered: boolean;
};

export type AnswerJsonModel = {
  value: string;
  correct: boolean;
  revealed: boolean;
};
