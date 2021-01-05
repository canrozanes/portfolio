import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { styled } from "@material-ui/core/styles";
import SkillsChip from "./skills-chip";
import Section from "../components/section";
import Markdown from "markdown-to-jsx";
import { AboutData } from "../content/home/about";

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

interface AboutProps {
  data: AboutData;
}

const About = ({ data }: AboutProps) => {
  const aboutSummaryData = data.summary;
  const aboutSkillsData = data.skills;

  return (
    <Section id="about">
      <Container>
        <Typography variant="h2" component="h2" align="center" paragraph>
          A little bit about me
        </Typography>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Markdown
              options={{
                overrides: {
                  p: {
                    component: Typography,
                    props: {
                      paragraph: true,
                      variant: "body1",
                    },
                  },
                },
              }}
            >
              {aboutSummaryData}
            </Markdown>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box ml={{ xs: 0, md: 5 }}>
              <Typography variant="h5" component="h3">
                Technical Skills:
              </Typography>
              <Typography variant="body1">Programming Languages:</Typography>
              <SkillsChip skills={aboutSkillsData.languages} />
              <Typography variant="body1">Frameworks and Libraries</Typography>
              <SkillsChip skills={aboutSkillsData.frameworks} />
              <Typography variant="body1">Methods/Standards/Tools</Typography>
              <SkillsChip skills={aboutSkillsData.methods} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default About;
