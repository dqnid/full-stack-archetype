import { PropsWithChildren } from "react";

import styles from "./home.module.scss";
import { Header } from "../../components/header";

export const HomeLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
};
