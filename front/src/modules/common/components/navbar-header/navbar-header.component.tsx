import Link from "next/link";
import styles from "./navbar-header.module.scss";

import { PropsWithChildren } from "react";

/*
 * Receives the user component as a children in order to fetch it from the server and allow quick session information fetch
 * */
export const NavbarHeader = (props: PropsWithChildren) => {
    return (
        <header className={styles.header}>
            <Link href={"/"} className={styles.logo}>
                <img src="/main-logo.svg" alt="Main logo" />
                <h1>Your brand</h1>
            </Link>
            <nav>{props.children}</nav>
        </header>
    );
};
