import NextLink from "next/link";
import { Box, Button, Typography } from "@mui/material";

import SubdirectoryArrowLeftIcon from "@mui/icons-material/SubdirectoryArrowLeft";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

import { ShopLayouts } from "@/src/components/layouts";

export const EmptyPage = () => {
  return (
    <ShopLayouts
      title="Carrito vació"
      pageDescription="No hay artículos en el carrito de compras"
    >
      <Box
        sx={{
          height: "calc(100vh - 200px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: "10px",
        }}
      >
        <RemoveShoppingCartIcon sx={{ fontSize: "50px", color: "#aeaeae" }} />
        <Box display="flex" justifyContent="center" flexDirection="column">
          <Typography variant="h6" component="h6" sx={{ fontSize: "25px" }}>
            Su carrito esta vació
          </Typography>

          <NextLink href="/" passHref>
            <Button
              color="secondary"
              startIcon={<SubdirectoryArrowLeftIcon />}
              variant="outlined"
              size="small"
              sx={{ mt: 2 }}
            >
              Ir a comprar
            </Button>
          </NextLink>
        </Box>
      </Box>
    </ShopLayouts>
  );
};

export default EmptyPage;
