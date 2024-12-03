import { Box, Typography } from "@mui/material";

export const Loading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="calc(100vh - 300px)"
    >
      <div className="loader"></div>
      <Typography mt={2}>Cargando...</Typography>
    </Box>
  );
};
