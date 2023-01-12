import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Contract } from './example/contract';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      autoLoadEntities: true,
      logging: 'all',
    }),
    TypeOrmModule.forFeature([Contract]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
