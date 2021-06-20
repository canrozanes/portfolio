import Head from "next/head";
import { GetStaticProps } from "next";
import Hero from "../components/hero";
import About from "../components/about";
import Projects from "../components/project-section";
import getProjects from "../content/projects";
import getAboutContent from "../content/home/about";

export default function Home({ projects, about }) {
  return (
    <>
      <Head>
        <title>Home | Can Rozanes</title>
      </Head>
      <Hero />
      {/* <About data={about} />
      <Projects projects={projects} /> */}
    </>
  );
}

export const getStaticProps: GetStaticProps = async function () {
  return {
    props: {
      projects: getProjects(),
      about: getAboutContent(),
    },
  };
};
