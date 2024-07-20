"use client";

import { signIn, useSession } from "next-auth/react";

export const SignInWidget = () => {
  const { data } = useSession();
  return (
    <div>
      <button
        onClick={async () => {
          const result = await signIn("credentials", {
            redirect: false,
            username: "dqnid",
            password: "1234",
            callbackUrl: "/",
          });

          console.debug("Login result:", result);

          if (result?.error === "CredentialsSignin") {
            return "Invalid credentials";
          }
        }}
      >
        LOGIN
      </button>
      {JSON.stringify(data)}
    </div>
  );
};
