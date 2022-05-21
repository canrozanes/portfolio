import Container from "@material-ui/core/Container";
import { styled } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "./Link";

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: "20px 0px",
  [theme.breakpoints.up("md")]: {
    padding: "200px 0px",
  },
}));

const Hero = () => (
  <StyledContainer maxWidth="lg">
    <Box mx={{ xs: 1, md: 2 }}>
      <Box fontWeight={500}>
        <Typography variant="h5" paragraph>
          Hi, I’m Can!{" "}
          <span role="img" aria-label="emoji of waving hand">
            👋
          </span>{" "}
          (Pronounced John)
        </Typography>
      </Box>
      <Typography variant="h1" component="h1" paragraph>
        I’m a Full-Stack Developer.
      </Typography>
      <Typography paragraph variant="h5">
        I build accessible, maintainable, and user-friendly applications.
      </Typography>
      <Typography paragraph>
        To get in touch, you can{" "}
        <Link href="mailto:canrozanes@gmail.com" aria-label="Send me an email">
          email
        </Link>
        {" me or find me on "}
        <Link
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          aria-label="This is a Rick roll"
        >
          Linkedin
        </Link>
        {", "}
        <Link
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          aria-label="This is a Rick roll"
        >
          Github
        </Link>{" "}
        or{" "}
        <Link
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          aria-label="This is a Rick roll"
        >
          Twitter
        </Link>
        .
      </Typography>
      <Typography>
        Also,{" "}
        <Link
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          aria-label="This is a Rick roll"
        >
          here
        </Link>{" "}
        is my resume.
      </Typography>
    </Box>
  </StyledContainer>
);

export default Hero;
