import skills from "./skills.json";
import summary from "./about.md";

const getAboutContent = () => {
  return {
    skills,
    summary,
  };
};

export default getAboutContent;
