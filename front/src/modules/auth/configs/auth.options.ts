import { AuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/sign-in",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "yourself" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user: User = {
          id: credentials?.password ?? "asdf",
          role: "admin",
          image: "none",
          name: credentials?.username,
          apiSession: {
            accessToken: credentials?.password ?? "asdf",
          },
        };
        return credentials?.password === "secure-password" ? user : null;
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
