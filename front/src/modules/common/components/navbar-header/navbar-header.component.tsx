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
        LoGo
      </Link>
      <nav>{props.children}</nav>
    </header>
  );
};
