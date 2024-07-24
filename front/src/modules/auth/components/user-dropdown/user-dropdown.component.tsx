import { UserFrame } from "../user-frame";
import styles from "./user-dropdown.module.scss";

export const UserDropdown = () => {
  return (
    <div className={styles.container}>
      <div className={styles["avatar__container"]}>
        <UserFrame />
      </div>
      <div></div>
      <button>Log out</button>
    </div>
  );
};
