import { CartList } from "@/src/components/cart/CartList";
import { OrderSummary } from "@/src/components/cart/OrderSummary";
import { ShopLayouts } from "@/src/components/layouts";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid2,
  Typography,
} from "@mui/material";

const CardPage = () => {
  return (
    <ShopLayouts title="Carrito - 3" pageDescription="Carrito de compras">
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1" component="h6" fontWeight={600}>
          Carrito de compras
        </Typography>
        <Typography variant="body2" fontWeight={200} color="#7f8c8d">
          Productos agregados
        </Typography>
      </Box>

      <Grid2 container spacing={3} columns={16}>
        <Grid2 size={{ xs: 16, sm: 10 }}>
          <CartList editable />
        </Grid2>
        <Grid2 size={{ xs: 16, sm: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="h2" component="h2">
                Orden
              </Typography>
              <Divider sx={{ my: 1 }} />

              <OrderSummary />

              <Box sx={{ mt: 3 }}>
                <Button color="secondary" className="circular-btn" fullWidth>
                  Checkout
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </ShopLayouts>
  );
};

export default CardPage;
