import { ApplicationsService } from './applications.service';
import { ApplicationsRepository } from './applications.repository';
import { ApplicationsController } from './applications.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([ApplicationsRepository])],
  controllers: [ApplicationsController],
  providers: [ApplicationsService]
})
export class ApplicationsModule {}
