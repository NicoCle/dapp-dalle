import type { NextApiRequest, NextApiResponse } from "next";
import DB from "../../../database/db";
//import Dalle from "dalle-node";

const allImage = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB();
  const allEntries = await db.getAll();

  res.statusCode = 200; //ok
  res.setHeader("Content-type", "application/json");
  res.end(JSON.stringify({ data: { result: allEntries } }));

  //const dalle = new Dalle(req.query.k); // Bearer Token
  //const generations = await dalle.generate(req.query.q);
  //console.log(generations)
  //res.status(200).json({ result: generations })
};

export default allImage;
