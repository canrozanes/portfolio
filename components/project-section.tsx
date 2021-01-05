import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ProjectCard from "./project-card";
import Section from "../components/section";
import { Project } from "../content/projects";

interface ProjectsProps {
  projects: Project[];
  isOwnPage?: boolean;
}

const Projects = ({ projects, isOwnPage }: ProjectsProps) => {
  return (
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
};

export default Projects;
