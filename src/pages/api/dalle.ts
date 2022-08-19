import type { NextApiRequest, NextApiResponse } from "next";
import { Dalle } from "dalle-node";

const allImage = async (req: NextApiRequest, res: NextApiResponse) => {
  const dalle = new Dalle(req.query.k);
  const generations = await dalle.generate(req.query.q);
  console.log(generations);
  res.status(200).json({ result: generations });
};

export default allImage;
