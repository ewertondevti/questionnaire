import AnswerModel from "../../BackEnd/model/answer";

export const shuffle = (numbers: number[]) =>
  numbers
    .map((num) => ({ num, randomNum: Math.random() }))
    .sort((a, b) => a.randomNum - b.randomNum)
    .map((obj) => obj.num);

export const shuffleAnswers = (answers: AnswerModel[]) =>
  answers
    .map((answer) => ({ answer, random: Math.random() }))
    .sort((a, b) => a.random - b.random)
    .map(
      ({ answer }) =>
        new AnswerModel(answer.value, answer.correct, answer.revealed)
    );
