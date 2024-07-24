import { LogInWidget } from "../../components/log-in/log-in.widget";
import styles from "./log-in.module.scss";

type LogInWidgetsProps = {};

export const LogInView: React.FC<LogInWidgetsProps> = ({}) => {
  return (
    <div className={styles.container}>
      <LogInWidget />
    </div>
  );
};
