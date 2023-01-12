export class FinancialYearId {
  constructor(public readonly financialYearValue: string) {}

  static CreateFrom(financialYearValue: string): FinancialYearId {
    return new FinancialYearId(financialYearValue);
  }

  toFinancialYearIdString(): string {
    return this.financialYearValue;
  }
}
