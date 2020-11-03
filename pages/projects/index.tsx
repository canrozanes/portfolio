import Head from "next/head";
import Projects from "../../components/project-section";
import getProjects from "../../content/projects";

const ProjectsPage = ({ projects }) => (
  <>
    <Head>
      <title>Projects | Can Rozanes</title>
    </Head>
    <Projects projects={projects} isOwnPage />
  </>
);

export async function getStaticProps() {
  const res = await getProjects();
  return {
    props: { projects: res },
  };
}

export default ProjectsPage;
