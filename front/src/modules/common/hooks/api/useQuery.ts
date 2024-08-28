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
  if (token) {
    options.headers = { ...options.headers, Authorization: "Bearer " + token };
  }

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    (async () => {
      if (session.status !== "loading") {
        const _response = await timedFetch<DataType>(url, options, timeout);
        if (_response) {
          setResponse(_response);
        } else {
          setIsError(true);
        }
        setIsLoading(false);
      }
    })();
  }, [url, JSON.stringify(options), timeout, session.status]);

  return { ...response, isLoading, isError };
}
