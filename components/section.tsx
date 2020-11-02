import Box from "@material-ui/core/Box";

const Section = (props) => {
  const { children } = props;
  return (
    <Box my={{ xs: 5, md: 10 }} component="section" {...props}>
      {children}
    </Box>
  );
};

export default Section;
