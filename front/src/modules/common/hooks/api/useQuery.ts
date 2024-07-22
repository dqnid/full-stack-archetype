import { useEffect, useState } from "react";
import { timedFetch } from "../../utils/timedFetch";

type QueryReturn<T> = {
  data?: T;
  status?: number;
  isLoading: boolean;
  isError: boolean;
};

type QueryInput = {
  url: string;
  options: RequestInit;
  timeout: number;
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

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    async () => {
      const _response = await timedFetch<DataType>(url, options, timeout);
      if (_response) {
        setResponse(_response);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setIsError(true);
      }
    };
  }, [url, options, timeout]);

  return { ...response, isLoading, isError };
}
