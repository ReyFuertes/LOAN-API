import { LoansService } from './loans.service';
import { LoansController } from './loans.controller';
import { LoansRepository } from './loans.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([LoansRepository])],
  controllers: [LoansController],
  providers: [LoansService]
})
export class LoansModule {}
