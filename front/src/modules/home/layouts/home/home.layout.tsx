import { PropsWithChildren } from "react";

import styles from "./home.module.scss";
import UserDropdown from "@/modules/auth/components/user-dropdown";
import NavbarHeader from "@/modules/common/components/navbar-header";

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
