import { ReactNode } from "react";

import Head from "next/head";
import NextLink from "next/link";

import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";

interface Props {
  title: string;
  description?: string;
  children: ReactNode;
}

export const AuthLayouts = ({ title, description, children }: Props) => {
  return (
    <Box>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

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
          </Toolbar>
        </Container>
      </AppBar>

      <Box
        sx={{
          margin: "80px auto",
          maxWidth: "1440px",
          padding: { xs: "0px 15px", md: "0px 30px" },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
