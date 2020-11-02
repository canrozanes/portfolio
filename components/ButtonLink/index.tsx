import NextLink from "next/link";
import Button from "@material-ui/core/Button";

const ButtonLink = (props) => {
  const { children, href } = props;

  return (
    <NextLink href={href} passHref>
      <Button {...props}>{children}</Button>
    </NextLink>
  );
};

export default ButtonLink;
