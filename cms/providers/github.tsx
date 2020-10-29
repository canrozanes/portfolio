import { useGithubToolbarPlugins } from "react-tinacms-github";

export interface GithubToolbarProviderProps {
  children: React.ReactChild | React.ReactChild[];
}

export function GithubToolbarProvider({
  children,
}: GithubToolbarProviderProps) {
  useGithubToolbarPlugins();

  return <>{children}</>;
}
