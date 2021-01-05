import { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../styles/theme";
import Layout from "../layouts";
import "../styles/styles.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
