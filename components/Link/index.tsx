import NextLink from "next/link";
import MaterialLink from "@material-ui/core/Link";

const Link = (props) => {
  const { children, href } = props;
  return (
    <NextLink href={href} passHref>
      <MaterialLink {...props}>{children}</MaterialLink>
    </NextLink>
  );
};

export default Link;
