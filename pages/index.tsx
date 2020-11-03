import Head from "next/head";
import { GetStaticProps } from "next";
import { getGithubPreviewProps, parseJson, getFile } from "next-tinacms-github";
import { usePlugin } from "tinacms";
import {
  useGithubJsonForm,
  useGithubToolbarPlugins,
} from "react-tinacms-github";
import Hero from "../components/hero";
import About from "../components/about";
import Projects from "../components/project-section";
import getProjects from "../content/projects";
import getAboutContent from "../content/home/about";
import getMeta from "../content/home";

export default function Home({ home, projects, about, meta }) {
  const formOptions = {
    label: "Home Page",
    fields: [{ name: "title", component: "text" }],
  };
  console.log(about);

  const [data, form] = useGithubJsonForm(home.file, formOptions);
  usePlugin(form);
  useGithubToolbarPlugins();
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Hero />
      <About about={about} />
      <Projects projects={projects} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async function ({
  preview,
  previewData,
}) {
  let props = {
    home: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: "content/home/meta.json",
        data: null,
      },
    },
    about: {
      summary: null,
      skills: null,
    },
    projects: [],
    meta: null,
  };
  if (preview) {
    const homeProps = await getGithubPreviewProps({
      ...previewData,
      fileRelativePath: "content/home.json",
      parse: parseJson,
    });
    props = homeProps.props;
  } else {
    props.projects = getProjects();
    props.about = getAboutContent();
    props.meta = getMeta();
  }
  return {
    props,
  };
};
