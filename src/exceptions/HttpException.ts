export default class HttpException extends Error {
  errorBol: boolean;
  status: number;
  stack: string | undefined;
  constructor(errorBol: boolean, status: number, message: string) {
    super();
    this.errorBol = errorBol;
    this.status = status;
    this.message = message;
  }
}
