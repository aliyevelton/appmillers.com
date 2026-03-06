import type { NextConfig } from "next";

// For GitHub Pages project site: site is at https://<user>.github.io/<repo>/
// For user/org site (repo name username.github.io), leave basePath empty.
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isProjectSite =
  process.env.GITHUB_ACTIONS && repoName && !repoName.endsWith(".github.io");
const basePath = isProjectSite ? `/${repoName}` : "";
const assetPrefix =
  isProjectSite && process.env.GITHUB_REPOSITORY
    ? `https://${process.env.GITHUB_REPOSITORY.split("/")[0]}.github.io/${repoName}/`
    : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: assetPrefix || undefined,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
