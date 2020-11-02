import { AppProps } from "next/app";
import CmsProvider from "../cms/providers/cms";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../styles/theme";
import EditLink from "../cms/components/edit-link";
import Layout from "../layouts"

function MyApp({ Component, pageProps }: AppProps) {
  const isEditing = pageProps.isEditing ?? pageProps.preview ?? false;
  const cmsError = pageProps.error;
  return (
    <ThemeProvider theme={theme}>
      <CmsProvider isEditing={isEditing} error={cmsError}>
        <Layout>
          <EditLink />
          <Component {...pageProps} />
        </Layout>
      </CmsProvider>
    </ThemeProvider>
  );
}

export default MyApp;
