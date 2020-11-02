import Head from "next/head";
import { styled } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../components/header";
import Footer from "../components/footer";

const StyledDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "spaceBetween",
  minHeight: "100vh",
});

const StyledMain = styled("main")({
  flex: "1 0 auto",
  background: "url('/background.png')",
});

interface LayoutProps {
  children: React.ReactChild | React.ReactChild[];
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Head>
      <title>Can Rozanes</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <CssBaseline />
    <StyledDiv>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </StyledDiv>
  </>
);

export default Layout;
