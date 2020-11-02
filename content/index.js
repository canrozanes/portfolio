const myomers = require("./projects/project1").default;
const whoWantsToBeADeveloper = require("./projects/project4").default;
const mastermind = require("./projects/project5").default;
const urlTrimShop = require("./projects/urlTrimShop").default;
const telus = require("./projects/teluscom").default;

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
