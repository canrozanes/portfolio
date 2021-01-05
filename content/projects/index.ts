import myomers from "./myomers";
import telus from "./teluscom";
import urlTrimShop from "./urlTrimShop";
import mastermind from "./mastermind";
import whoWantsToBeADeveloper from "./who-wants-to-be-a-dev";

export interface Project {
  title: string;
  slug: string;
  skills: string[];
  summary: string;
  image: {
    src: string;
    alt: string;
  };
  links: {
    href: string;
    text: string;
  }[];
  body: string;
}

const getProjects = (): Project[] => [
  telus,
  myomers,
  urlTrimShop,
  mastermind,
  whoWantsToBeADeveloper,
];

export function getAllSlugs() {
  const res = getProjects();
  return res.map((project) => ({
    params: {
      slug: project.slug,
    },
  }));
}

export const getProjectBySlug = (slug) =>
  getProjects().find((p) => p.slug === slug);

export default getProjects;
