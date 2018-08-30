export class AuthToken {
  private _accessKey: String;
  private _secretKey: String;

  get accessKey(): String {
    return this._accessKey;
  }

  set accessKey(value: String) {
    this._accessKey = value;
  }

  get secretKey(): String {
    return this._secretKey;
  }

  set secretKey(value: String) {
    this._secretKey = value;
  }
}
