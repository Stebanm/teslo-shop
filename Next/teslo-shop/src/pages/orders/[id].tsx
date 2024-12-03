import NextLink from "next/link";

import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid2,
  Typography,
} from "@mui/material";

import CreditScoreIcon from "@mui/icons-material/CreditScore";

import { CartList } from "@/src/components/cart/CartList";
import { OrderSummary } from "@/src/components/cart/OrderSummary";
import { ShopLayouts } from "@/src/components/layouts";

const OrderPage = () => {
  return (
    <ShopLayouts
      title="Resumen de la orden 1238721638"
      pageDescription="Resumen de la orden"
    >
      <Box
        display="flex"
        gap={2}
        sx={{ mb: 2, flexDirection: { xs: "column", sm: "row" } }}
      >
        <Typography variant="h6" component="h6">
          Orden: #b9S001
        </Typography>

        {/* <Chip
          icon={<CreditCardOffIcon />}
          label="Orden por pagar"
          variant="outlined"
          color="error"
        /> */}

        <Chip
          icon={<CreditScoreIcon />}
          label="Orden pagada correctamente"
          variant="outlined"
          color="success"
        />
      </Box>

      <Grid2 container spacing={3} columns={16}>
        <Grid2 size={{ xs: 16, sm: 10 }}>
          <CartList />
        </Grid2>
        <Grid2 size={{ xs: 16, sm: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="h2" component="h2">
                Resumen (3 Productos)
              </Typography>
              <Divider sx={{ my: 1 }} />

              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="subtitle1"
                  fontSize={{ xs: "1rem", sm: "1rem", md: "1.1rem" }}
                >
                  Dirección de entrega
                </Typography>
                <NextLink href="/checkout/address" passHref>
                  <Typography
                    color="primary"
                    sx={{ textDecoration: "underline" }}
                    fontSize={{ xs: "0.7rem", sm: "0.7rem", md: "0.9rem" }}
                  >
                    Editar
                  </Typography>
                </NextLink>
              </Box>

              <Typography fontSize={{ xs: "0.9rem", sm: "0.8rem", md: "1rem" }}>
                Juan Esteban
              </Typography>
              <Typography fontSize={{ xs: "0.9rem", sm: "0.8rem", md: "1rem" }}>
                Car 29e #6-26
              </Typography>
              <Typography fontSize={{ xs: "0.9rem", sm: "0.8rem", md: "1rem" }}>
                Palmira (Valle del Cauca)
              </Typography>
              <Typography fontSize={{ xs: "0.9rem", sm: "0.8rem", md: "1rem" }}>
                +57 3137413897
              </Typography>

              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="end" alignItems="center">
                <NextLink href="/cart" passHref>
                  <Typography
                    color="primary"
                    sx={{ textDecoration: "underline" }}
                    fontSize={{ xs: "0.7rem", sm: "0.7rem", md: "0.9rem" }}
                  >
                    Editar
                  </Typography>
                </NextLink>
              </Box>

              <OrderSummary />

              <Box sx={{ mt: 3 }}>
                <h1>Pagar</h1>
              </Box>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </ShopLayouts>
  );
};

export default OrderPage;
