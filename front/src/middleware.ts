import { withAuth } from "next-auth/middleware";
import { authOptions } from "./modules/auth/configs/auth.options";

export default withAuth({
  pages: authOptions.pages,
  callbacks: {
    authorized({ req, token }) {
      if (token) return true;
      const pathname = req.nextUrl.pathname;
      return (
        pathname.startsWith("/_next/") ||
        pathname.startsWith("/favicon.ico") ||
        pathname.startsWith("/assets/")
      );
    },
  },
});
