import { Column, Entity, OneToMany } from 'typeorm';
import { ClientId } from './client-id';
import { FinancialYear } from './financial-year';

@Entity()
export class Client {
  @Column({
    type: 'uuid',
    primary: true,
    transformer: {
      from(value: any) {
        return new ClientId(value);
      },
      to(clientId: ClientId) {
        return clientId.clientIdValue;
      },
    },
  })
  clientId: ClientId;

  @Column()
  name: string;

  @OneToMany(() => FinancialYear, (financialYear) => financialYear.client, {
    cascade: true,
  })
  financialYears: FinancialYear[];
}
