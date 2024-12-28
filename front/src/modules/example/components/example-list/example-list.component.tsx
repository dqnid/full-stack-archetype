import { useQuery } from "@/modules/common/hooks/api/useQuery";
import styles from "./example-list.module.scss";
import Image from "next/image";
import Link from "next/link";

type ExampleListProps = {};

type ExampleListType = {
    results: {
        id: number;
        name: string;
        description: string;
        image: string;
        created_at: string;
    }[];
    count: number;
};

export const ExampleList: React.FC<ExampleListProps> = ({}) => {
    const result = useQuery<ExampleListType>({
        url: process.env.NEXT_PUBLIC_BACKEND_URL + "/example",
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
        <div data-testid="example-list" className={styles.container}>
            <ul>
                {result.data?.results?.map((example) => {
                    return (
                        <Link href={`/examples/${example.id}`} key={example.id}>
                            <li key={example.id}>
                                <Image
                                    src={example.image}
                                    alt="picture"
                                    width={30}
                                    height={30}
                                />
                                <span>{example.name}</span>
                                <span>{example.description}</span>
                            </li>
                        </Link>
                    );
                })}
            </ul>
            <div>This could be the pagination...</div>
        </div>
    );
};
