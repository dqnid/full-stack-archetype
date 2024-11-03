import { withAuth } from "next-auth/middleware";
import { authOptions } from "./modules/auth/configs/auth.options";

export default withAuth({
    pages: authOptions.pages,
    callbacks: {
        authorized({ req, token }) {
            if (token && token.apiSession.exp * 1000 > Date.now()) {
                return true;
            }
            const pathname = req.nextUrl.pathname;
            return (
                pathname.startsWith("/_next/") ||
                pathname.startsWith("/favicon.ico") ||
                pathname.startsWith("/assets/")
            );
        },
    },
});

const value = {
    token: {
        name: "dqnid",
        picture: "https://picsum.photos/200/300",
        sub: "dqnid",
        user: {
            id: "dqnid",
            roles: ["user", "manager", "admin"],
            image: "https://picsum.photos/200/300",
            name: "dqnid",
        },
        apiSession: {
            exp: 1725398177,
        },
        iat: 1725394577,
        exp: 1727986577,
        jti: "3203d3c7-dc27-4599-b37e-16737b3a6674",
    },
};
