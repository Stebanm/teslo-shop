import { Typography } from "@mui/material";

import { useProducts } from "@/src/hooks";
import { ShopLayouts } from "@/src/components/layouts";
import { Loading } from "@/src/components/ui/Loading";
import { ProductList } from "@/src/components/products";

const KidPage = () => {
  const { products, isLoading } = useProducts("products?gender=kid");
  return (
    <ShopLayouts
      title="Teslo | Shop - Niños"
      pageDescription="Categoria de articulos para niños"
    >
      <Typography variant="subtitle1" component="h6">
        Niños
      </Typography>
      <Typography variant="body2" sx={{ mb: 1, color: "#7f8c8d" }}>
        Productos para niños
      </Typography>

      {isLoading ? <Loading /> : <ProductList products={products} />}
    </ShopLayouts>
  );
};

export default KidPage;
