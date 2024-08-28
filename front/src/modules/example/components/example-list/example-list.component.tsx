import { useQuery } from "@/modules/common/hooks/api/useQuery";
import styles from "./example-list.module.scss";

type ExampleListProps = {};

type ExampleListType = {
  id: number;
  name: string;
  description: string;
  image: string;
  created_at: string;
}[];

export const ExampleList: React.FC<ExampleListProps> = ({}) => {
  const result = useQuery<ExampleListType>({
    url: "http://localhost:3000/example",
    options: { headers: {} },
    timeout: 4000,
  });

  const one = useQuery<ExampleListType>({
    url: "http://localhost:3000/example/1",
    options: { headers: {} },
    timeout: 4000,
  });

  return (
    <div data-testid="{example-list}" className={styles.container}>
      {JSON.stringify(result.data)}
      {one.isError && <h1>ERROR</h1>}
      <h1>ONE{JSON.stringify(one.data)}</h1>
    </div>
  );
};
