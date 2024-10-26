export class ResponseError extends Error {
  constructor(
    public error: {
      code: string | number;
      number?: number;
      detail?: string;
      status?: number;
      suggestion?: string;
    },
    public timestamp: number = Date.now(),
  ) {
    super();
  }
}
