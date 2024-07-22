class HttpError extends Error {
  constructor(public response: Response) {
    super(`HTTP error ${response.status}`);
  }
}

async function timedFetch<ResponseType = any>(
  url: string,
  options: RequestInit = {},
  timeout: number = 5000,
) {
  try {
    const result = await fetch(url, {
      signal: AbortSignal.timeout(timeout),
      ...options,
    });
    if (!result.ok) {
      throw new HttpError(result);
    }
    return {
      data: (await result.json()) as ResponseType,
      status: result.status,
    };
  } catch (error) {
    if ((error as Error).name === "AbortError") {
      console.log(`Fetch aborted by timeout (${timeout}ms)`);
    }
  }
}

export { timedFetch };
