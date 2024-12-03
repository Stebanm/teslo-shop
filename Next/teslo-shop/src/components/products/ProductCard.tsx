import { useMemo, useState } from "react";
import NextLink from "next/link";

import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Chip,
  Grid2,
  Typography,
} from "@mui/material";

import { IProduct } from "@/src/interfaces";

interface Props {
  product: IProduct;
}

export const ProductCard = ({ product }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const productImage = useMemo(() => {
    return isHovered
      ? `/products/${product.images[1]}`
      : `/products/${product.images[0]}`;
  }, [isHovered, product.images]);

  return (
    <Grid2
      size={{ xs: 6, sm: 4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
        <NextLink href={`/product/${product.slug}`} passHref prefetch={false}>
          <CardActionArea>
            {product.inStock === 0 && (
              <Chip
                color="primary"
                label="No disponible"
                sx={{
                  position: "absolute",
                  zIndex: 99,
                  top: "10px",
                  left: "10px",
                }}
              />
            )}
            <CardMedia
              component="img"
              image={productImage}
              alt={product.title}
              sx={{ transition: "opacity 0.3s ease-in-out" }}
              onLoad={() => setIsImageLoaded(true)}
            />
          </CardActionArea>
        </NextLink>
      </Card>

      <Box
        sx={{ mt: 1, animation: "fade-in" }}
        display={isImageLoaded ? "block" : "none"}
      >
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>$ {product.price}</Typography>
      </Box>
    </Grid2>
  );
};
