import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * https://nextjs.org/docs/app/building-your-application/styling/sass
   */
  sassOptions: {
    prependData: `@import "@/styles/variables";`,
    includePaths: [path.join("@", "styles")],
  },
};

export default nextConfig;
