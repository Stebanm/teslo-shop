import { ShopLayouts } from "@/src/components/layouts";
import { Box, Button, Grid2, MenuItem, TextField } from "@mui/material";
import React from "react";

const address = () => {
  return (
    <ShopLayouts
      title="Datos de cliente"
      pageDescription="Ingresar datos de compra del cliente"
    >
      <Box
        sx={{
          maxWidth: "1000px",
          margin: "auto",
          padding: "20px",
        }}
      >
        <Grid2 container spacing={2} columns={16}>
          <Grid2 size={{ xs: 16, sm: 8 }}>
            <TextField
              label="Nombres"
              variant="outlined"
              color="secondary"
              fullWidth
            />
          </Grid2>

          <Grid2 size={{ xs: 16, sm: 8 }}>
            <TextField
              label="Apellidos"
              variant="outlined"
              color="secondary"
              fullWidth
            />
          </Grid2>

          <Grid2 size={{ xs: 16, sm: 8 }}>
            <TextField
              label="Dirección"
              variant="outlined"
              color="secondary"
              fullWidth
            />
          </Grid2>

          <Grid2 size={{ xs: 16, sm: 8 }}>
            <TextField
              label="Dirección 2 (Opcional)"
              variant="outlined"
              color="secondary"
              fullWidth
            />
          </Grid2>

          <Grid2 size={{ xs: 16, sm: 8 }}>
            <TextField
              label="Cuidad"
              variant="outlined"
              color="secondary"
              fullWidth
            />
          </Grid2>

          <Grid2 size={{ xs: 16, sm: 8 }}>
            <TextField
              select
              label="Departamento"
              variant="outlined"
              color="secondary"
              fullWidth
            >
              <MenuItem value="producto1">Producto 1</MenuItem>
              <MenuItem value="producto2">Producto 2</MenuItem>
              <MenuItem value="producto3">Producto 3</MenuItem>
            </TextField>
          </Grid2>

          <Grid2 size={{ xs: 16, sm: 8 }}>
            <TextField
              label="Código Postal"
              variant="outlined"
              color="secondary"
              fullWidth
            />
          </Grid2>

          <Grid2 size={{ xs: 16, sm: 8 }}>
            <TextField
              label="Teléfono"
              variant="outlined"
              color="secondary"
              fullWidth
            />
          </Grid2>

          <Grid2
            size={16}
            sx={{ mt: 5 }}
            display="flex"
            justifyContent="center"
          >
            <Button
              color="secondary"
              size="large"
              className="circular-btn"
              sx={{ width: { xs: "100%", sm: "40%" } }}
            >
              Continuar
            </Button>
          </Grid2>
        </Grid2>
      </Box>
    </ShopLayouts>
  );
};

export default address;
