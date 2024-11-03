import { signIn } from "next-auth/react";
import styles from "./sign-in-button.module.scss";

export const SignInButton = () => {
    return (
        <button className={styles.button} onClick={() => void signIn()}>
            Sign in
        </button>
    );
};
