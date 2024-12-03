import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default function BadSearchHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(400).json({ message: "Debe especificar un termino de búsqueda" });
}
