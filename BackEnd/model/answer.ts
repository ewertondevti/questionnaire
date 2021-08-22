import { AnswerJsonModel } from "../types";

export default class AnswerModel {
  #value: string;
  #correct: boolean;
  #revealed: boolean;

  constructor(value: string, correct = false, revealed = false) {
    this.#value = value;
    this.#correct = correct;
    this.#revealed = revealed;
  }

  get value() {
    return this.#value;
  }

  get correct() {
    return this.#correct;
  }

  get revealed() {
    return this.#revealed;
  }

  static createObject(model: AnswerModel): AnswerModel {
    return new AnswerModel(model.value, model.correct, model.revealed);
  }

  reveal() {
    return new AnswerModel(this.#value, this.#correct, true);
  }

  static correct(value: string) {
    return new AnswerModel(value, true);
  }

  static wrong(value: string) {
    return new AnswerModel(value, false);
  }

  toJson(): AnswerJsonModel {
    return {
      value: this.#value,
      correct: this.#correct,
      revealed: this.#revealed,
    };
  }
}
