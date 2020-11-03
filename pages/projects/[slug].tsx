import Head from "next/head";
import ProjectPage from "../../components/project-page";
import { getAllSlugs, getProjectBySlug } from "../../content/projects";

const Project = ({ project }) => (
  <>
    <Head>
      <title>{project.title}</title>
    </Head>
    <ProjectPage project={project} />
  </>
);

export async function getStaticPaths() {
  const projects = getAllSlugs();
  return {
    paths: projects,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.slug);
  return {
    props: {
      project,
    },
  };
}

export default Project;
