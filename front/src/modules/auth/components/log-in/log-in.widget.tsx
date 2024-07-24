"use client";

import { FormEvent, useEffect, useState } from "react";
import styles from "./log-in.module.scss";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type LogInWidgetsProps = {
  afterSuccess?: Function;
};

export const LogInWidget: React.FC<LogInWidgetsProps> = ({ afterSuccess }) => {
  const { data } = useSession();
  const router = useRouter();

  const [loginStatus, setLoginStatus] = useState<
    "idle" | "check" | "confirm" | "error"
  >("idle");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoginStatus("check");
    const username = (
      event.currentTarget.elements.namedItem("username") as HTMLInputElement
    ).value;
    const password = (
      event.currentTarget.elements.namedItem("password") as HTMLInputElement
    ).value;

    const result = await signIn("credentials", {
      redirect: false,
      username: username,
      password: password,
    });

    if (!result?.ok) {
      setLoginStatus("error");
    } else {
      setLoginStatus("confirm");
    }
  };

  useEffect(() => {
    if (loginStatus === "confirm") {
      router.push("/");
    }
  }, [loginStatus]);

  return (
    <div className={styles.container}>
      <h1 className={styles["heading"]}>Log in</h1>
      <form className={styles.form} onSubmit={submit}>
        <div className={`${styles["form__group"]}`}>
          <label htmlFor="username" className={styles["form__label"]}>
            username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            className={styles["form__input"]}
            required
          />
        </div>
        <div className={styles["form__group"]}>
          <label htmlFor="password" className={styles["form__label"]}>
            password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            className={styles["form__input"]}
            required
          />
        </div>
        <div className={styles["form__actions"]}>
          <button type="submit" className={styles["submit__button"]}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
