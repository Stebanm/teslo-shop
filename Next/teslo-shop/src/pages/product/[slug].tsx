import React, { useContext, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

import { Box, Button, Chip, Grid2, Typography } from "@mui/material";
import DoDisturbAltOutlinedIcon from "@mui/icons-material/DoDisturbAltOutlined";

import { ShopLayouts } from "@/src/components/layouts";
import { ProductSlide } from "../../components/products";
import { ItemCounter } from "@/src/components/ui";
import { SizeSelector } from "@/src/components/products/SizeSelector";
import { ICartProduct, IProduct, ISize } from "@/src/interfaces";
import { db, dbProducts } from "@/src/database";
import { CartContext } from "@/src/context/cart";

interface Props {
  product: IProduct;
}
const ProductPage = ({ product }: Props) => {
  const router = useRouter();

  const { addProductToCart } = useContext(CartContext);

  const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
    _id: product._id,
    description: product.description,
    images: product.images[0],
    inStock: product.inStock,
    price: product.price,
    size: undefined,
    slug: product.slug,
    title: product.title,
    gender: product.gender,
    quantity: 1,
  });

  const selectedSize = (size: ISize) => {
    setTempCartProduct((currentProduct) => ({
      ...currentProduct,
      size,
    }));
  };

  const onNewQuantity = (quantity: number) => {
    setTempCartProduct((currentProduct) => ({
      ...currentProduct,
      quantity,
    }));
  };

  const onAddProduct = () => {
    addProductToCart(tempCartProduct);
    // router.push("/cart");
  };

  return (
    <ShopLayouts title={product.title} pageDescription={product.description}>
      <Grid2 container spacing={3}>
        <Grid2 size={{ xs: 12, sm: 7 }}>
          <ProductSlide images={product.images} />
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 5 }}>
          <Box display="flex" flexDirection="column">
            {/* Titulo */}
            <Typography variant="h1" component="h1">
              {product.title}
            </Typography>
            <Typography variant="subtitle1" component="h2">
              $ {product.price}
            </Typography>

            {/* Cantidad */}
            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle2">Cantidad</Typography>
              <ItemCounter
                currentValue={tempCartProduct.quantity}
                updateQuantity={onNewQuantity}
                maxValue={product.inStock > 10 ? 10 : product.inStock}
              />
              <SizeSelector
                sizes={product.sizes}
                selectedSize={tempCartProduct.size}
                onSelectedSize={selectedSize}
              />
            </Box>

            {/* Add Cart */}

            {product.inStock > 0 ? (
              tempCartProduct.size ? (
                <Button
                  color="secondary"
                  className="circular-btn"
                  onClick={onAddProduct}
                >
                  Agregar al carrito
                </Button>
              ) : (
                <Button className="disable-btn">Seleccione una talla</Button>
              )
            ) : (
              <Chip
                label="No disponible"
                variant="outlined"
                color="error"
                icon={<DoDisturbAltOutlinedIcon />}
              />
            )}

            {/* Description */}
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2">Descripción</Typography>
              <Typography variant="body2">{product.description}</Typography>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </ShopLayouts>
  );
};

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const { slug = "" } = ctx.params as { slug: string };

//   const product = await dbProducts.getProductBySlug(slug);

//   if (!product) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       product,
//     },
//   };
// };

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    await db.connect();
    const slugs = await dbProducts.getAllProductSlugs();

    return {
      paths: slugs.map(({ slug }) => ({
        params: { slug },
      })),
      fallback: "blocking", // Permite cargar dinámicamente productos adicionales
    };
  } catch (error) {
    console.error("Error fetching slugs:", error);
    return {
      paths: [],
      fallback: "blocking",
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params as { slug: string };

  try {
    await db.connect();
    const product = await dbProducts.getProductBySlug(slug);
    if (!product) {
      return {
        notFound: true,
      };
    }

    return {
      props: { product },
      revalidate: 86400, // Revalida cada 24 horas
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return {
      notFound: true,
    };
  }
};

export default ProductPage;
