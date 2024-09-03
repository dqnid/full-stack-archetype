import NextAuth, { DefaultSession } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  type Role = "user" | "manager" | "admin";
  interface ApiSession {
    exp?: number;
    accessToken: string;
    refreshToken?: string;
  }
  interface User {
    id: string;
    roles: Role[];
    image?: string;
    name?: string;
    apiSession?: ApiSession;
  }

  interface Session extends DefaultSession {
    user?: Omit<User, "apiSession">;
    apiSession?: ApiSession;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user?: Omit<User, "apiSession">;
    apiSession?: ApiSession;
  }
}
