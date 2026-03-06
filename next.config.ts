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
