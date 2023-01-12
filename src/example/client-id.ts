export class ClientId {
  constructor(public readonly clientIdValue: string) {}

  toClientIdString() {
    return this.clientIdValue;
  }

  static CreateFrom(clientIdValue: string): ClientId {
    return new ClientId(clientIdValue);
  }
}
