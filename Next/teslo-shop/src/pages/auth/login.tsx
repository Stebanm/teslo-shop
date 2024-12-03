import { useState } from "react";
import NextLink from "next/link";

import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import { AuthLayouts } from "@/src/components/layouts";

const AuthPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <AuthLayouts
      title="Iniciar Sesión"
      description="Ingresa con usuario y contraseña"
    >
      <Box display="flex" justifyContent="center">
        <Card sx={{ width: { xs: "100%", sm: "50%", md: "35%" } }}>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              my: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "18px", md: "20px" },
              }}
              letterSpacing={0.2}
              fontWeight={600}
              mb={1}
            >
              Iniciar Sesión
            </Typography>

            <Box display="flex" gap={1}>
              <Typography
                sx={{
                  fontSize: { xs: "13px", md: "14.4px" },
                }}
                letterSpacing={0.2}
                fontWeight={500}
                color="#7f8c8d"
              >
                No tienes cuenta aún?
              </Typography>
              <NextLink href="/auth/register" passHref>
                <Typography
                  sx={{
                    fontSize: { xs: "13px", md: "13.4px" },
                  }}
                  letterSpacing={0.2}
                  fontWeight={600}
                  color="secondary"
                >
                  ¡Registrate aqui!
                </Typography>
              </NextLink>
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              sx={{ width: "100%", padding: { xs: 0, md: 2 } }}
              mt={2}
            >
              <TextField
                label="Email Address"
                variant="outlined"
                color="secondary"
                fullWidth
              />

              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="end"
              >
                <NextLink href="/auth/reset" passHref>
                  <Typography
                    fontSize="14px"
                    fontWeight={400}
                    mb={1}
                    color="primary"
                  >
                    ¿Olvidaste tu contraseña?
                  </Typography>
                </NextLink>

                <FormControl
                  sx={{ width: "100%" }}
                  variant="outlined"
                  color="secondary"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showPassword
                              ? "hide the password"
                              : "display the password"
                          }
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? (
                            <VisibilityOffOutlinedIcon />
                          ) : (
                            <RemoveRedEyeOutlinedIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <Button
                  color="secondary"
                  fullWidth
                  sx={{
                    fontWeight: 600,
                    padding: 1.2,
                    borderRadius: "1rem",
                    backgroundColor: "#3a64d8",
                    color: "white",
                    ":hover": {
                      backgroundColor: "#274484",
                    },
                    mt: 4,
                  }}
                >
                  Iniciar Sesión
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </AuthLayouts>
  );
};

export default AuthPage;
