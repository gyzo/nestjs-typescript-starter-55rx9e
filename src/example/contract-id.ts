export class ContractId {
  constructor(private readonly contractIdValue: string) {}

  toContractIdString(): string {
    return this.contractIdValue;
  }
}
