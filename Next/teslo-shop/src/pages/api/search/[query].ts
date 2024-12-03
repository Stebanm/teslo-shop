import { db } from "@/src/database";
import { IProduct } from "@/src/interfaces";
import { Product } from "@/src/models";
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      message: string;
    }
  | IProduct[];

export default function searchHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return productsSearch(res, req);

    default:
      return res.status(400).json({ message: "Bad Request" });
  }
}
const productsSearch = async (
  res: NextApiResponse<Data>,
  req: NextApiRequest
) => {
  try {
    // Validación del parámetro query
    let { query = "" } = req.query;

    if (!query || typeof query !== "string" || query.trim().length === 0) {
      return res
        .status(400)
        .json({ message: "Debe incluir un término de búsqueda válido." });
    }

    query = query.toLowerCase();

    await db.connect();

    // Buscar productos utilizando índices de texto
    const products = await Product.find({
      $text: { $search: query },
    }).lean();

    await db.disconnect();

    // Responder con los productos encontrados
    return res.status(200).json(products);
  } catch (error) {
    console.error("Error al buscar productos:", error);

    // Desconexión en caso de error
    await db.disconnect();

    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
