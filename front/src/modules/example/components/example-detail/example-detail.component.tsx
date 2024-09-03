import { useQuery } from "@/modules/common/hooks/api/useQuery";
import styles from "./example-detail.module.scss";
import Image from "next/image";

type ExampleDetailProps = {
  exampleId: number;
};

type ExampleDetailType = {
  id: number;
  name: string;
  description: string;
  image: string;
  created_at: string;
};

export const ExampleDetail: React.FC<ExampleDetailProps> = ({ exampleId }) => {
  const result = useQuery<ExampleDetailType>({
    url: `http://localhost:3000/example/${exampleId}`,
    options: { headers: {} },
    timeout: 4000,
  });

  if (result.isLoading) {
    return <>Loading...</>;
  }

  if (result.isError) {
    return <>Error</>;
  }

  return (
    <div data-testid="example-detail" className={styles.container}>
      <div className={styles["example__card"]}>
        <Image
          src={result.data?.image ?? ""}
          alt="picture"
          width={130}
          height={130}
        />
        <h3>{result.data?.name}</h3>
        <p>{result.data?.description}</p>
      </div>
    </div>
  );
};
