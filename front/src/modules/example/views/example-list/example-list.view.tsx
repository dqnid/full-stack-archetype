import styles from "./example-list.module.scss";
import { ExampleList } from "../../components/example-list";

type ExampleListProps = {};

export const ExampleListView: React.FC<ExampleListProps> = ({}) => {
    return (
        <div data-testid="{example-list}" className={styles.container}>
            <ExampleList />
        </div>
    );
};
