import { useCMS } from "tinacms";
import Button from "@material-ui/core/Button";

const EditLink = () => {
  const cms = useCMS();
  return (
    <Button
      onClick={() => cms.toggle()}
      size="small"
      variant="outlined"
      color="inherit"
    >
      {cms.enabled ? "Exit Edit Mode" : "Edit This Site"}
    </Button>
  );
};

export default EditLink;
