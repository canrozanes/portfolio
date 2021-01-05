import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { styled } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const StyledFooter = styled("footer")(({ theme }) => ({
  textAlign: "center",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  width: "100%",
  padding: "10px 0",
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
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
          and . Copyright &#169; 2021
        </Typography>
      </Container>
    </Toolbar>
  </StyledFooter>
);

export default Footer;
