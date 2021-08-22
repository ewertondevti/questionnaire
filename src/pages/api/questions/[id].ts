// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { QuestionJsonModel } from "../../../../BackEnd/types";
import QuestionList from "../questionsbase";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<QuestionJsonModel | undefined>
) {
  const id = +req.query.id;
  const question = QuestionList.find((question) => question.id === id)
    ?.shuffleAnswers()
    .toJson();

  if (!!question) res.status(200).json(question);
  else res.status(204).send(undefined);
}
