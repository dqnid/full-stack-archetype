import { useEffect, useState } from "react";
import { timedFetch } from "../../utils/timedFetch";
import { useSession } from "next-auth/react";

type QueryReturn<T> = {
    data?: T;
    status?: number;
    isLoading: boolean;
    isError: boolean;
};

type QueryInput = {
    url: string;
    options: RequestInit;
    timeout?: number;
};

export function useQuery<DataType>({
    url,
    options,
    timeout,
}: QueryInput): QueryReturn<DataType> {
    const [response, setResponse] = useState<{
        data: DataType;
        status: number;
    }>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    const session = useSession();
    const token = session.data?.apiSession?.accessToken;

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        (async () => {
            if (session.status !== "loading") {
                let secured_options = JSON.parse(JSON.stringify(options));
                if (token) {
                    secured_options.headers = {
                        ...secured_options.headers,
                        Authorization: "Bearer " + token,
                    };
                }
                const _response = await timedFetch<DataType>(
                    url,
                    secured_options,
                    timeout,
                );
                if (_response) {
                    setResponse(_response);
                } else {
                    setIsError(true);
                }
                setIsLoading(false);
            }
        })();
    }, [url, timeout, session.status, JSON.stringify(options)]);

    return { ...response, isLoading, isError };
}
