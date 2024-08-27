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
      <div className={styles["side__illustration"]}>
        <h1>
          Welcome to this <span>page!</span>
        </h1>
        <h4>Use your credentials to log-in</h4>
      </div>
      <form
        className={`${styles.form} ${loginStatus === "error" && styles["form--error"]} ${loginStatus === "check" && styles["form--loading"]}`}
        onSubmit={submit}
      >
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
          <div className={styles["form__message"]}>
            {loginStatus === "error" ? (
              <p className={styles["form__message--wrong"]}>
                Wrong credentials, try again
              </p>
            ) : (
              <>Loading...</>
            )}
          </div>
          <button type="submit" className={styles["submit__button"]}>
            Log-in
          </button>
        </div>
      </form>
    </div>
  );
};
