import { AuthOptions, Role, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/auth/log-in",
        signOut: "/",
    },
    providers: [
        CredentialsProvider({
            name: "Sign in",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "yourself",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const response = await fetch(
                    process.env.NEXT_PUBLIC_AUTH_URL + "/auth/login",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            username: credentials?.username,
                            password: credentials?.password,
                        }),
                    },
                );

                type LoginResponse = {
                    access_token: string;
                };

                if (response.status < 200 || response.status > 399) return null;

                const response_body = (await response.json()) as LoginResponse;

                type TokenPayload = {
                    sub: string;
                    username: string;
                    roles: Role[];
                    picture: string;
                    iat: number;
                    exp: number;
                };

                const token_payload = JSON.parse(
                    atob(response_body.access_token.split(".")[1]),
                ) as TokenPayload;

                const user: User = {
                    id: token_payload.username,
                    roles: token_payload.roles,
                    image: token_payload.picture,
                    name: token_payload.username,
                    apiSession: {
                        exp: token_payload.exp,
                        accessToken: response_body.access_token,
                    },
                };

                return user;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            // Persist the OAuth access_token to the token right after signin
            if (user) {
                const { apiSession, ...cleanedUser } = user;
                token.user = cleanedUser;
                token.apiSession = apiSession;
            }
            return token;
        },
        async session({ session, token }) {
            // Send properties to the client, like an access_token from a provider.
            if (token?.user && session) {
                session.apiSession = token.apiSession;
                session.user = token.user;
            }
            return session;
        },
    },
};
