import { shuffleAnswers } from "../../src/utils";
import { QuestionJsonModel } from "../types";
import AnswerModel from "./answer";

export default class QuestionModel {
  #id: number;
  #question: string;
  #answers: AnswerModel[];
  #correct: boolean;

  constructor(id: number, question: string, answers: any[], correct = false) {
    this.#id = id;
    this.#question = question;
    this.#answers = answers;
    this.#correct = correct;
  }

  get id() {
    return this.#id;
  }

  get question() {
    return this.#question;
  }

  get answers() {
    return this.#answers;
  }

  get correct() {
    return this.#correct;
  }

  get answered() {
    return this.#answers.some((answer) => answer.revealed === true);
  }

  get notAnswered() {
    return !this.answered;
  }

  static createObject(model: QuestionModel): QuestionModel {
    const answers = model.answers.map((answer) =>
      AnswerModel.createObject(answer)
    );
    return new QuestionModel(model.id, model.question, answers, model.correct);
  }

  answerWith(index: number) {
    const correct = this.#answers[index]?.correct;
    const answers = this.#answers.map((answer, i) => {
      const selectedAnswer = index === i;
      if (selectedAnswer || answer.correct) return answer.reveal();
      else return answer;
    });

    return new QuestionModel(this.#id, this.#question, answers, correct);
  }

  shuffleAnswers(): QuestionModel {
    const shuffledAnswers = shuffleAnswers(this.#answers);
    return new QuestionModel(
      this.#id,
      this.#question,
      shuffledAnswers,
      this.#correct
    );
  }

  toJson(): QuestionJsonModel {
    return {
      id: this.#id,
      question: this.#question,
      answers: this.#answers.map((answer) => answer.toJson()),
      correct: this.#correct,
      answered: this.answered,
    };
  }
}
