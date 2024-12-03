import { Typography } from "@mui/material";

import { useProducts } from "@/src/hooks";
import { ShopLayouts } from "@/src/components/layouts";
import { Loading } from "@/src/components/ui/Loading";
import { ProductList } from "@/src/components/products";

const WomenPage = () => {
  const { products, isLoading } = useProducts("products?gender=women");
  return (
    <ShopLayouts
      title="Teslo | Shop - Womens"
      pageDescription="Categoria de articulos para mujeres"
    >
      <Typography variant="subtitle1" component="h6">
        Mujeres
      </Typography>

      <Typography variant="body2" sx={{ mb: 1, color: "#7f8c8d" }}>
        Productos para mujeres
      </Typography>

      {isLoading ? <Loading /> : <ProductList products={products} />}
    </ShopLayouts>
  );
};

export default WomenPage;
