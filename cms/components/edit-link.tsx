import { useCMS } from "tinacms";

const EditLink = () => {
  const cms = useCMS();
  return (
    <button onClick={() => cms.toggle()}>
      {cms.enabled ? "Exit Edit Mode" : "Edit This Site"}
    </button>
  );
};

export default EditLink;
