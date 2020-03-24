import { BorrowersRepository } from './borrowers.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BorrowersController } from './borrowers.controller';
import { BorrowersService } from './borrowers.service';

@Module({
  imports: [TypeOrmModule.forFeature([BorrowersRepository])],
  controllers: [BorrowersController],
  providers: [BorrowersService]
})
export class BorrowersModule {}
