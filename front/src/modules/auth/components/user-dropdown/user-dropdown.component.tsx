import styles from "./user-dropdown.module.scss";
import UserPanel from "../user-panel";
import { UserFrame } from "../user-frame";

export const UserDropdown = async () => {
  return (
    <div className={styles.container}>
      <div className={styles["avatar__container"]}>
        <UserFrame />
      </div>
      <div className={styles["dropdown__container"]}>
        <UserPanel />
      </div>
    </div>
  );
};
