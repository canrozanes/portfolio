import Image from "next/image";
import { styled } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ButtonLink from "./ButtonLink";
import SkillsChip from "./skills-chip";

interface ProjectCardProps {
  project: {
    title: string;
    slug: string;
    skills: string[];
    summary: string;
    image: {
      src: string;
      alt: string;
    };
  };
}

const StyledGrid = styled(Grid)({
  marginTop: "20px",
});

const ProjectCard = ({ project }: ProjectCardProps) => (
  <Box my={{ xs: 2, md: 4 }}>
    <StyledGrid container>
      <Grid item xs={12} md={4}>
        <Card>
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={456}
            height={256}
          />
        </Card>
      </Grid>
      <Grid item xs={12} md={8}>
        <Box ml={{ xs: 0, md: 5 }}>
          <Typography gutterBottom variant="h4" component="h3" paragraph>
            {project.title}
          </Typography>
          <Typography
            variant="body2"
            color="textPrimary"
            component="p"
            paragraph
          >
            {project.summary}
          </Typography>
          <SkillsChip skills={project.skills} />
          <Box mt={{ xs: 1, md: 2 }}>
            <ButtonLink
              href={`/projects/${project.slug}`}
              color="primary"
              variant="contained"
            >
              Learn More
            </ButtonLink>
          </Box>
        </Box>
      </Grid>
    </StyledGrid>
  </Box>
);

export default ProjectCard;
