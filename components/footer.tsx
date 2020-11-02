import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { styled } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import EditLink from "../cms/components/edit-link";

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

const StyledDiv = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row-reverse",
    marginTop: 0,
  },
}));

const Footer = () => (
  <StyledFooter>
    <Toolbar>
      <Container>
        <Grid container>
          <Grid item xs={12} md={10}>
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
          </Grid>
          <Grid item xs={12} md={2}>
            <StyledDiv>
              <EditLink />
            </StyledDiv>
          </Grid>
        </Grid>
      </Container>
    </Toolbar>
  </StyledFooter>
);

export default Footer;
