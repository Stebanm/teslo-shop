import type { NextApiRequest, NextApiResponse } from "next";

import { db, SHOP_CONSTANTS } from "@/src/database";
import { IProduct } from "@/src/interfaces";
import { Product } from "@/src/models";

type Data = { message: string } | IProduct[];

export default function productsHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getProducts(res, req);

    default:
      return res.status(400).json({
        message: "Bad Request",
      });
  }
}

const getProducts = async (res: NextApiResponse<Data>, req: NextApiRequest) => {
  const { gender = "all" } = req.query;

  let conditional = {};

  if (gender !== "all" && SHOP_CONSTANTS.validGender.includes(`${gender}`)) {
    conditional = { gender };
  }

  await db.connect();

  const products = await Product.find(conditional)
    .select("title images price inStock slug -_id")
    .lean();

  await db.disconnect();

  return res.status(200).json(products);
};
