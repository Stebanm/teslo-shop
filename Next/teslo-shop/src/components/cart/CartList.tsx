import { useContext } from "react";
import NextLink from "next/link";

import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid2,
  IconButton,
  Typography,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

import { ItemCounter } from "../ui";
import { CartContext } from "@/src/context/cart";
import { ICartProduct } from "@/src/interfaces";

interface Props {
  editable?: boolean;
}

export const CartList = ({ editable = false }: Props) => {
  const { cart, updateCartQuantity, removeCartProduct } =
    useContext(CartContext);

  const onNewQuantityValue = (
    product: ICartProduct,
    newQuantityValue: number
  ) => {
    product.quantity = newQuantityValue;
    updateCartQuantity(product);
  };
  return (
    <Box>
      {cart.map((product) => (
        <Grid2
          container
          key={product.slug + product.size}
          spacing={2}
          sx={{ marginBottom: 2 }}
          alignItems="center"
        >
          {/* Imagen */}
          <Grid2 sx={{ xs: 12, sm: 5, md: 6 }}>
            <Card sx={{ display: "flex", justifyContent: "center" }}>
              <NextLink href={`/product/${product.slug}`} passHref>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    sx={{
                      width: {
                        sm: "130px",
                        md: "150px",
                        lg: "200px",
                      },
                      height: {
                        sm: "130px",
                        md: "150px",
                        lg: "200px",
                      },
                      objectFit: "cover",
                    }}
                    image={`/products/${product.images}`}
                    alt={product.slug}
                  />
                </CardActionArea>
              </NextLink>
            </Card>
          </Grid2>

          <Grid2 flex={1} display="flex" justifyContent="space-between">
            {/* Información del producto */}
            <Grid2 sx={{ xs: 12, sm: 5, md: 6 }}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Box>
                  <Typography
                    variant="subtitle1"
                    fontWeight={400}
                    sx={{
                      fontSize: { xs: "0.9rem", sm: "0.9rem", md: "1.2rem" },
                      whiteSpace: "wrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontSize: { sm: "0.8rem", md: "1rem" }, mt: 1 }}
                  >
                    Talla: <strong>{product.size}</strong>
                  </Typography>
                </Box>
                <Box mt={2}>
                  <Typography
                    variant="body1"
                    fontWeight={500}
                    sx={{ fontSize: { sm: "0.8rem", md: "1rem" } }}
                  >
                    Cantidad
                  </Typography>

                  {editable ? (
                    <ItemCounter
                      currentValue={product.quantity}
                      maxValue={10}
                      updateQuantity={(value) =>
                        onNewQuantityValue(product, value)
                      }
                    />
                  ) : (
                    <Typography>
                      {product.quantity}{" "}
                      {product.quantity > 1 ? "Productos" : "Producto"}
                    </Typography>
                  )}
                </Box>
              </Box>
            </Grid2>

            {/* Precio y acciones */}
            <Grid2
              sx={{
                xs: 12,
                sm: 3,
                md: 3,
                flexShrink: 0,
                maxWidth: { xs: "100%", sm: "150px" },
              }}
              display="flex"
              flexDirection="column"
              justifyContent={{ xs: "flex-end", md: "flex-start" }}
              alignItems="center"
            >
              <Typography
                variant="h6"
                fontWeight={700}
                color="text.primary"
                sx={{ fontSize: { xs: "0.8rem", md: "1.2rem" } }}
              >
                $ {product.price}
              </Typography>

              {editable && (
                <IconButton
                  color="error"
                  onClick={() => removeCartProduct(product)}
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </Grid2>
          </Grid2>
        </Grid2>
      ))}
    </Box>
  );
};
