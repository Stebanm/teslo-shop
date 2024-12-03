import { Typography } from "@mui/material";

import { useProducts } from "@/src/hooks";
import { ShopLayouts } from "@/src/components/layouts";
import { Loading } from "@/src/components/ui/Loading";
import { ProductList } from "@/src/components/products";

const MenPage = () => {
  const { products, isLoading } = useProducts("products?gender=men");
  return (
    <ShopLayouts
      title="Teslo | Shop - Hombres"
      pageDescription="Categoria de articulos para Hombres"
    >
      <Typography variant="subtitle1" component="h6">
        Hombres
      </Typography>
      <Typography variant="body2" sx={{ mb: 1, color: "#7f8c8d" }}>
        Productos para Hombres
      </Typography>

      {isLoading ? <Loading /> : <ProductList products={products} />}
    </ShopLayouts>
  );
};

export default MenPage;
