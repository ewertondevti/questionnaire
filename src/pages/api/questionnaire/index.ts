import { NextApiRequest, NextApiResponse } from "next";
import { shuffle } from "../../../utils";
import QuestionList from "../questionsbase";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<number[]>
) {
  const ids = QuestionList.map((question) => question.id);

  res.status(200).json(shuffle(ids));
}
