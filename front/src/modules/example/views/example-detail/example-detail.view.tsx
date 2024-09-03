import { ExampleDetail } from "../../components/example-detail";
import styles from "./example-detail.module.scss";

type ExampleDetailViewProps = {
  // query parameters
  searchParams: { [key: string]: string | string[] | undefined };
  // url parameters
  params: { exampleId: string };
};

export const ExampleDetailView: React.FC<ExampleDetailViewProps> = ({
  params,
}) => {
  return (
    <div data-testid="example-detail-view" className={styles.container}>
      <ExampleDetail exampleId={parseInt(params.exampleId)} />
    </div>
  );
};
