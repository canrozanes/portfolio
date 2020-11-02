import React from "react";
import { styled } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "../components/Link";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import TopNav from "../components/topNav";

const HeaderLogo = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: "none",
  fontSize: "40px",
}));

const StyledAppBar = styled(AppBar)({
  justifyContent: "space-between",
  background: "white",
  position: "static",
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Header = () => (
  <StyledAppBar>
    <Container>
      <StyledToolbar disableGutters>
        <Typography variant="h4" component="span">
          <Box display={{ xs: "none", sm: "block" }}>
            <HeaderLogo href="/" color="textSecondary" underline="none">
              Can Rozanes
            </HeaderLogo>
          </Box>
          <Box display={{ xs: "block", sm: "none" }}>
            <HeaderLogo href="/" color="textSecondary" underline="none">
              CR
            </HeaderLogo>
          </Box>
        </Typography>
        <TopNav />
      </StyledToolbar>
    </Container>
  </StyledAppBar>
);

export default Header;
