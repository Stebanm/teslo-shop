import mongoose, { Schema, model, Model } from "mongoose";

import { IProduct } from "../interfaces";

const productSchema = new Schema(
  {
    description: { type: String, require: true },
    images: [{ type: String }],
    inStock: { type: Number, require: true, default: 0 },
    price: { type: Number, require: true, default: 0 },
    sizes: [
      {
        type: String,
        enum: {
          values: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
          message: "{VALUE} no es una talla válida.",
        },
      },
    ],
    slug: { type: String, require: true, unique: true },
    tags: [{ type: String }],
    title: { type: String, require: true },
    type: {
      type: String,
      enum: {
        values: ["shirts", "pants", "hoodies", "hats"],
        message: "{VALUE} no es un tipo válido.",
      },
    },

    gender: {
      type: String,
      enum: {
        values: ["men", "women", "kid", "unisex"],
        message: "{VALUE} no es un genero permitido.",
      },
    },
  },
  {
    timestamps: true,
  }
);

productSchema.index({ title: "text", tags: "text" });

const Product: Model<IProduct> =
  mongoose.models.Product || model("Product", productSchema);

export default Product;
