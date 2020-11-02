import Image from "next/image";
import { styled } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ReactMarkdown from "react-markdown";
import SkillsChip from "./skills-chip";
import ButtonLink from "./ButtonLink";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const ImgContainer = styled("div")({
  margin: "0 auto",
  maxWidth: "800px",
  height: "auto",
});

const SkillsContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
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
});

const ProjectPage = ({ project }) => {
  const { title, skills, body, image, links } = project;
  return (
    <Container>
      <Typography variant="h2" component="h1" align="center">
        {title}
      </Typography>
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
        <ReactMarkdown>{body}</ReactMarkdown>
      </MarkdownContainer>
    </Container>
  );
};

export default ProjectPage;
