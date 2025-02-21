import { ISize } from "./";

export interface ICartProduct {
  _id: string;
  description: string;
  images: string;
  inStock: number;
  price: number;
  size?: ISize;
  slug: string;
  title: string;
  gender: "men" | "women" | "kid" | "unisex";
  quantity: number;
}
