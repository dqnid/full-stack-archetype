import { PropsWithChildren } from "react";

import styles from "./home.module.scss";
import NavbarHeader from "../../components/navbar-header";
import UserDropdown from "@/modules/auth/components/user-dropdown";

export const HomeLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <NavbarHeader>
        <UserDropdown />
      </NavbarHeader>
      {children}
    </div>
  );
};
