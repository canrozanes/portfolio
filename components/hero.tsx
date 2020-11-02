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
        href="mailto:canrozanes@gmail.com"
        aria-label="Go to my Linkedin Profile"
      >
        Linkedin
      </Link>
      {", "}
      <Link
        href="https://github.com/canrozanes/"
        aria-label="Go to my Github Profile"
      >
        Github
      </Link>{" "}
      or{" "}
      <Link
        href="https://twitter.com/canrozanes"
        aria-label="Go to my Twitter Profile"
      >
        Twitter
      </Link>
      .
    </Typography>
    <Typography>
      Also,{" "}
      <Link
        href="https://resume.creddle.io/resume/exze526vanl"
        aria-label="Go to my resume on creddle.io"
      >
        here
      </Link>{" "}
      is my resume.
    </Typography>
  </StyledContainer>
);

export default Hero;
