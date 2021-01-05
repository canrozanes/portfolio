import Box from "@material-ui/core/Box";

const Section = (props) => {
  const { children } = props;
  return (
    <Box
      my={{ xs: 5, md: 10 }}
      mx={{ xs: 0.5, md: 2 }}
      component="section"
      {...props}
    >
      {children}
    </Box>
  );
};

export default Section;
