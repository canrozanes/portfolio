import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { styled } from "@material-ui/core/styles";
import SkillsChip from "./skills-chip";
import Section from "../components/section";
import ReactMarkdown from "react-markdown";

const SkillsContainer = styled("ul")(({ theme }) => ({
  listStyleType: "none",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  padding: "0",
  margin: "0",
}));

const SkillsItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(1),
  marginLeft: 0,
  marginTop: 0,
}));

const About = ({ about }) => {
  const languages = ["JavaScript", "TypeScript", "Node.js", "Golang", "Python"];
  const FrameworksLibraries = [
    "React.js",
    "Next.js",
    "Redux.js",
    "Express.js",
    "Jest",
    "Testing Library",
    "Node.js",
  ];
  const etc = [
    "Git/Git Flow",
    "Test Driven Development",
    "WCAG 2.0",
    "MongoDB",
  ];

  return (
    <Section id="about">
      <Container>
        <Typography variant="h2" component="h2" align="center" paragraph>
          A little bit about me
        </Typography>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography>
              <ReactMarkdown>{about.summary}</ReactMarkdown>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box ml={{ xs: 0, md: 5 }}>
              <Typography variant="h5" component="h3">
                Technical Skills:
              </Typography>
              <Typography variant="body1">
                I've worked with the following languages in the past:
              </Typography>
              <SkillsChip skills={about.skills.languages} />
              <Typography variant="body1">Frameworks and Libraries</Typography>
              <SkillsChip skills={about.skills.frameworks} />
              <Typography variant="body1">Methods/Standards/Tools</Typography>
              <SkillsChip skills={about.skills.methods} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default About;
