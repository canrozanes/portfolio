import { styled } from "@material-ui/core/styles";
import Link from "./Link";

const StyledLink = styled(Link)({
  fontSize: "18px",
});

const List = styled("ul")({
  display: "flex",
  justifyContent: "flex-end",
  marginLeft: "auto",
  listStyle: "none",
  alignItems: "center",
});

const ListItem = styled("li")(({ theme }) => ({
  marginRight: theme.spacing(3),
  "&:last-of-type": {
    marginRight: 0,
  },
}));

const TopNav = () => (
  <nav>
    <List>
      <ListItem>
        <StyledLink color="textPrimary" href="/" underline="hover">
          Home
        </StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink color="textPrimary" href="#about" underline="hover">
          About
        </StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink color="textPrimary" href="/projects" underline="hover">
          Projects
        </StyledLink>
      </ListItem>
    </List>
  </nav>
);

export default TopNav;
