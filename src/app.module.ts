import { Module } from '@nestjs/common';
import { BorrowersModule } from './borrowers/borrowers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    BorrowersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
