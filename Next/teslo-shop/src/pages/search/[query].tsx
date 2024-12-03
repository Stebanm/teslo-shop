import { GetServerSideProps, NextPage } from "next";

import { Box, Typography } from "@mui/material";
import { ShopLayouts } from "../../components/layouts";
import { ProductList } from "../../components/products";
import { dbProducts } from "@/src/database";
import { IProduct } from "@/src/interfaces";

interface Props {
  products: IProduct[];
  foundProducts: boolean;
  query: string;
}

const SearchPage: NextPage<Props> = ({ products, foundProducts, query }) => {
  return (
    <ShopLayouts
      title="Teslo-Shop - Search"
      pageDescription="Encuentra los mejores productos"
    >
      <Typography variant="subtitle1" component="h6">
        Busqueda de Producto
      </Typography>

      {foundProducts ? (
        <Typography
          variant="body2"
          sx={{ mb: 1, color: "#7f8c8d" }}
          textTransform="capitalize"
        >
          {" "}
          Termino de busqueda: {query}
        </Typography>
      ) : (
        <Box display="flex">
          <Typography variant="body2" sx={{ mb: 1, color: "#7f8c8d" }}>
            No se encontraron articulos con la busqueda:{" "}
          </Typography>
          <Typography
            variant="body2"
            sx={{ ml: 1 }}
            color="secondary"
            textTransform="capitalize"
          >
            {query}
          </Typography>
        </Box>
      )}

      <ProductList products={products} />
    </ShopLayouts>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { query = "" } = params as { query: string };

  if (query.length === 0) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  let products = await dbProducts.getProductsByTem(query);
  const foundProducts = products.length > 0;

  if (!foundProducts) {
    products = await dbProducts.getProductsByTem("shirt");
  }

  return {
    props: {
      products,
      foundProducts,
      query,
    },
  };
};

export default SearchPage;
