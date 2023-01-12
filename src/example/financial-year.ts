import { Column, Entity, ManyToOne } from 'typeorm';
import { Client } from './client';
import { FinancialYearId } from './financial-year-id';

@Entity()
export class FinancialYear {
  @Column({
    type: 'uuid',
    primary: true,
    transformer: {
      from(value: string) {
        return new FinancialYearId(value);
      },
      to(financialYearId: FinancialYearId) {
        return financialYearId.toFinancialYearIdString();
      },
    },
  })
  financilaYearId: FinancialYearId;

  @Column()
  year: string;

  @ManyToOne(() => Client, (client: Client) => client.financialYears, {})
  client: Client;
}
