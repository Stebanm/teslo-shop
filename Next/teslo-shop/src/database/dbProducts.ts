import { db } from ".";
import { IProduct } from "../interfaces";
import { Product } from "../models";

interface ProductSlug {
  slug: string;
}

export const getProductBySlug = async (
  slug: string
): Promise<IProduct | null> => {
  try {
    await db.connect();
    const product = await Product.findOne({ slug }).lean();
    if (!product) return null;

    return JSON.parse(JSON.stringify(product));
  } catch (error) {
    console.error("Error fetching product by slug:", error);
    return null;
  }
};

export const getAllProductSlugs = async (): Promise<ProductSlug[]> => {
  await db.connect();
  const slugs = await Product.find().select("slug -_id").lean();
  await db.disconnect();

  return slugs;
};

export const getProductsByTem = async (term: string): Promise<IProduct[]> => {
  term = term.toString().toLowerCase();

  await db.connect();
  const products = await Product.find({
    $text: { $search: term },
  })
    .select("title images price inStock slug -_id")
    .lean();

  await db.disconnect();

  return products;
};

export const getAllProducts = async (): Promise<IProduct> => {
  await db.connect();
  const products = await Product.find().lean();
  await db.disconnect();

  return JSON.parse(JSON.stringify(products));
};
