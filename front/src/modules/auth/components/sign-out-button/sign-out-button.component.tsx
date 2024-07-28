import { signOut } from "next-auth/react";
import styles from "./sign-out-button.module.scss";

export const SignOutButton = () => {
  return (
    <button className={styles.button} onClick={() => void signOut()}>
      Sign out
    </button>
  );
};
