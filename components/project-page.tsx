import Image from "next/image";
import { styled } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Markdown from "markdown-to-jsx";
import SkillsChip from "./skills-chip";
import ButtonLink from "./ButtonLink";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Project } from "../content/projects";

const ImgContainer = styled("div")({
  margin: "20px auto",
  maxWidth: "800px",
  height: "auto",
});

const HeadingContainer = styled("div")({
  margin: "20px auto",
});

const SkillsContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  margin: "20px 0",
});

const LinksContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
  "& a:first-child": {
    marginRight: "10px",
  },
});

const MarkdownContainer = styled("div")({
  margin: "50px",
  ["& li"]: {
    fontSize: "16px",
  },
});

interface ProjectPageProps {
  project: Project;
}

const ProjectPage = ({ project }: ProjectPageProps) => {
  const { title, skills, body, image, links } = project;
  return (
    <Container>
      <HeadingContainer>
        <Typography variant="h2" component="h1" align="center">
          {title}
        </Typography>
      </HeadingContainer>
      <ImgContainer>
        <Image src={image.src} alt={image.alt} width={800} height={460} />
      </ImgContainer>
      <SkillsContainer>
        <SkillsChip skills={skills} />
      </SkillsContainer>
      <LinksContainer>
        {links.map((link, index) => {
          if (index % 2 === 0) {
            return (
              <ButtonLink
                href={link.href}
                variant="contained"
                color="primary"
                key={link.text}
              >
                {link.text}
              </ButtonLink>
            );
          }
          return (
            <ButtonLink
              href={link.href}
              variant="outlined"
              color="primary"
              key={link.text}
            >
              {link.text}
            </ButtonLink>
          );
        })}
      </LinksContainer>
      <MarkdownContainer>
        <Markdown
          options={{
            overrides: {
              h1: {
                component: Typography,
                props: {
                  variant: "h1",
                },
              },
              h2: {
                component: Typography,
                props: {
                  variant: "h4",
                  component: "h2",
                },
              },
              h3: {
                component: Typography,
                props: {
                  variant: "h3",
                },
              },
              h4: {
                component: Typography,
                props: {
                  variant: "h4",
                },
              },
              p: {
                component: Typography,
                props: {
                  paragraph: true,
                  variant: "body1",
                },
              },
              // ol: {
              //   component: List,
              //   props: {
              //     component: "ol",
              //   },
              // },
              // li: {
              //   component: (props) => (
              //     <li>
              //       <Typography variant="body2">{props.children}</Typography>
              //     </li>
              //   ),
              // },
            },
          }}
        >
          {body}
        </Markdown>
      </MarkdownContainer>
    </Container>
  );
};

export default ProjectPage;
