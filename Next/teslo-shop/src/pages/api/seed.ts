import { db, seedDatabase } from "@/src/database";
import { Product } from "@/src/models";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default async function seedHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === "production") {
    return res.status(401).json({ message: "No tiene acceso a esta API" });
  }

  await db.connect();
  await Product.deleteMany();
  await Product.insertMany(seedDatabase.initialData.products);
  await db.disconnect();

  res.status(200).json({ message: "Proceso realizado correctamene" });
}
