import skills from "./skills.json";
import summary from "./about.md";

export interface AboutData {
  skills: {
    languages: string[];
    frameworks: string[];
    methods: string[];
  };
  summary: string;
}

const getAboutContent = (): AboutData => {
  return {
    skills,
    summary,
  };
};

export default getAboutContent;
