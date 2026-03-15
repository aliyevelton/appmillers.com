import type { NextConfig } from "next";

// For GitHub Pages project site: site is at https://<user>.github.io/<repo>/
// For user/org site (repo name username.github.io), leave basePath empty.
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isProjectSite =
  process.env.GITHUB_ACTIONS && repoName && !repoName.endsWith(".github.io");
// Use BASE_PATH env for local production builds (e.g. BASE_PATH=/appmillers.com npm run build)
const basePathFromEnv = process.env.BASE_PATH ?? "";
const basePath = isProjectSite ? `/${repoName}` : basePathFromEnv;
const assetPrefix =
  isProjectSite && process.env.GITHUB_REPOSITORY
    ? `https://${process.env.GITHUB_REPOSITORY.split("/")[0]}.github.io/${repoName}/`
    : basePath ? `https://aliyevelton.github.io${basePath}/` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: assetPrefix || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath || "",
  },
  // With basePath, Next still emits files at out/ root; use distDir so export lives under out/<repo> for GH Pages
  distDir: isProjectSite ? `out/${repoName}` : ".next",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
  },
  // Allow fonts when served from same origin / assetPrefix (avoids CSP blocking on GH Pages)
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "font-src 'self' data: https:;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
