import styles from "./user-panel.module.scss";
import SignOutButton from "../sign-out-button";
import { useSession } from "next-auth/react";
import ThemeSwitcher from "@/modules/common/components/theme-switcher";

export function UserPanel() {
  const session = useSession();

  return (
    <ul className={styles.frame}>
      <li className={styles["user__name"]}>{session.data?.user?.name}</li>
      <ul className={styles["user__roles"]}>
        {session.data?.user?.roles.map((role) => (
          <li key={role} className={styles["role__chip"]}>
            {role}
          </li>
        ))}
      </ul>
      <ThemeSwitcher />
      <SignOutButton />
    </ul>
  );
}
