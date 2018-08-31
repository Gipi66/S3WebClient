export class AuthToken {
  private _accessKey: string;
  private _secretKey: string;

  get accessKey(): string {
    return this._accessKey;
  }

  set accessKey(value: string) {
    this._accessKey = value;
  }

  get secretKey(): string {
    return this._secretKey;
  }

  set secretKey(value: string) {
    this._secretKey = value;
  }
}
