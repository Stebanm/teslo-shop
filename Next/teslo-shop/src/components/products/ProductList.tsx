import { Grid2 } from "@mui/material";

import { IProduct } from "@/src/interfaces";
import { ProductCard } from "./ProductCard";

interface Props {
  products: IProduct[];
}

export const ProductList = ({ products }: Props) => {
  return (
    <Grid2 container spacing={4}>
      {products.map((product) => (
        <ProductCard product={product} key={product.slug} />
      ))}
    </Grid2>
  );
};
