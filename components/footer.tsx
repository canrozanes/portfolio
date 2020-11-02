import React from "react";
import { Toolbar, Typography, Box } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { styled } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const StyledFooter = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  width: "100%",
}));

const Footer = () => (
  <StyledFooter>
    <Toolbar>
      <Container>
        <Typography variant="body1">
          Built by Can Rozanes with{" "}
          <Link
            href="https://nextjs.org/"
            color="textSecondary"
            underline="always"
          >
            Next.js
          </Link>{" "}
          and{" "}
          <Link
            href="https://tinacms.org/"
            color="textSecondary"
            underline="always"
          >
            TinaCMS
          </Link>
          . Copyright &#169; 2020
        </Typography>
      </Container>
    </Toolbar>
  </StyledFooter>
);

export default Footer;
