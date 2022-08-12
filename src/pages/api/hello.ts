import type { NextApiRequest, NextApiResponse } from "next";
import DB from "../../../database/db";

const allImage = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB();
  const allEntries = await db.getAll();

  res.statusCode = 200; //ok
  res.setHeader("Content-type", "application/json");
  res.end(JSON.stringify({ data: { result: allEntries } }));
};

export default allImage;
