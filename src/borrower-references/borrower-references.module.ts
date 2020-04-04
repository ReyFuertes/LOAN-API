import { BorrowerReferencesController } from './borrower-references.contoller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BorrowerRefencesService } from './borrower-references.service';
import { BorrowerReferencesRepository } from './borrower-references.repository';

@Module({
  imports: [TypeOrmModule.forFeature([BorrowerReferencesRepository])],
  controllers: [BorrowerReferencesController],
  providers: [BorrowerRefencesService]
})
export class BorrowersReferencesModule {}
