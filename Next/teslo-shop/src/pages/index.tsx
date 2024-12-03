import { Typography } from "@mui/material";
import { ShopLayouts } from "../components/layouts";
import { ProductList } from "../components/products";
import { useProducts } from "../hooks";
import { Loading } from "../components/ui/Loading";

export default function Home() {
  const { products, isLoading } = useProducts("products");
  return (
    <ShopLayouts
      title="Teslo-Shop - Home"
      pageDescription="Encuentra los mejores productos"
    >
      <Typography variant="subtitle1" component="h6">
        Tienda
      </Typography>
      <Typography variant="body2" sx={{ mb: 1, color: "#7f8c8d" }}>
        Todos los productos
      </Typography>

      {isLoading ? <Loading /> : <ProductList products={products} />}
    </ShopLayouts>
  );
}
