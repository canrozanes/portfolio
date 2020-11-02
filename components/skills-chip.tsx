import { styled } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const ChipContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flexStart",
  flexWrap: "wrap",
  "& > *": {
    margin: theme.spacing(0.5),
    marginLeft: 0,
  },
}));

interface SkillsChip {
  skills: string[];
}

const SkillsChip = ({ skills }: SkillsChip) => {
  return (
    <ChipContainer>
      {skills.map((skill) => (
        <Chip label={skill} color="secondary" key={skill} />
      ))}
    </ChipContainer>
  );
};

export default SkillsChip;
