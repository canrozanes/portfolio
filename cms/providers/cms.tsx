import { useMemo } from "react";
import {
  GithubClient,
  GithubMediaStore,
  TinacmsGithubProvider,
} from "react-tinacms-github";
import { TinaCMS, TinaProvider } from "tinacms";
import { onLogin, onLogout } from "../utils/auth-handlers";
import { GithubToolbarProvider } from "./github";

export interface CmsProviderProps {
  isEditing: boolean;
  error: Error;
  children: React.ReactChild | React.ReactChild[];
}

function CmsProvider({ isEditing, error, children }: CmsProviderProps) {
  const memoizedCms = useMemo(() => {
    const github = new GithubClient({
      proxy: "/api/proxy-github",
      authCallbackRoute: "/api/create-github-access-token",
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
      baseRepoFullName: process.env.NEXT_PUBLIC_REPO_FULL_NAME,
      baseBranch: process.env.NEXT_PUBLIC_BASE_BRANCH,
      authScope: "repo",
    });
    const cms = new TinaCMS({
      enabled: isEditing,
      apis: {
        /**
         * 2. Register the GithubClient
         */
        github,
      },
      /**
       * 3. Register the Media Store
       */
      media: new GithubMediaStore(github),
      /**
       * 4. Use the Sidebar and Toolbar
       */
      sidebar: isEditing,
      toolbar: isEditing,
    });

    return cms;
  }, []);
  return (
    <TinaProvider cms={memoizedCms}>
      <TinacmsGithubProvider
        onLogin={onLogin}
        onLogout={onLogout}
        error={error}
      >
        <GithubToolbarProvider>{children}</GithubToolbarProvider>
      </TinacmsGithubProvider>
    </TinaProvider>
  );
}

export default CmsProvider;
