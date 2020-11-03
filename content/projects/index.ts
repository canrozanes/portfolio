import myomers from "./myomers/summary.json";
import telus from "./teluscom/summary.json";
import urlTrimShop from "./urlTrimShop/summary.json";
import mastermind from "./mastermind/summary.json";
import whoWantsToBeADeveloper from "./who-wants-to-be-a-dev/summary.json";

const getProjects = () => [
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
