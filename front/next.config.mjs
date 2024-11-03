import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
    /**
     * https://nextjs.org/docs/app/building-your-application/styling/sass
     */
    sassOptions: {
        // optional: prependData: `@import "@/styles/variables";`,
        includePaths: [path.join("@", "styles")],
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "picsum.photos",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
