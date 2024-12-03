import { useContext } from "react";

import { Grid2, Typography } from "@mui/material";

import { CartContext } from "@/src/context/cart";
import { currency } from "@/src/utils";

export const OrderSummary = () => {
  const { numberOfItems, subtotal, total, tax } = useContext(CartContext);

  return (
    <Grid2 container>
      <Grid2 size={{ xs: 6 }}>
        <Typography fontSize={{ xs: "0.9rem", sm: "0.8rem", md: "1rem" }}>
          No. Productos
        </Typography>
      </Grid2>
      <Grid2 size={{ xs: 6 }} display="flex" justifyContent="end">
        <Typography fontSize={{ xs: "0.9rem", sm: "0.8rem", md: "1rem" }}>
          {numberOfItems} {numberOfItems > 1 ? "Producto" : "Productos"}
        </Typography>
      </Grid2>

      <Grid2 size={{ xs: 6 }}>
        <Typography fontSize={{ xs: "0.9rem", sm: "0.8rem", md: "1rem" }}>
          Subtotal
        </Typography>
      </Grid2>
      <Grid2 size={{ xs: 6 }} display="flex" justifyContent="end">
        <Typography fontSize={{ xs: "0.9rem", sm: "0.8rem", md: "1rem" }}>
          {currency.format(subtotal)}
        </Typography>
      </Grid2>

      <Grid2 size={{ xs: 6 }}>
        <Typography fontSize={{ xs: "0.9rem", sm: "0.8rem", md: "1rem" }}>
          Impuestos ({Number(process.env.NEXT_PUBLIC_TAX_RATE) * 100}%)
        </Typography>
      </Grid2>
      <Grid2 size={{ xs: 6 }} display="flex" justifyContent="end">
        <Typography fontSize={{ xs: "0.9rem", sm: "0.8rem", md: "1rem" }}>
          {currency.format(tax)}
        </Typography>
      </Grid2>

      <Grid2 size={{ xs: 6 }} mt={2}>
        <Typography
          fontSize={{ xs: "1.2rem", sm: "1rem", md: "1rem" }}
          fontWeight={600}
        >
          Total
        </Typography>
      </Grid2>
      <Grid2 size={{ xs: 6 }} mt={2} display="flex" justifyContent="end">
        <Typography fontSize={{ xs: "1.2rem", sm: "1rem", md: "1rem" }}>
          {currency.format(total)}
        </Typography>
      </Grid2>
    </Grid2>
  );
};
