import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Client } from './example/client';
import { ClientId } from './example/client-id';
import { Contract } from './example/contract';
import { ContractId } from './example/contract-id';
import { FinancialYear } from './example/financial-year';
import { FinancialYearId } from './example/financial-year-id';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<Contract> {
    // const contractId = new ContractId('Test ID');
    // const contract = new Contract();

    // contract.contractId = contractId;

    // const savedContract = await this.appService.save(contract);

    // const contractResult = await this.appService.getContract(contractId);
    const client = new Client();
    client.clientId = ClientId.CreateFrom('Client ID');
    client.name = 'name client';
    const financialYear = new FinancialYear();
    financialYear.financilaYearId =
      FinancialYearId.CreateFrom('FinancialYear ID');
    financialYear.year = '2023';

    client.financialYears = [financialYear];

    const result = this.appService.saveClient(client);

    return result;
  }
}
