import { Box, Typography } from "@mui/material";

import { ShopLayouts } from "../components/layouts";
import Image from "next/image";

const ErrorPage = () => {
  return (
    <ShopLayouts title="Page not found" pageDescription="Pagina no encontrada.">
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
        {/* <img
          src="/not-found.png"
          alt="Not found page"
          height="auto"
          width="100px"
        /> */}

        <Image
          src="/not-found.png"
          alt="Not found page"
          height={100}
          width={100}
        />
        <Box display="flex" justifyContent="center" flexDirection="column">
          <Typography
            variant="h1"
            component="h1"
            sx={{ fontSize: { xs: "25px", md: "32px" } }}
          >
            Página no encontrada
          </Typography>
          <Typography
            textAlign="center"
            fontSize="15px"
            fontWeight="300"
            sx={{
              fontSize: { xs: "15px", xl: "20px" },
              marginTop: { xs: "10px", sm: "0px" },
            }}
          >
            Estamos trabajando para mejor tu experiencia en Teslo | Shop
          </Typography>
        </Box>
      </Box>
    </ShopLayouts>
  );
};

export default ErrorPage;
