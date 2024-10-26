export class ResponseSuccess {
  public data?: unknown;
  public results?: unknown[];
  public count?: number;

  constructor(data: unknown) {
    if (data instanceof Array) {
      this.results = data;
      this.count = data.length;
    } else if (data instanceof Object) {
      Object.assign(this, data);
    } else {
      this.data = data;
    }
  }
}
