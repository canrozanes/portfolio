import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { styled } from "@material-ui/core/styles";
import SkillsChip from "./skills-chip";
import Section from "../components/section";

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

const About = () => {
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
            <Typography paragraph>
              I am a Full Stack Developer based in Toronto with a background in
              electrical engineering.
            </Typography>
            <Typography paragraph>
              With proven leadership and communication skills, I am passionate
              about using creativity and best practices to tackle complex
              challenges and working effectively in a team. Whether I am
              creating a web application or building automation tools to make
              businesses run efficiently, I want everything I build to be
              scalable, maintainable and have a positive impact on the lives of
              everyday users.
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
              <SkillsChip skills={languages} />
              <Typography variant="body1">Frameworks and Libraries</Typography>
              <SkillsChip skills={FrameworksLibraries} />
              <Typography variant="body1">Methods/Standards/Tools</Typography>
              <SkillsChip skills={etc} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default About;
