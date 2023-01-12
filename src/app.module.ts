import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Client } from './example/client';
import { Contract } from './example/contract';
import { FinancialYear } from './example/financial-year';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      autoLoadEntities: true,
      logging: 'all',
    }),
    TypeOrmModule.forFeature([Contract, Client, FinancialYear]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
