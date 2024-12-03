import type { NextApiRequest, NextApiResponse } from "next";

import { db } from "@/src/database";
import { IProduct } from "@/src/interfaces";
import Product from "@/src/models/Product";

type Data = { message: string } | IProduct;

export default async function slugHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getProductSlug(req, res);

    default:
      return res.status(400).json({ message: "Bad Request" });
  }
}

const getProductSlug = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { slug } = req.query;

  try {
    await db.connect();

    // Buscar producto por slug
    const product = await Product.findOne({ slug }).lean();

    if (!product) {
      return res
        .status(404)
        .json({ message: `No se encontró el producto con el slug: ${slug}` });
    }

    await db.disconnect();
    return res.status(200).json(product);
  } catch (error) {
    console.error(error);
    await db.disconnect();
    return res.status(500).json({ message: "Error interno del servidor" });
  } finally {
    await db.disconnect();
  }
};
