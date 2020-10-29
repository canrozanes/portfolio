import { AppProps } from "next/app";
import CmsProvider from "../cms/providers/cms";
import EditLink from "../cms/components/edit-link";

function MyApp({ Component, pageProps }: AppProps) {
  const isEditing = pageProps.isEditing ?? pageProps.preview ?? false;
  const cmsError = pageProps.error;
  return (
    <CmsProvider isEditing={isEditing} error={cmsError}>
      <>
        <EditLink />
        <Component {...pageProps} />
      </>
    </CmsProvider>
  );
}

export default MyApp;
