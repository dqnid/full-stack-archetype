type BasicError = {
  code: string | number;
  number?: number;
  detail?: string;
  status?: number;
  suggestion?: string;
};

const code_error_mapping: Record<number, BasicError> = {
  400: {
    code: "BAD REQUEST",
    status: 400,
  },
  401: {
    code: "Unauthorized",
    status: 401,
  },
};

export class ResponseError extends Error {
  public error: BasicError | number;
  constructor(
    error: BasicError | number,
    public timestamp: number = Date.now(),
  ) {
    super();
    if (error instanceof Object) {
      this.error = error;
    } else {
      this.error = code_error_mapping[error];
    }
  }
}
