import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Use plain <img>/unoptimized assets so the build never depends on the
  // native `sharp` binary (its postinstall script is declined by pnpm here).
  images: { unoptimized: true },
  // Pin the workspace root — a stray package-lock.json in the home dir was
  // making Next infer the wrong root.
  turbopack: { root: projectRoot },
};

export default nextConfig;
