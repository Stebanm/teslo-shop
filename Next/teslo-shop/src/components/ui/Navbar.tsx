import React, { useContext, useState } from "react";

import NextLink from "next/link";
import { useRouter } from "next/router";

import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Input,
  InputAdornment,
  Toolbar,
  Typography,
} from "@mui/material";

import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { UiContext } from "@/src/context";
import { CartContext } from "@/src/context/cart";

export const Navbar = () => {
  const { asPath, push } = useRouter();

  const { toggleSideMenu } = useContext(UiContext);
  const { numberOfItems } = useContext(CartContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;
    push(`/search/${searchTerm}`);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      onSearchTerm();
    }
  };

  return (
    <AppBar>
      <Container>
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <NextLink href="/" passHref>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 0.5,
                  fontWeight: 600,
                  color: "black",
                  fontSize: "1.2rem",
                }}
              >
                Teslo |
              </Typography>
              <Typography color="black">Shop</Typography>
            </Box>
          </NextLink>

          <Box
            display="flex"
            justifyContent="center"
            gap={2}
            sx={{
              display: isSearchVisible ? "none" : { xs: "none", sm: "flex" },
            }}
          >
            <NextLink href="/category/men" passHref>
              <Button
                className={asPath === "/category/men" ? "primary-btn" : "info"}
              >
                Hombres
              </Button>
            </NextLink>
            <NextLink href="/category/women" passHref>
              <Button
                className={
                  asPath === "/category/women" ? "primary-btn" : "info"
                }
              >
                Mujeres
              </Button>
            </NextLink>
            <NextLink href="/category/kid" passHref>
              <Button
                className={asPath === "/category/kid" ? "primary-btn" : "info"}
              >
                Niños
              </Button>
            </NextLink>
          </Box>

          <Box display="flex" gap={1}>
            {/* Busqueda para pantallas grandes */}
            {isSearchVisible ? (
              <Input
                autoFocus
                sx={{
                  display: { xs: "none", sm: "flex" },
                }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                type="text"
                placeholder="Buscar..."
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={() => setIsSearchVisible(false)}>
                      <ClearOutlinedIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                }
              />
            ) : (
              <IconButton onClick={() => setIsSearchVisible(true)}>
                <SearchIcon
                  fontSize="small"
                  sx={{
                    display: { xs: "none", sm: "flex" },
                  }}
                />
              </IconButton>
            )}

            {/* Busqueda para pantallas pequeñas */}
            <IconButton
              sx={{ display: { xs: "flex", sm: "none" } }}
              onClick={toggleSideMenu}
            >
              <SearchIcon fontSize="small" />
            </IconButton>

            <NextLink href="/cart" passHref>
              <IconButton>
                <Badge
                  badgeContent={numberOfItems > 9 ? "+9" : numberOfItems}
                  color="secondary"
                >
                  <ShoppingCartIcon fontSize="small" />
                </Badge>
              </IconButton>
            </NextLink>

            <Button onClick={toggleSideMenu}>Menú</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
