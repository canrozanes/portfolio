import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ProjectCard from "./project-card";
import Section from "../components/section";

interface ProjectsProps {
  projects: any;
  isOwnPage?: boolean;
}

const Projects = ({ projects, isOwnPage }: ProjectsProps) => (
  <Section>
    <Container maxWidth="lg">
      {isOwnPage ? (
        <Typography variant="h2" component="h1" align="center">
          Projects
        </Typography>
      ) : (
        <Typography variant="h2" component="h2" align="center">
          Some of my recent work
        </Typography>
      )}
      {projects.map((project) => (
        <ProjectCard project={project} key={project.title} />
      ))}
    </Container>
  </Section>
);

export default Projects;
